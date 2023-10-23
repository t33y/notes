import React from "react";
import NoteForm from "./NoteForm";
import { NoteWithTags, Tag } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteWithTags) => void;
  onAddTag: (tag: Tag) => void;
  tags: Tag[];
};

const Newnote = ({ onSubmit, onAddTag, tags }: NewNoteProps) => {
  return (
    <div className="container">
      <h2 className="mt-12 text-left mb-2 font-bold text-2xl ">New note</h2>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} tags={tags} />
    </div>
  );
};

export default Newnote;
