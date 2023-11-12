import React, { useRef, useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { NoteWithTags, Tag } from "./App";

type NoteFormProps = {
  onSubmit: (data: NoteWithTags) => void;
  onAddTag: (data: Tag) => void;
  tags: Tag[];
  noteToEdit?: NoteWithTags;
};

const NoteForm = ({ onSubmit, onAddTag, tags, noteToEdit }: NoteFormProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(
    noteToEdit
      ? tags
          .filter((tag) => noteToEdit.tagIds?.includes(tag.id))
          .map((t) => {
            return { label: t.label, id: t.id };
          })
      : []
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const reactSelectRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (noteToEdit?.id) {
      onSubmit({
        title: titleRef.current!.value,
        body: bodyRef.current!.value,
        tags: selectedTags,
        id: noteToEdit?.id,
      });
    } else {
      onSubmit({
        title: titleRef.current!.value,
        body: bodyRef.current!.value,
        tags: selectedTags,
      });
    }

    navigate("..", { relative: "path" });
  };

  return (
    <div className="sm:p-10 flex-wrap flex w-full flex-col content-center">
      <form className=" w-full " onSubmit={handleSubmit}>
        <div className="flex pb-3 justify-start justify-cente gap-2">
          <Button
            className="hover:scale-105 transition-all"
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Link to={".."} relative="path">
            <Button
              className="hover:scale-105 transition-all"
              color="warning"
              variant="outlined"
              type="submit"
            >
              Cancel
            </Button>
          </Link>
        </div>
        <div className=" pb-3 flex flex-col gap-2 justify-between sm:flex-row">
          <div className="flex flex-grow items-start gap-2 flex-col">
            <label
              className="font-LilitaOne text-lg  text-gray-700 dark:text-gray-50 rou "
              htmlFor="title"
            >
              Title
            </label>
            <TextField
              inputProps={{
                className:
                  "dark:!text-gray-700 !rounded-t-lg dark:!bg-gray-50 !font-Poppings",
              }}
              hiddenLabel
              fullWidth
              required
              size="small"
              inputRef={titleRef}
              id="title"
              variant="filled"
              defaultValue={noteToEdit ? noteToEdit.title : ""}
            />
          </div>

          <div className="flex w-full sm:w-[40%] flex-col items-start gap-2">
            <label
              className="font-LilitaOne text-gray-700 dark:text-gray-50 text-lg"
              htmlFor="tags"
            >
              Tags
            </label>
            <CreatableReactSelect
              placeholder="Create a tag or select from options..."
              className="w-full  px-1 dark:text-gray-700 text-left"
              ref={reactSelectRef}
              required={true}
              isMulti
              onCreateOption={(label) => {
                const newTag = { label, id: uuidv4() };
                onAddTag(newTag);
                setSelectedTags((prev) => [...prev, newTag]);
              }}
              options={tags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
            />
          </div>
        </div>
        <div className=" pb-3 w-full">
          <textarea
            className="border dark:bg-gray-600 rounded-lg p-4 w-full"
            placeholder="Write note here..."
            ref={bodyRef}
            cols={50}
            rows={17}
            defaultValue={noteToEdit ? noteToEdit.body : ""}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
