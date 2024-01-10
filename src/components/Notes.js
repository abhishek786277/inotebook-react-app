import React from "react";
import { useContext,useRef} from "react";
import NoteContext from "../context/NoteContext";
import Modals from "./Modals";

export default function Notes(props) {
  const { state } = props;
  const { deletenotes, editnote } = useContext(NoteContext);
  const deletehandleclick = () => {
    // console.log(title);
    deletenotes(props.state._id);
  };
  const editref = useRef(null)
  const handleref = ()=>{
  }


  return (
    <>
      <Modals notes={state}/>
      <div className="card md-2 col-sm-3">
        <div className="card-body row-col-md-2">
          <h5 className="card-title">{props.state.title}</h5>
          <p className="card-text">{props.state.description}</p>
          <p className="card-text">{props.state.tag}</p>

          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={deletehandleclick}
          ></i>
          <button
            ref={handleref}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}
