// react
import { useState } from "react";

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
function DashboardContactUs() {
  const [userDetails, setUserDetails] = useState(initialValues);

  // main function
  function handleSubmit(e) {
    e.preventDefault();
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
              inpPlaceholder="your phone..."
              inpValue={userDetails.userPhone}
              inpSetValue={(e) =>
                setUserDetails({
                  ...userDetails,
                  userPhone: e.target.value.trim().toLowerCase(),
                })
              }
            />
            =
            <textarea
              name="message"
              inpValue={userDetails.userMessage}
              inpSetValue={(e) =>
                setUserDetails({
                  ...userDetails,
                  userMessage: e.target.value.trim().toLowerCase(),
                })
              }
              placeholder="write your message here..."
            ></textarea>
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
