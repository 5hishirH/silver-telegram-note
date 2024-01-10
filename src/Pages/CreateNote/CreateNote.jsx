import React, { useState } from "react";
import Form from "../../Components/Form";
import useAuthContext from "../../CustomHooks/useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [note, setNote] = useState({ note: "" });

  const handleNote = (e) => {
    e.preventDefault();
    console.log(note);
    axios
      .post(
        "http://localhost:5000/notes",
        {
          note: note.note,
          userEmail: user?.email,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-1/3 mx-auto mt-28">
      <Form note={note} setNote={setNote} handleNote={handleNote} />
    </div>
  );
};

export default CreateNote;
