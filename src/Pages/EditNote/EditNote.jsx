import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../Components/Form";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../../CustomHooks/useAuthContext";

const EditNote = () => {
  const { setToast } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({ note: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axiosSecure(`/notes/${id}`)
      .then(({ data }) => {
        setNote(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    axiosSecure
      .put(`/notes/${note._id}`, {
        note: note.note,
      })
      .then(() => {
        setSubmitting(false);
        setToast("The note is updated successfully!");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-10/12 sm:w-1/3 mx-auto mt-28">
      <Form
        type="Edit"
        note={note}
        setNote={setNote}
        handleNote={handleEdit}
        submitting={submitting}
      />
    </div>
  );
};

export default EditNote;
