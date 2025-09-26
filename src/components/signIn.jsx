// react
import { useState } from "react";

// local
import MainInput from "./input";
import toast from "react-hot-toast";

// initial values
const initialUser = { email: "", password: "" }
const initialLink = "http://localhost:5000/users";

// =================================================================================================
function SignIn({ setOpenLoading }) {
  // redirect the user to the dashboard system

  const [userFormData, setUserFormData] = useState(initialUser);

  // fetch all users from API
  async function handleUsers() {
    try {
      const res = await fetch(`${initialLink}`);
      if (!res.ok) {
        throw new Error("something error in fetching data");
      }
      const data = await res.json();

      // compare user From form with users from API
      if (data.length == 0) {
        toast.error("this user dose not exist, try another one", {
          id: "signIn-toast",
        });
      }
      const foundUser = data.find((user) => {
        return (
          user.email === userFormData.email &&
          user.password === userFormData.password
        );
      });

      if (!userFormData.email || !userFormData.password) {
        toast.error("please enter your email or password!!", {
          id: "signIn-toast",
        });
      }else if (!foundUser) {
        toast.error("wrong email or password!!", { id: "signIn-toast" });
      } else {
        toast.success("login successful!", { id: "signIn-toast" });
        setUserFormData(initialUser);
        setTimeout(() => {
          setOpenLoading(true);
        }, 1000);
        setTimeout(() => {
          setOpenLoading(false);
        }, 3000);
      }
    } catch (err) {
      toast.error(err.message, { id: "signIn-toast" });
      console.log(err.message);
    }
  }

  // main function
  async function handleSubmit(e) {
    e.preventDefault();
    await handleUsers();
  }
  return (
    <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
      <MainInput
        inpType="email"
        inpPlaceholder="example@gmail.com "
        inpValue={userFormData.email}
        inpSetValue={(e) =>
          setUserFormData({ ...userFormData, email: e.target.value })
        }
      />
      <MainInput
        inpType="password"
        inpPlaceholder="Password"
        inpValue={userFormData.password}
        inpSetValue={(e) =>
          setUserFormData({ ...userFormData, password: e.target.value })
        }
      />
      <button type="submit" className="submit-btn">
        Sign In
      </button>
    </form>
  );
}

export default SignIn;