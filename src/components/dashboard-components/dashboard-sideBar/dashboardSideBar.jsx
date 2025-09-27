// react router
import { NavLink } from "react-router";

// local
import style from "./dashboardSideBar.module.css";
import UserInfo from "../../UserInfo";

function DashboardSideBar() {
  return (
    <div
      className={`${style.sideBar} flex flex-col justify-between items-center`}
    >
      <div className="w-full">
        <div className={style.logo}>
          <img src="/TaskOrbit.png" alt="logo" />
        </div>
        <div className={style.links}>
          <ul>
            <li>
              <NavLink to="home" replace={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="analysis" replace={true}>
                Analysis
              </NavLink>
            </li>
            <li>
              <NavLink to="contactUs" replace={true}>
                Contact US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.user}>
        <UserInfo />
      </div>
    </div>
  );
}

export default DashboardSideBar;
