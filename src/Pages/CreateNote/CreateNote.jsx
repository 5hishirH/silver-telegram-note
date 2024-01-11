import React, { useState } from "react";
import Form from "../../Components/Form";
import useAuthContext from "../../CustomHooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const CreateNote = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user, setToast } = useAuthContext();
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState({ note: "" });

  const handleNote = (e) => {
    e.preventDefault();
    console.log(note);
    setSubmitting(true);
    axiosSecure
      .post("/notes", {
        note: note.note,
        userEmail: user?.email,
      })
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        setToast("The note is created successfully!");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-10/12 sm:w-1/3 mx-auto mt-28">
      <Form
        type="Create"
        note={note}
        setNote={setNote}
        handleNote={handleNote}
        submitting={submitting}
        setSubmitting={setSubmitting}
      />
    </div>
  );
};

export default CreateNote;
