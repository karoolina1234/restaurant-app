import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedInMessage, setLoggedInMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setLoggedInMessage("Você já está logado!");
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedInMessage("");
    setEmail("");
    setPassword("");
  };

  const isLoggedIn = !!loggedInMessage;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 2,
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5">Login</Typography>
        {loggedInMessage && (
          <Alert severity="info" sx={{ mb: 2 }}>
            {loggedInMessage}
          </Alert>
        )}
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggedIn}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoggedIn}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#4f372f" }}
            disabled={isLoggedIn}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Entrar"
            )}
          </Button>
          {isLoggedIn && (
            <Button
              fullWidth
              variant="outlined"
              onClick={handleLogout}
              sx={{ mt: 2 }}
            >
              Sair
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
