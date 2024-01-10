import React from "react";

const Form = ({ type, note, setNote, handleNote, submitting }) => {
  return (
    <div>
      <form onSubmit={handleNote}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-4xl text-secondary font-medium">
              {type} Note
            </span>
          </div>
          <textarea
            value={note.note}
            onChange={(e) => setNote({ ...note, note: e.target.value })}
            className="textarea textarea-bordered h-24"
            placeholder="Type your note here"
            required
          ></textarea>
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary mt-6"
            disabled={submitting}
          >
            {submitting ? (
              <span className="flex items-center gap-3">
                <span className="loading loading-spinner text-secondary"></span>{" "}
                {type === "Create" ? "Creating" : "Updating"}
              </span>
            ) : (
              type
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
