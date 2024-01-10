import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
import useAuthContext from "../CustomHooks/useAuthContext";

const Feed = () => {
  const { noteloading } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if(!noteloading) {
      axiosSecure("/notes")
      .then(({ data }) => {
        setNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [noteloading]);
  return (
    <div className="w-full">
      {notes?.map((e, i) => (
        <NoteCard key={i} note={e} />
      ))}
    </div>
  );
};

export default Feed;
