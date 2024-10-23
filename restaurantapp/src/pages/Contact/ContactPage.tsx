import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Banner from "../../assets/header.png";

const Contact = () => {
  const restaurant = useSelector(
    (state: RootState) => state.restaurant.restaurant
  );
  const loading = useSelector((state: RootState) => state.restaurant.loading);
  const isMobile = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ position: "relative", width: "100%", maxHeight: "150px" }}>
        {loading && (
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              style={{ color: restaurant?.webSettings?.primaryColour }}
            />
          </Box>
        )}
        <Box
          component="img"
          src={isMobile ? Banner : restaurant?.webSettings?.bannerImage}
          alt="Banner"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "150px",
            display: loading ? "none" : "block",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: restaurant?.webSettings?.backgroundColour,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginY: 2,
            color: restaurant?.webSettings?.primaryColour,
            textAlign: "center",
          }}
        >
          Contato
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, textAlign: "center" }}
        >
          Estamos aqui para ajudar! Entre em contato conosco através do
          formulário abaixo.
        </Typography>

        <Card variant="outlined" sx={{ marginTop: 2, borderRadius: 2 }}>
          <CardContent>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              onSubmit={handleSubmit}
            >
              <TextField
                label="Nome"
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextField
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                variant="contained"
                type="submit"
                endIcon={<MailOutlineIcon />}
                sx={{ alignSelf: "flex-start", backgroundColor: "#4f372f" }}
              >
                Enviar
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Endereço
          </Typography>
          <Typography variant="body1">
            {restaurant?.address1}, {restaurant?.city}, {restaurant?.postcode},{" "}
            {restaurant?.country}
          </Typography>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dados Enviados</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <strong>Nome:</strong> {formData.name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {formData.email}
          </Typography>
          <Typography variant="body1">
            <strong>Mensagem:</strong> {formData.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#4f372f" }}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
