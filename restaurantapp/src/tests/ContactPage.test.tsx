import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../pages/Contact/ContactPage";

interface RestaurantState {
  restaurant: {
    restaurant: {
      webSettings: {
        primaryColour: string;
        backgroundColour: string;
        bannerImage: string;
      };
      address1: string;
      city: string;
      postcode: string;
      country: string;
    } | null;
    loading: boolean;
  };
}

const initialState: RestaurantState = {
  restaurant: {
    restaurant: {
      webSettings: {
        primaryColour: "#4f372f",
        backgroundColour: "#ffffff",
        bannerImage: "banner-image-url.jpg",
      },
      address1: "123 Rua Exemplo",
      city: "Porto Alegre",
      postcode: "90000-000",
      country: "Brasil",
    },
    loading: false,
  },
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant(state, action: PayloadAction<RestaurantState["restaurant"]>) {
      state.restaurant = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
  },
});

test("renders form inputs and send button", () => {
  render(
    <Provider store={store}>
      <Contact />
    </Provider>
  );

  expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
});

test("submits the form and shows dialog with submitted data", () => {
  render(
    <Provider store={store}>
      <Contact />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/Nome/i), {
    target: { value: "Karolina Mendes" },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "karolina@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/Mensagem/i), {
    target: { value: "Hello, this is a test message." },
  });

  fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

  expect(screen.getByText(/Dados Enviados/i)).toBeInTheDocument();
  expect(screen.getByText(/Nome:/i)).toBeInTheDocument();
  expect(screen.getByText(/Karolina Mendes/i)).toBeInTheDocument();
  expect(screen.getByText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByText(/karolina@example.com/i)).toBeInTheDocument();
  expect(screen.getByText(/Mensagem:/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Hello, this is a test message./i)
  ).toBeInTheDocument();
});
test("send button is enabled when fields are filled", () => {
  render(
    <Provider store={store}>
      <Contact />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/Nome/i), {
    target: { value: "Karolina Mendes" },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "karolina@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/Mensagem/i), {
    target: { value: "Hello, this is a test message." },
  });

  const sendButton = screen.getByRole("button", { name: /Enviar/i });
  expect(sendButton).toBeEnabled();
});

