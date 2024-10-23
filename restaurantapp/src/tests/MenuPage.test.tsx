import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  available: boolean;
}

interface Section {
  id: number;
  name: string;
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  sections: Section[];
}

interface RestaurantState {
  menu: Menu | null;
  loading: boolean;
}

const initialState: RestaurantState = {
  menu: null,
  loading: false,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<Menu>) {
      state.menu = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setMenu, setLoading } = restaurantSlice.actions;

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
  },
});

const mockMenu: Menu = {
  id: 1,
  name: "Menu Principal",
  sections: [
    {
      id: 1,
      name: "Entradas",
      items: [
        { id: 1, name: "Salada Caesar", price: 15.0, available: true },
        { id: 2, name: "Bruschetta", price: 10.0, available: true },
      ],
    },
    {
      id: 2,
      name: "Pratos Principais",
      items: [
        { id: 3, name: "Pasta al Pesto", price: 25.0, available: true },
        { id: 4, name: "Pizza Margherita", price: 20.0, available: false },
      ],
    },
  ],
};

const MenuPage = () => {
  const menu = store.getState().restaurant.menu;

  return (
    <div>
      <h1>{menu?.name}</h1>
      {menu?.sections.map((section) => (
        <div key={section.id}>
          <h2>{section.name}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.id}>
                {item.name} - R$ {item.price}{" "}
                {item.available ? "" : "(Indisponível)"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

beforeEach(() => {
  store.dispatch(setMenu(mockMenu));
});

test("renders MenuPage with menu items", () => {
  render(
    <Provider store={store}>
      <MenuPage />
    </Provider>
  );

  expect(screen.getByText(/Menu Principal/i)).toBeInTheDocument();
  expect(screen.getByText(/Salada Caesar/i)).toBeInTheDocument();
  expect(screen.getByText(/Pasta al Pesto/i)).toBeInTheDocument();
});

test("renders menu sections", () => {
  render(
    <Provider store={store}>
      <MenuPage />
    </Provider>
  );

  expect(screen.getByText(/Entradas/i)).toBeInTheDocument();
  expect(screen.getByText(/Pratos Principais/i)).toBeInTheDocument();
});

test("renders available and unavailable items", () => {
  render(
    <Provider store={store}>
      <MenuPage />
    </Provider>
  );

  expect(screen.getByText(/Salada Caesar/i)).toBeInTheDocument();
  expect(screen.getByText(/Bruschetta/i)).toBeInTheDocument();
  expect(screen.getByText(/Pasta al Pesto/i)).toBeInTheDocument();

  expect(screen.getByText(/Pizza Margherita/i)).toBeInTheDocument();
  expect(screen.getByText(/Indisponível/i)).toBeInTheDocument();
});

export default MenuPage;
