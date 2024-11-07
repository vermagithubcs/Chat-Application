import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterUser/RegisterPage";
import CheckEmail from "../pages/EmailVerify/CheckEmail";
import PasswordVerify from "../pages/PasswordVerify/PasswordVerify";
import Home from "../pages/Home/Home";
import MessagePage from "../components/MessagePage/MessagePage";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
      {
        path: "checkEmail",
        element: (
          <AuthLayout>
            <CheckEmail />
          </AuthLayout>
        ),
      },
      {
        path: "passwordVerify",
        element: <AuthLayout><PasswordVerify /></AuthLayout>,
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
