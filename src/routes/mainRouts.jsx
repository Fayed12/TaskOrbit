// react router
import { createBrowserRouter } from "react-router";

// local imports
import HomePage from "../pages/home-page/homePage";
import AboutPage from "../pages/about-page/aboutPage";
import LoginPage from "../pages/login-page/loginPage";
import MainPageLayout from "../layouts/mainPageLayout";
import ForgotPassword from "../components/forget-password/forgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "managePassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);
