import React, { useState } from "react";
// import { useContext } from "react";
// import NoteContext from "../context/NoteContext";

export default function EditNotes(props) {
  // const { state } = props;

  // const {edit} = useContext(NoteContext)
  const {title,description,tag} = props.notes
  // const [no, setno] = useState({title,description,tag})
  const [update, setupdate] = useState({etitle:"",edescription:"",etag:""})
  const firstupdate = (utitle,udescription,utag)=>{
    setupdate({etitle:utitle,edescription:udescription,etag:utag})
  }


  const change = (e) => {
    firstupdate(title,description,tag)
    // const name = e.target.name
    // setupdate({...update,[e.target.name]:e.target.value})
    // setno(props.notes)
    // setno({title:e.target.value})
    // console.log(name)
  };
  const handleclick = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div className="container">
      <h2>EDIT NOTE</h2>
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
            name="etitle"
            value={update.etitle}
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
            name="edescription"
            value={update.edescription}
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
            name="etag"
            value={update.etag}
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
