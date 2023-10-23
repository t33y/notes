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
    <div className="noteContainer container pt-10 ">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="noteHeader w-full "
        >
          <div className="">
            <h2 className="text-xl">{note?.title}</h2>
          </div>
          <div
            style={{ display: "flex", alignItems: "end" }}
            className="noteHeaderButtons gap-1"
          >
            <Link to={`/${note?.id}/note/edit`}>
              <Button color="info" size="small" variant="text">
                Edit
              </Button>
            </Link>

            <Button
              variant="text"
              size="small"
              color="warning"
              onClick={() => deleteNote(note)}
            >
              Delete
            </Button>
            <Link to={"/"}>
              <Button variant="text" size="small" color="info">
                Back
              </Button>
            </Link>
          </div>
        </div>
        <div className="noteTags border-b border-b-blue-500 pb-2 flex flex-wrap gap-1 justify-start">
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
              <ReactMarkDown className="text-ellipsis">
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
