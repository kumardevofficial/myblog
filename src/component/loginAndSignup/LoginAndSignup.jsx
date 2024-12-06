import { useState } from "react";
import Login from "./login";
import Signup from "./Signup";
import "../../App.css";

const LoginAndSignup = () => {
  const [loginAndSignup, setLoginAndSignup] = useState(false);

  const choosebtweenLoginandSingup = (mychoosenStatus) => {
    setLoginAndSignup(mychoosenStatus);
  };

  return (
    <>
      {loginAndSignup ? (
        <Login chooseStatus={choosebtweenLoginandSingup} />
      ) : (
        <Signup chooseStatus={choosebtweenLoginandSingup} />
      )}
    </>
  );
};

export default LoginAndSignup;
