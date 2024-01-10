import React from "react";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div className="w-full mt-8">
      <p>{note.note}</p>
      <div className="flex items-center gap-4 mt-2">
        <button className="text-primary cursor-pointer font-medium">Edit</button>
        <button
          onClick={() => handleDelete(note._id)}
          className="text-error cursor-pointer font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
