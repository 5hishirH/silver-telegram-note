import React from "react";
import useAuthContext from "../../CustomHooks/useAuthContext";

const Login = () => {
  const { handleGoogleUser } = useAuthContext();
  return (
    <div>
      <button onClick={handleGoogleUser} className="btn btn-primary">
        Continue with google
      </button>
    </div>
  );
};

export default Login;
