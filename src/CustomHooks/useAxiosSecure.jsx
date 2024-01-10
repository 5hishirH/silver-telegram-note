import axios from "axios";
import React from "react";

const useAxiosSecure = () =>
  axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });

export default useAxiosSecure;
