import React from "react";
import useAuthContext from "../../CustomHooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleGoogleUser } = useAuthContext();
  const handleGoogleSignIn = () => {
    handleGoogleUser()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-primary">
        Continue with google
      </button>
    </div>
  );
};

export default Login;
