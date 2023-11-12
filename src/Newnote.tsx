import React from "react";
import NoteForm from "./NoteForm";
import { NoteWithTags, Tag } from "./App";
import { easeInOut, motion } from "framer-motion";

type NewNoteProps = {
  onSubmit: (data: NoteWithTags) => void;
  onAddTag: (tag: Tag) => void;
  tags: Tag[];
};

const Newnote = ({ onSubmit, onAddTag, tags }: NewNoteProps) => {
  return (
    <motion.div
      exit={{ x: "100vh" }}
      transition={{ ease: easeInOut }}
      className="container"
    >
      <h2 className="mt-12 font-LilitaOne text-gray-700 dark:text-gray-50 text-left mb-2 font-bold text-2xl ">
        Create New Note
      </h2>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} tags={tags} />
    </motion.div>
  );
};

export default Newnote;
