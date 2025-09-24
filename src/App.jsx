// react hooks
import { useEffect, useState } from "react";

// local imports
import WelcomePage from "./pages/welcome-page/welcome";
import MainPageLayout from "./layouts/mainPageLayout";

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
    }, 3100)

    return ()=>clearTimeout(timer)
  },[])

  return (
    <>
      {isOpen ? <WelcomePage /> : <MainPageLayout />}
    </>
  );
}

export default App
