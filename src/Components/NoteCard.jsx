import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="w-full mt-8">
      <p>{note.note}</p>
    </div>
  );
};

export default NoteCard;
