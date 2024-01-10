import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../Components/Form";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNote = () => {
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
        toast.success("The note is updated successfully!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          transition: Zoom,
          theme: "light",
        });
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-1/3 mx-auto mt-28">
      <ToastContainer />
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
