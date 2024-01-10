import { createContext, useState } from "react";

const NoteContext = createContext();

export const Notestate = (props) => {
  const state1 = [];
  const getnotes = async () => {
    const url = "http://localhost:5000/api/auth/getnotes";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybG9naW4iOnsiaWQiOiI2NGNmZGY1YWJmYmRmNzE4MWI1MmUwMzcifSwiaWF0IjoxNjkxNDMxMzM1fQ.51odvZoHPiPt0BHJQe0KUnh8kLFkIbgt1SrhjHZI9IE",
      },
    });
    const data = await response.json();
    setstate(data);
  };
  const [state, setstate] = useState(state1);

  const addnote = async (title, description, tag) => {
    const url = "http://localhost:5000/api/auth/addnotes";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybG9naW4iOnsiaWQiOiI2NGNmZGY1YWJmYmRmNzE4MWI1MmUwMzcifSwiaWF0IjoxNjkxNDMxMzM1fQ.51odvZoHPiPt0BHJQe0KUnh8kLFkIbgt1SrhjHZI9IE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const data = await response.json();
    console.log(data);
    console.log(state);
    setstate(state.concat(data));
  };

  const deletenotes = async (id) => {
    console.log(`deleting note with this ${id}`);
    const newnotes = state.filter((state) => {
      return state._id !== id;
    });
    setstate(newnotes);
    const url = `http://localhost:5000/api/auth/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybG9naW4iOnsiaWQiOiI2NGNmZGY1YWJmYmRmNzE4MWI1MmUwMzcifSwiaWF0IjoxNjkxNDMxMzM1fQ.51odvZoHPiPt0BHJQe0KUnh8kLFkIbgt1SrhjHZI9IE",
      },
    });
    const json = await response.json();
    console.log(json);
  };
  const [edit, setedit] = useState({title:"",description:"",tag:""});
  const editnote = (title, description, tag) => {
    setedit({ title, description, tag });
    // console.log(edit);
  };

  return (
    <NoteContext.Provider
      value={{ state, setstate, deletenotes, getnotes, addnote, editnote , edit}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteContext;
