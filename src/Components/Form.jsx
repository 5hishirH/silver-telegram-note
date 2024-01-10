import React from "react";

const Form = ({ note, setNote, handleNote }) => {
  return (
    <div>
      <form onSubmit={handleNote}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-4xl text-secondary font-medium">
              Create Note
            </span>
          </div>
          <textarea
            value={note.note}
            onChange={(e) => setNote({ ...note, note: e.target.value })}
            className="textarea textarea-bordered h-24"
            placeholder="Type your note here"
          ></textarea>
        </label>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary mt-6">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
