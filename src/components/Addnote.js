import React from "react";
import { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

export default function Addnote() {
  const { addnote } = useContext(NoteContext);
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleclick = (e) => {
    console.log(e)
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
  };
  const change = (e) => {
    console.log(e)
    // console.log({...note})
    // console.log([e.target.name])
    // console.log(e.target.name)
    // console.log([e.target.value])
    // console.log({[e.target.name]:e.target.value})
    setnote({...note, [e.target.name]:e.target.value})
  };
  return (
    <div className="container">
      <h2>ADD NOTES</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            id="title"
            name="title"
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={change}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
}
