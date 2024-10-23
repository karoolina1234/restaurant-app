import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders login form", () => {
    renderWithRouter(<LoginPage />);
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  test("displays logged in message if user is already logged in", () => {
    localStorage.setItem("user", JSON.stringify({ email: "test@example.com" }));
    renderWithRouter(<LoginPage />);
    expect(screen.getByText(/você já está logado!/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeDisabled();
    expect(screen.getByLabelText(/Senha/i)).toBeDisabled();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeDisabled();
  });

  test("allows user to login", async () => {
    renderWithRouter(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Senha/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(screen.queryByText(/você já está logado!/i)).not.toBeInTheDocument();

    await waitFor(() => {
      expect(window.localStorage.getItem("user")).toEqual(
        JSON.stringify({ email: "test@example.com" })
      );
    });
  });

  test("allows user to logout", async () => {
    localStorage.setItem("user", JSON.stringify({ email: "test@example.com" }));
    renderWithRouter(<LoginPage />);

    const logoutButton = screen.getByRole("button", { name: /Sair/i });
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);

    expect(screen.queryByText(/você já está logado!/i)).not.toBeInTheDocument();

    expect(screen.getByLabelText(/E-mail/i)).toHaveValue("");
    expect(screen.getByLabelText(/Senha/i)).toHaveValue("");
  });
});
