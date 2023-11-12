import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import { Notes, RawNote } from "./App";
import { Button, Chip } from "@mui/material";

type NoteProps = {
  notes: (Notes & { tagIds: string[] })[];
  setNotes: React.Dispatch<React.SetStateAction<RawNote[]>>;
};

const Note = ({ notes, setNotes }: NoteProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === id);

  const deleteNote = (note: (Notes & { tagIds: string[] }) | undefined) => {
    setNotes(() => {
      return notes.filter((n) => {
        return n.id !== note?.id;
      });
    });
    navigate("/");
  };

  return (
    <div className="noteContainer mb-36 container pt-10 ">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="noteHeader gap-2 flex-col sm:flex-row mb-4 w-full "
        >
          <div className=" w-full sm:w-[45%]">
            <h2 className="font-LilitaOne text-left overflow-x-clip overflow-ellipsis w-full capitalize text-xl">
              {note?.title}
            </h2>
          </div>
          <div
            style={{ display: "flex", alignItems: "end" }}
            className="noteHeaderButtons pr-3 gap-1"
          >
            <Link to={`/${note?.id}/note/edit`}>
              <Button color="primary" size="small" variant="outlined">
                Edit
              </Button>
            </Link>

            <Button
              variant="outlined"
              size="small"
              color="warning"
              onClick={() => deleteNote(note)}
            >
              Delete
            </Button>
            <Link to={"/"}>
              <Button variant="outlined" size="small" color="primary">
                Back
              </Button>
            </Link>
          </div>
        </div>
        <div className="noteTags shadow-md pb-2 flex flex-wrap gap-1 justify-start">
          {note?.tags.map((t) => {
            return (
              <Chip
                // sx={{
                //   width: "60px",
                // }}
                key={t.id}
                className="tag"
                label={t.label}
                color="primary"
                variant="filled"
                size="small"
              />
            );
          })}
        </div>
        <div className="noteDetails flex flex-col justify-between">
          <div className="noteTitleandTags flex justify-between py-10"></div>
          <div className="noteBody text-left overflow-clip ">
            {note && (
              <ReactMarkDown className="text-ellipsis p-4">
                {note.body}
              </ReactMarkDown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
