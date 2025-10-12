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

// =================================================================================================
function ManagePassword({ userId }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  // check all fields is filled in
  function checkFields() {
    if (!newPassword) {
      toast.error("Please write your new password", {
        id: "updatePassword-toast",
      });
      return false;
    }
    if (!confirmPassword) {
      toast.error("please confirm your password", {
        id: "updatePassword-toast",
      });
      return false;
    }
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      toast.error("The minimum length for text is 8 characters", {
        id: "updatePassword-toast",
      });
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error(
        "the password and confirm password you write does not equal",
        {
          id: "updatePassword-toast",
        }
      );
      return false;
    }
    return true;
  }

  // function check password and set the new to the state
  async function passwordValidation() {
    if (!checkFields()) return;
    try {
      const res = await fetch(`${API_BASE_USER_URL}/?id=${userId}`);
      if (!res.ok) {
        throw new Error("something error in fetching data");
      }
      const data = await res.json();
      if (data.length > 0 && data[0].password === newPassword) {
        toast.error(
          "the new password you write is already equal to last one, you must write a new one",
          {
            id: "updatePassword-toast",
          }
        );
        return false;
      } else if (data.length > 0 && data[0].password !== newPassword) {
          return true;
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, { id: "updatePassword-toast" });
    }
    }
    
    // function update password
    async function updatePassword() {
        if (!(await passwordValidation())) return;
        try {
            const res = await fetch(`${API_BASE_USER_URL}/${Number(userId)}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ password: newPassword }),
            });
            if (!res.ok) {
                throw new Error("something error in fetching data");
            }
          return true;
        } catch (err) {
            console.log(err.message);
            toast.error(err.message, { id: "updatePassword-toast" });
        }
    }

  // main function
  async function handleSubmit(e) {
      e.preventDefault();
    const update = await updatePassword();
    if (!update) return;

    // back to initial values
    setConfirmPassword("")
    setNewPassword("");

    // edit loading and success message 
    setTimeout(() => {
      toast.loading("loading.....", { id: "updatePassword-toast" });
    }, 1000);
    toast.success("password update successful!", {
      id: "updatePassword-toast",
    });
    setTimeout(() => {
      toast.success("done", { id: "updatePassword-toast" });
    }, 2000);
    setTimeout(() => {
      navigate("/login" , {replace:true})
    }, 2000);
  }

  return (
    <div className={style.all}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Reset Your Password</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={style.form}
        >
          <MainInput
            inpType="password"
            inpPlaceholder="password"
            inpValue={newPassword}
            inpSetValue={(e) => setNewPassword(e.target.value.trim())}
          />
          <MainInput
            inpType="password"
            inpPlaceholder="confirm password"
            inpValue={confirmPassword}
            inpSetValue={(e) => setConfirmPassword(e.target.value.trim())}
          />
          <div className="flex justify-end items-center">
            <button type="submit" className={style.btn}>
              <span>Update</span>
              <EastIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagePassword;
