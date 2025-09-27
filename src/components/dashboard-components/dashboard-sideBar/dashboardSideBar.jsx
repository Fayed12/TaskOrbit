import style from "./dashboardSideBar.module.css"

function DashboardSideBar() {
    return (
      <div className={`${style.sideBar} flex flex-col justify-between items-center`}>
        <div>
          <h2>logo </h2>
          <h3>links</h3>
            </div>
            <div>
                <h2>user</h2>
            </div>
      </div>
    );
}

export default DashboardSideBar;