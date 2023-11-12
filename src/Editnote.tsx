import React from "react";
import NoteForm from "./NoteForm";
import { useParams } from "react-router-dom";
import { NoteWithTags, Tag } from "./App";
import { easeInOut, motion } from "framer-motion";

type EditNoteProps = {
  onSubmit: (data: NoteWithTags) => void;
  onAddTag: (tag: Tag) => void;
  tags: Tag[];
  notes: NoteWithTags[];
};
const Editnote = ({ onSubmit, onAddTag, tags, notes }: EditNoteProps) => {
  const { id } = useParams();

  const noteToEdit = notes.find((n: any) => n.id === id);
  // const tagsToEdit = tags.map(tag=> noteToEdit.tagIds.includes(tag.id))

  return (
    <motion.div
      exit={{ x: "100vh" }}
      transition={{ ease: easeInOut }}
      className="container"
    >
      <h2 className="mt-12 text-left font-LilitaOne text-gray-700 dark:text-gray-50 mb-2 font-bold text-2xl">
        Edit note
      </h2>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        tags={tags}
        noteToEdit={noteToEdit}
      />
    </motion.div>
  );
};

export default Editnote;
