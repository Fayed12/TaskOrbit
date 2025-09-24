import { NavLink } from "react-router";
import style from "./navBar.module.css"

function NavBar() {
    return (
      <>
        <div className={`${style.navBar} flex justify-between items-center`}>
          <div className="logo">
            <img src="/TaskOrbit-logo.png" alt="logo image" />
          </div>
          <div className="links">
            <ul className=" flex justify-center items-center gap-[15px]">
              <li>
                <NavLink to={"/home"} replace={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} replace={true}>
                  About US
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} replace={true}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default NavBar;