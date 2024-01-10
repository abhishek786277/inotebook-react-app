import React from "react";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem"

export default function Home() {
  return (
    <div>
      <Addnote />
      <h2>VIEW NOTES</h2>
      <Noteitem/>
    </div>
  );
}
