import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div className="w-full mt-8">
      <p>{note.note}</p>
      <div className="flex items-center gap-4 mt-2">
        <Link
          to={`/edit-note/${note._id}`}
          className="text-primary cursor-pointer font-medium"
        >
          Edit
        </Link>
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
