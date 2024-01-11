import React from "react";
import useAuthContext from "../../CustomHooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleGoogleUser } = useAuthContext();
  const handleGoogleSignIn = () => {
    handleGoogleUser()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <div className="flex gap-4 items-center">
          <span className="w-10 h-10 md:w-16 md:h-16">
          <img
                src="/note-icon.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
          </span>
          <h2 className="text-4xl md:text-7xl mb-2">Note</h2>
        </div>
        <p className="md:text-2xl w-4/5 md:w-96 text-center font-extralight mt-3 md:mt-4">
          Note is a basic note taking webapp to explore mern stack webapp.
        </p>
        <button onClick={handleGoogleSignIn} className="btn btn-primary mt-6 md:mt-8 text-white">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
