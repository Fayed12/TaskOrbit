// MUI
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SearchIcon from "@mui/icons-material/Search";

// react
import { useState } from "react";

// local
import style from "./dashboardNavBar.module.css";
import BasicBreadcrumbs from "../../Breadcrumbs";
import MainInput from "../../input";

// =============================================================================================================
function DashboardNavBar({ setOpenSideBar }) {
  // search value
  const [SearchValue, setSearchValue] = useState();

  // toggle sidebar
  function handleClick() {
    setOpenSideBar((prev) => !prev);
  }

  return (
    <div className={`${style.navBar} flex justify-between items-center`}>
      <div
        className={`${style.firstSide} flex gap-[20px] justify-center items-center`}
      >
        <button
          className={style.openCloseBtn}
          type="button"
          title="Toggle Sidebar"
          onClick={handleClick}
        >
          <MultipleStopIcon />
        </button>

        <div className={style.Breadcrumbs}>
          <BasicBreadcrumbs />
        </div>
      </div>
      <div className={`${style.secondSide} flex justify-center items-center`}>
        <div className={`${style.input} flex items-center`}>
          <span className={style.SearchIcon}>
            <SearchIcon />
          </span>
          <MainInput
            inpPlaceholder="Search..."
            inpType="text"
            inpValue={SearchValue}
            inpSetValue={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;
