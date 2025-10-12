// local
import style from "./errorPage.module.css";
import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={style.errorPage}>
      <div className={style.errorBox}>
        <h1 className={style.code}>404</h1>
        <p className={style.message}>
          The page you are trying to access does not exist.
        </p>
        <button className={style.backBtn} onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
