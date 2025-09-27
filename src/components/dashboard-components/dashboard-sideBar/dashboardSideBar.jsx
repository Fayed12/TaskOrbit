// react router
import { NavLink } from "react-router";

// MUI
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

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
                <span className={style.icon}>
                  <HomeIcon />
                </span>
                <span className={style.linkText}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="analysis" replace={true}>
                <span className={style.icon}>
                  <AnalyticsIcon />
                </span>
                <span className={style.linkText}>Analysis</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="contactUs" replace={true}>
                <span className={style.icon}>
                  <ConnectWithoutContactIcon />
                </span>
                <span className={style.linkText}>Contact US</span>
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
