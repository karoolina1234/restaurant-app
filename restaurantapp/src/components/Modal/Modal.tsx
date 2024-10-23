import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItem } from "../../redux/types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/reducerCart";

interface ItemDetailModalProps {
  open: boolean;
  item: MenuItem | any;
  onClose: () => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  open,
  item,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<any | null>(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const getPrice = () => {
    return selectedSize ? selectedSize.price : 0;
  };

  const handleAddToOrder = () => {
    const newItem = {
      ...item,
      quantity,
      totalPrice: (quantity * getPrice()).toFixed(2),
      option: selectedSize ? selectedSize.name : "",
    };
    dispatch(addItemToCart(newItem));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          maxWidth: isMobile ? " 100%" : 450,
          width: isMobile ? "100%" : "90%",
          bgcolor: "background.paper",
          margin: isMobile ? "0" : "auto",
          marginTop: isMobile ? "0px" : "5%",
          height: isMobile ? "100vh" : "auto",
          boxShadow: 24,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 9,
            background: "white",
            width: "1.5rem",
            height: "1.5rem",
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ width: "1rem", color: "#000" }} />
        </IconButton>

        {item && (
          <>
            <Box sx={{ position: "relative" }}>
              {item.images && item.images[0].image && (
                <img
                  src={item.images && item.images[0].image}
                  alt={item.name}
                  style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
            </Box>

            <Box>
              <Box sx={{ background: "#F8F9FA", padding: "8px" }}>
                <Typography variant="subtitle1">Choose your size</Typography>
                <Typography variant="caption" color="textSecondary">
                  Select 1 option
                </Typography>
              </Box>
              <Box sx={{ p: 1 }}>
                <RadioGroup
                  value={selectedSize ? JSON.stringify(selectedSize) : ""}
                  onChange={(e) => {
                    const selectedItem = JSON.parse(e.target.value);
                    setSelectedSize(selectedItem);
                  }}
                >
                  {item?.modifiers && item.modifiers.length > 0 ? (
                    item.modifiers[0]?.items.map((val: any) => (
                      <FormControlLabel
                        key={val.id}
                        value={JSON.stringify(val)}
                        control={
                          <Radio
                            sx={{
                              color: "#000",
                              "&.Mui-checked": {
                                color: "#000",
                              },
                            }}
                          />
                        }
                        label={`${val.name} - R$${val.price.toFixed(2)}`}
                        labelPlacement="start"
                        sx={{ justifyContent: "space-between", margin: "0rem" }}
                      />
                    ))
                  ) : (
                    <FormControlLabel
                      value={JSON.stringify(item)}
                      control={
                        <Radio
                          sx={{
                            color: "#000",
                            "&.Mui-checked": {
                              color: "#000",
                            },
                          }}
                        />
                      }
                      label={`Price - R$${item.price.toFixed(2)}`}
                      labelPlacement="start"
                      sx={{ justifyContent: "space-between", margin: "0rem" }}
                    />
                  )}
                </RadioGroup>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                p: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={() => handleQuantityChange(-1)}
                  variant="outlined"
                  size="small"
                  disabled={!selectedSize}
                  sx={{
                    minWidth: 36,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    padding: 0,
                    backgroundColor: "#452f26",
                    borderColor: "#452f26",
                  }}
                >
                  <span style={{ color: "#FFF", fontSize: "20px" }}>-</span>
                </Button>
                <Typography variant="body1" sx={{ mx: 2 }}>
                  {quantity}
                </Typography>
                <Button
                  onClick={() => handleQuantityChange(1)}
                  variant="outlined"
                  disabled={!selectedSize}
                  size="small"
                  sx={{
                    minWidth: 36,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    padding: 0,
                    backgroundColor: "#452f26",
                    borderColor: "#452f26",
                  }}
                >
                  <span style={{ color: "#FFF", fontSize: "20px" }}>+</span>
                </Button>
              </Box>
            </Box>

            <Box sx={{ m: 3 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={!selectedSize}
                onClick={handleAddToOrder}
                sx={{
                  position: isMobile ? "absolute" : "static",
                  bottom: isMobile ? "1rem" : "0",
                  width: isMobile ? "90%" : "100%",
                  backgroundColor: "#5c4033",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: 16,
                  padding: "12px 24px",
                  borderRadius: "10rem",
                  "&:hover": {
                    backgroundColor: "#452f26",
                  },
                }}
              >
                Add to Order • R$
                {(quantity * getPrice()).toFixed(2)}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ItemDetailModal;
