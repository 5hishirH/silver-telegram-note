import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
import useAuthContext from "../CustomHooks/useAuthContext";
import Swal from "sweetalert2";

const Feed = () => {
  const { noteloading, setToast } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const [notes, setNotes] = useState([]);
  const [reData, setReData] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (!noteloading) {
      axiosSecure("/notes")
        .then(({ data }) => {
          setNotes(data);
          setDataLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [noteloading, reData]);

  const handleDelete = (i) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      focusCancel: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/notes/${i}`)
          .then(() => {
            setReData(!reData);
            setToast("The note is deleted successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="w-full">
      {dataLoading ? (
        notes?.map((e, i) => (
          <NoteCard key={i} note={e} handleDelete={handleDelete} />
        ))
      ) : (
        // skeleton
        <div className="w-full flex flex-col gap-12 justify-center items-center">
          <div className="w-full flex flex-col gap-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="w-full flex items-center gap-4">
              <div className="skeleton h-4 w-10"></div>
              <div className="skeleton h-4 w-10"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="w-full flex items-center gap-4">
              <div className="skeleton h-4 w-10"></div>
              <div className="skeleton h-4 w-10"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
