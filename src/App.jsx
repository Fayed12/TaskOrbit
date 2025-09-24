// react hooks
import { useEffect, useState } from "react";

// local imports
import WelcomePage from "./pages/welcome-page/welcome";
import MainPageLayout from "./layouts/mainPageLayout";

// react router
import { RouterProvider } from "react-router";
import { router } from "./routes/mainRouts";


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
        <RouterProvider router={router}>
          <MainPageLayout />
        </RouterProvider>
      )}
    </>
  );
}

export default App
