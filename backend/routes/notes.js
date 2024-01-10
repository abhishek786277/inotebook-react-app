import express from "express";
// import { body, validationResult } from "express-validator";
const routernotes = express.Router();
import fetchuser from "./middleware.js";
import Notes from "../schemas/notebookdb.js";

//add a note
routernotes.post("/addnotes", fetchuser, async (req, res) => {
  try {
    const { title, tag, description } = req.body;
    console.log(title, tag, description);
    let userid = req.user.id;
    console.log(userid);
    const Note = new Notes({
      title: title,
      tag: tag,
      description: description,
      user: userid,
    });
    res.json(Note);
    console.log(Note);
    await Note.save();
  } catch (error) {
    console.log(error);
  }
});

// get notes of the user
try {
  routernotes.get("/getnotes", fetchuser, async (req, res) => {
    const user = req.user.id;
    console.log(user);

    const getNotes = await Notes.find({ user });
    // console.log(getNotes);
    res.send(getNotes);
  });
} catch (error) {
  console.error(error);
}

// update notes of the user
routernotes.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  let newnote = {};
  if (title) {
    newnote.title = title;
  }
  if (tag) {
    newnote.tag = tag;
  }
  if (description) {
    newnote.description = description;
  }

  let note = await Notes.findById(req.params.id);
  if (note.user == req.user.id) {
    await note.updateOne(newnote);
    res.send(note);
  } else {
    console.log("not verified");
    res.send("hackerrrrrrrrr")
  }
});


// delete endpoiint of norts 
routernotes.delete("/deletenote/:id", fetchuser, async (req, res) => {
  let note = await Notes.findById(req.params.id);
  if(!note){
   return res.send("no note found")
  }
  if (note.user == req.user.id) {
    await Notes.deleteOne(note);
    res.json(`${note} this note has been deleted`);
  } else {
    console.log("not verified");
    res.send("hackerrrrrrrrr")
  }
});

export default routernotes;
