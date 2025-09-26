// react hooks
import { useEffect, useState } from "react";

// local imports
import WelcomePage from "./pages/welcome-page/welcome";
import MainPageLayout from "./layouts/mainPageLayout";

// react router
import { RouterProvider } from "react-router";
import { router } from "./routes/mainRouts";

// toaster
import { Toaster } from "react-hot-toast";


// ==================================================================================================
function App() {
  // is the welcome message opened or not start with true then become false
  const [isOpen, setIsOpen] = useState(() => {
    const welcomeIsOpen = sessionStorage.getItem("welcomeIsOpen");
    if (welcomeIsOpen == "false") return false;
    return true
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
      sessionStorage.setItem("welcomeIsOpen", "false")
    }, 5000)

    return ()=>clearTimeout(timer)
  },[])

  return (
    <>
      {isOpen ? (
        <WelcomePage />
      ) : (
          <>
        <RouterProvider router={router}/>
        <ToasterStyle />
          </>
      )}
    </>
  );
}

export default App

// toast component
function ToasterStyle() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--brown-color)",
            color: "white",
            borderRadius: "8px",
            padding: "10px 16px",
          },
          success: {
            style: {
              background: "var(--light-brown-color)",
              color: "white",
            },
          },
          error: {
            style: {
              background: "var(--dark-brown-color)",
              color: "white",
            },
          },
          loading: {
            style: {
              background: "var(--hover-brown-color)",
              color: "var(--text-color)",
            },
          },
        }}
      />
    </>
  );
}