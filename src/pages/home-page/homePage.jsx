import style from "./homePage.module.css";

function HomePage() {
  return (
    <div className={style.homePage}>
      <h1 className={style.siteName}>TaskOrbit</h1>
      <p className={style.tagline}>
        Organize your work, boost your productivity, and stay focused with ease
        🚀
      </p>
    </div>
  );
}

export default HomePage;
