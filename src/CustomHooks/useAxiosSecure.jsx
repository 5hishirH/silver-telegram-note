import axios from "axios";
import React from "react";

const useAxiosSecure = () =>
  axios.create({
    baseURL: "https://note-server-one.vercel.app",
    withCredentials: true,
  });

export default useAxiosSecure;
