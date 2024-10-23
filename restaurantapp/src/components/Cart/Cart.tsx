import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/reducerCart";
import { CartItem } from "../../redux/types";

interface CartTypes {
  items: CartItem[];
  totalPriceEUR: number;
  totalPriceBRL: number;
}

const Cart = ({ items, totalPriceEUR, totalPriceBRL }: CartTypes) => {
  const dispatch = useDispatch();

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <div className={items.length > 0 ? "area-cart" : "empty-cart-area"}>
      <div className="header-cart">
        <p>Carrinho</p>
      </div>

      {items.length > 0 ? (
        <>
          <div className="area-items-cart">
            {items.map((item) => (
              <div key={item.name}>
                <div className="name-price">
                  <div className="title-name">
                    <p>{item.name}</p>
                    <span>{item.option}</span>
                  </div>
                  <p>{formatCurrency(item.totalPrice, "BRL")}</p>
                </div>

                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  className="quantity"
                >
                  <Button
                    onClick={() => dispatch(decreaseItemQuantity(item.name))}
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: 26,
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      padding: 0,
                      backgroundColor: "#452f26",
                      borderColor: "#452f26",
                    }}
                  >
                    <span style={{ color: "#FFF", fontSize: "15px" }}>-</span>
                  </Button>
                  <Typography variant="body1" sx={{ mx: 2 }}>
                    {item.quantity}
                  </Typography>
                  <Button
                    onClick={() => dispatch(increaseItemQuantity(item.name))}
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: 26,
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      padding: 0,
                      backgroundColor: "#452f26",
                      borderColor: "#452f26",
                    }}
                  >
                    <span style={{ color: "#FFF", fontSize: "15px" }}>+</span>
                  </Button>
                </Box>
              </div>
            ))}
          </div>

          <div className="subtotal">
            <p>Subtotal</p>
            <p>{formatCurrency(totalPriceEUR, "EUR")}</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>{formatCurrency(totalPriceBRL, "BRL")}</p>
          </div>
        </>
      ) : (
        <p className="empty-cart">Seu carrinho está vazio</p>
      )}
    </div>
  );
};

export default Cart;
