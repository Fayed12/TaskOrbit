import { NavLink } from "react-router";
import style from "./homePage.module.css";

function HomePage() {
  return (
    <div className={style.homePage}>
      <div className={style.message}>
        <div className={style.nameContainer}>
          <h1 className={style.siteName}>TaskOrbit</h1>
        </div>
        <div className={style.nameContainer}>
          <p className={style.tagline}>
            Organize your work, boost your productivity, and stay focused with
            ease 🚀
          </p>
        </div>
        <NavLink to={"/login"} replace={true}>
          Start your journey
        </NavLink>
      </div>

      <div className={style.image}>
        <img src="/home-image.webp" alt="home" />
        <div className={style.feckShadow}></div>
      </div>
    </div>
  );
}

export default HomePage;
