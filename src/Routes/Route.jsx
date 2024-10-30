import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListView from "../pages/ListView/ListView";
import Document from "../pages/Document/Document";
import Financial from "../pages/Financial/Financial";
import Login from "../pages/user-forms/Login";
import SignUpNumber from "../pages/user-forms/SignUpNumber";
import FormLayout from "../layout/FormLayout";
import SignUpNumberOTPVarify from "../pages/user-forms/SignUpNumberOTPVarify";
import SingupEmail from "../pages/user-forms/SingupEmail";
import SignUpEmailOTPVarify from "../pages/user-forms/SignUpEmailOTPVarify";
import DynamicForm from "../pages/dynamic-form/DynamicForm";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <FormLayout />,
    children: [
      {
        index: true, // Use index for the default route
        element: <SignUpNumber />,
      },
      {
        path: "number-verify", // Relative path to "/auth/listView"
        element: <SignUpNumberOTPVarify />,
      },
      {
        path: "registration-email", // Relative path to "/auth/listView"
        element: <SingupEmail />,
      },
      {
        path: "email-verify", // Relative path to "/auth/listView"
        element: <SignUpEmailOTPVarify />,
      },
      {
        path: "form", // Relative path to "/auth/listView"
        element: <DynamicForm />,
      },
      {
        path: "login", // Relative path to "/auth/listView"
        element: <Login />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Main />,
    children: [
      {
        index: true,
        path: "", // Relative path to "/auth/dashboard"
        element: <Dashboard />,
      },
      {
        path: "listView", // Relative path to "/auth/listView"
        element: <ListView />,
      },
      {
        path: "document", // Relative path to "/auth/document"
        element: <Document />,
      },
      {
        path: "financial", // Relative path to "/auth/financial"
        element: <Financial />,
      },
    ],
  },
]);
