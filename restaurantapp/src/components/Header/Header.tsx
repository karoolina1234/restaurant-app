import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { StyleHeader } from "./HeaderStyles";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComponent: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{ width: "100%" }}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
    >
      <List>
        <ListItem onClick={() => toggleDrawer(false)}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isActive" : "")}
            style={{
              textDecoration: "none",
              color: "inherit",
              padding: "8px 16px",
              display: "block",
            }}
          >
            Menu
          </NavLink>
        </ListItem>
        <ListItem onClick={() => toggleDrawer(false)}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "isActive" : "")}
            style={{
              textDecoration: "none",
              color: "inherit",
              padding: "8px 16px",
              display: "block",
            }}
          >
            Entrar
          </NavLink>
        </ListItem>
        <ListItem onClick={() => toggleDrawer(false)}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "isActive" : "")}
            style={{
              textDecoration: "none",
              color: "inherit",
              padding: "8px 16px",
              display: "block",
            }}
          >
            Contato
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <StyleHeader>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              <div className="currentItem">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  Menu
                </NavLink>
              </div>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
                style={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "8px 16px",
                  display: "block",
                }}
              >
                Menu
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "8px 16px",
                  display: "block",
                }}
              >
                Entrar
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "8px 16px",
                  display: "block",
                }}
              >
                Contato
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </StyleHeader>
  );
};

export default HeaderComponent;
