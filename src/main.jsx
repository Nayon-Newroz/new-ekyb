import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Slide from "@mui/material/Slide";
import { SnackbarProvider } from "notistack";
import { useSnackbar } from "notistack";
import axios from "axios";
import AuthContextProvider from "./context/AuthContext";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      TransitionComponent={Slide}
    >
      <AuthContextProvider>
        <RouterProvider router={route}></RouterProvider>
      </AuthContextProvider>
    </SnackbarProvider>
  </StrictMode>
);
