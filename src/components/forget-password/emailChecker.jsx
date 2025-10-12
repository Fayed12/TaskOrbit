// react
import { useState } from "react";

// react router
import { useNavigate } from "react-router";

// MUI
import EastIcon from "@mui/icons-material/East";

// toast
import toast from "react-hot-toast";

// local
import style from "./forgetPassword.module.css";
import { API_BASE_USER_URL } from "../../config";
import MainInput from "../input";

// ==================================================================================================
function EmailChecker({ setOpenNewPassword, setUserId }) {
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const navigate = useNavigate()

  // handle email checker
  async function compareEmail() {
    if (!email) {
      toast.error("please enter your email address!", { id: "checker-toast" });
      return;
    }
    try {
      const res = await fetch(`${API_BASE_USER_URL}/?email=${email}`);
      if (!res.ok) {
        toast.error("please enter your email address!", {
          id: "checker-toast",
        });
        throw new Error("something error in fetching data");
      }
      const data = await res.json();

      if (data.length > 0 && data[0].email === email) {
          toast.success("correct email address", { id: "checker-toast" });
          setUserId(data[0].id)
        setCheckEmail(false);
      } else {
        toast.error("this user does not exist", { id: "checker-toast" });
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, { id: "checker-toast" });
    }
  }

  // main function

  async function handleSubmit(e) {
    e.preventDefault();
    await compareEmail();
  }

  // handle click continue
  function handleClickButton() {
    setOpenNewPassword(true);
  }

  return (
    <div className={style.all}>
      <div className={style.wrapper}>
        <h2 className={style.title}> Write Your Email</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
          <MainInput
            inpType="email"
            inpPlaceholder="example@gmail.com "
            inpValue={email}
            inpSetValue={(e) => setEmail(e.target.value.trim())}
          />
          <div className="flex justify-between items-center">
            <button
              className={style.btn}
              type="button"
              onClick={() => navigate("/login")}
            >
              Back
            </button>
            {checkEmail ? (
              <button type="submit" className={style.btn}>
                <span>check</span>
              </button>
            ) : (
              <button
                type="submit"
                className={style.btn}
                onClick={handleClickButton}
              >
                <span>Continue</span>
                <EastIcon />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailChecker;
