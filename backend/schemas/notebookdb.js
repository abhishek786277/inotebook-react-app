import mongoose, { Schema } from "mongoose";
const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, default: "General" },
  date: { type: Date, default: Date },
});
const Notes = mongoose.model("notes", NotesSchema);
export default Notes;
