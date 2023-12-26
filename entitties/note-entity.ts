import mongoose from "mongoose";

export interface NoteDocument extends mongoose.Document {
  title: string;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

const noteSchema = new mongoose.Schema<NoteDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NoteEntity = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default NoteEntity;
