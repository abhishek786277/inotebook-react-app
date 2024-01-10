import React from "react";
import { useContext,useEffect,useRef } from "react";
import NoteContext from "../context/NoteContext";
import Notes from "./Notes";

export default function Noteitem() {
  const note = useContext(NoteContext);
  const { state,getnotes } = note;
  useEffect(() => {
    getnotes()
    // eslint-disable-next-line 
  },[]
  )
  // const ref = useRef(second)
  
  return (
    <>
    <div className="container">
      {state.map((states) => (
        // console.log(states)
        <Notes state={states} key={states._id} />
      ))}
    </div>
    </>
  );
}
