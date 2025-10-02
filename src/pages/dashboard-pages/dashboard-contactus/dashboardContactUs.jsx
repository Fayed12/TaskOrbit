// react
import { useState } from "react";

// tost
import toast from "react-hot-toast";

// local
import style from "./dashboardContactUs.module.css";
import MainInput from "../../../components/input";

// initial values
const initialValues = {
  userName: "",
  userEmail: "",
  userPhone: "",
  userMessage: "",
};

// ==================================================================================================================
function DashboardContactUs() {
  const [userDetails, setUserDetails] = useState(initialValues);

  // 1-ensure that all fields are filled in.
  function filedFilledIN() {
    if (!userDetails.userName) {
      toast.error("please write your name", { id: "contactUs-toast" });
      return false;
    }
    if (!userDetails.userEmail) {
      toast.error("please write your email", { id: "contactUs-toast" });
      return false;
    }
    if (!userDetails.userPhone) {
      toast.error("please write your phone", { id: "contactUs-toast" });
      return false;
    }
    if (!userDetails.userMessage) {
      toast.error("please write your problem or message", {
        id: "contactUs-toast",
      });
      return false;
    }
    return true;
  }

  // 2-ensure that all string is compatible with regex
  const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^(?:01[0125]\d{8}|(?:\+20|0020)1[0125]\d{8})$/;

  function handleRegex() {
    if (!nameRegex.test(userDetails.userName)) {
      toast.error("please write valid name only 2 words, ex.'mohamed fayed' ", {
        id: "contactUs-toast",
      });
      return false;
    }
    if (!emailRegex.test(userDetails.userEmail)) {
      toast.error("please write valid email , ex.'example@gmail.com ' ", {
        id: "contactUs-toast",
      });
      return false;
    }
    if (!phoneRegex.test(userDetails.userPhone)) {
      toast.error("please write valid phone", {
        id: "contactUs-toast",
      });
      return false;
    }
    return true;
  }

  // main function
  function handleSubmit(e) {
    e.preventDefault();
    if (!filedFilledIN()) return;
    if (!handleRegex()) return;
    toast.success("your message sent successful", { id: "contactUs-toast" });
    setUserDetails(initialValues);
  }
  return (
    <div className={`${style.contactUs}`}>
      <div className={style.content}>
        <div className={style.headerMessage}>
          <h1>contact Us if you have any problem</h1>
        </div>
        <div className={style.form}>
          <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
            <MainInput
              inpType="text"
              inpPlaceholder="Full Name"
              inpValue={userDetails.userName}
              inpSetValue={(e) =>
                setUserDetails({
                  ...userDetails,
                  userName: e.target.value.trim().toLowerCase(),
                })
              }
            />
            <MainInput
              inpType="email"
              inpPlaceholder="example@gmail.com "
              inpValue={userDetails.userEmail}
              inpSetValue={(e) =>
                setUserDetails({
                  ...userDetails,
                  userEmail: e.target.value.trim(),
                })
              }
            />
            <MainInput
              inpType="text"
              inpPlaceholder="your phone (+20).."
              inpValue={userDetails.userPhone}
              inpSetValue={(e) =>
                setUserDetails({
                  ...userDetails,
                  userPhone: e.target.value.trim(),
                })
              }
            />
            <textarea
              name="message"
              value={userDetails.userMessage}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  userMessage: e.target.value.toLowerCase(),
                })
              }
              placeholder="write your message here..."
            />
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardContactUs;
