import React from "react";
import Feed from "../../Components/Feed";
import useAuthContext from "../../CustomHooks/useAuthContext";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { handleToast, setToast } = useAuthContext();
  if (handleToast) {
    toast.success(handleToast, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition: Zoom,
      theme: "light",
    });
    setToast(false);
  }
  return (
    <div className="w-10/12 sm:w-3/5 mx-auto mt-28 sm:mt-20 mb-28">
      <ToastContainer />
      <Feed />
    </div>
  );
};

export default Home;
