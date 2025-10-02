// react router
import { createBrowserRouter } from "react-router";

// local imports
import HomePage from "../pages/home-page/homePage";
import AboutPage from "../pages/about-page/aboutPage";
import LoginPage from "../pages/login-page/loginPage";
import MainPageLayout from "../layouts/mainPageLayout";
import ForgotPassword from "../components/forget-password/forgetPassword";
import MainDashboardLayout from "../layouts/mainDashboardLayout";
import ProtectedRoute from "./protectedRoute";
import DashboardHome from "../pages/dashboard-pages/dashboard-home/dashboardHome"
import DashboardAnalysis from "../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis";
import DashboardContactUs from "../pages/dashboard-pages/dashboard-contactus/dashboardContactUs";

// ==================================================================================================================
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
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "contactUs",
        element: <DashboardContactUs />,
      },
      {
        path: "analysis",
        element: <DashboardAnalysis />,
      },
    ],
  },
]);
