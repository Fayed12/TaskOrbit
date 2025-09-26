import style from "./welcome.module.css"

function WelcomePage() {
    return (
      <>
        <div
          className={`welcome-page w-full h-[100dvh] flex flex-col justify-center items-center`}
        >
          <img
            src="/TaskOrbit.png"
            alt="logo image"
            className={style.image}
          />
          <div className=" w-fit">
            <p className={style.text}>welcome in TaskOrbit website</p>
          </div>
        </div>
      </>
    );
}

export default WelcomePage;