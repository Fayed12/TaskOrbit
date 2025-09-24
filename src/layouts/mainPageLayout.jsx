// react router
import { Outlet } from "react-router";

// local imports
import NavBar from "../components/nav-bar/navBar";

function MainPageLayout() {
  return (
    <>
      <div className="main-page">
        <header>
          <NavBar />
        </header>
        <main className="pages flex justify-center">
          <div className="container w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPageLayout;
