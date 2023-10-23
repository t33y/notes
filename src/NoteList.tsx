import React, { useState } from "react";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import { Button, Card, Chip, IconButton, TextField } from "@mui/material";
import { Notes, Tag } from "./App";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

type NotelistProps = {
  noteWithTags: (Notes & { tagIds: string[] })[];
  deleteNotes: () => void;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

const NoteList = ({
  noteWithTags,
  deleteNotes,
  tags,
  setTags,
}: NotelistProps) => {
  const [title, setTitle] = useState("");
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [modalIsClosed, setModalIsClosed] = useState(true);

  const handleEditTagClick = () => {
    setModalIsClosed(false);
  };

  const updateTag = (id: string, label: string) => {
    setTags((prevTags) => {
      return prevTags.map((tag: any) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  };
  const deleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag: any) => {
        return tag.id !== id;
      });
    });
  };

  return (
    <div className="container p-20 flex flex-col flex-wrap content-center ">
      <div className="header mb-10 items-end border-b-blue-500 border-b flex justify-between">
        <h1 className="text-2xl font-extrabold ">Notes</h1>
        <div className="buttons flex gap-1">
          <Link className="flex content-end" to={"/new"}>
            <Button size="small" variant="text">
              Create
            </Button>
          </Link>
          <Button size="small" variant="text" onClick={handleEditTagClick}>
            Edit Tag
          </Button>
          <Button
            size="small"
            variant="text"
            color="warning"
            onClick={deleteNotes}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className="sub_body flex flex-col gap-2 justify-between  sm:flex-row pb-8 ">
        <div className="title w-[20rem] flex gap-2 pb-4 flex-col items-start ">
          <label htmlFor="title">Title</label>
          <TextField
            InputProps={{
              className: "dark:!text-gray-700 dark:!bg-gray-50 !font-serif",
            }}
            color="primary"
            className=" w-8"
            fullWidth
            hiddenLabel
            variant="filled"
            size="small"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="tags w-full flex flex-col gap-2 items-start sm:w-[60%] ">
          <label htmlFor="tags">Tags</label>
          <ReactSelect
            className="w-full text-left dark:text-gray-700"
            isMulti
            id="tags"
            options={tags.map((tag: any) => {
              return { label: tag.label, value: tag.id };
            })}
            value={filteredTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            onChange={(tags) =>
              setFilteredTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value };
                })
              )
            }
          />
        </div>
      </div>

      <div className="main_body flex flex-wrap w-full justify-center gap-4">
        {title.trim() || filteredTags.length
          ? noteWithTags
              .filter((note) => {
                return (
                  note.title.toLowerCase().includes(title.toLowerCase()) &&
                  filteredTags.every((tag) => note.tagIds.includes(tag.id))
                );
              })
              .map((note) => {
                return (
                  <NoteCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    tags={note.tags}
                  />
                );
              })
          : noteWithTags.map((note) => {
              return (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  tags={note.tags}
                />
              );
            })}
      </div>
      <div
        className={`modal_container flex justify-center items-start absolute top-0 left-0 w-full content-center border flex-wrap pt-20 ${
          modalIsClosed ? "hidden" : "h-screen"
        } `}
      >
        <div
          className={`overlay ${
            modalIsClosed ? " hidden " : ""
          } w-full h-screen bg-black/30  absolute transition-all top-0 left-0`}
        ></div>
        <div
          className={`modal -translate-y-24 ${
            modalIsClosed ? "hidden" : ""
          } transition-all bg-gray-200  dark:bg-gray-800 p-4 w-full sm:w-[40%] flex flex-col z-10 `}
        >
          <h2 className=" flex items-center font-bold justify-between pb-2 border-b border-b-blue-500">
            Edit tags
            <IconButton
              className="w-[10%] flex justify-items-end "
              color="error"
              size="small"
              onClick={() => setModalIsClosed(true)}
            >
              <ClearOutlinedIcon fontSize="small" />
            </IconButton>
          </h2>
          {tags.map((tag) => {
            return (
              <div
                className="flex p-2 dark:text-gray-800 justify-between "
                key={tag.id}
              >
                <input
                  className="rounded-sm px-1 bg-gray-200 w-[60%]"
                  type="text"
                  value={tag.label}
                  onChange={(e) => updateTag(tag.id, e.target.value)}
                />
                <IconButton
                  aria-label="delete tag"
                  size="small"
                  color="primary"
                  onClick={() => deleteTag(tag.id)}
                >
                  {" "}
                  <DeleteOutlinedIcon fontSize="small" />{" "}
                </IconButton>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
type NoteCardProps = {
  id: string;
  title: string;
  tags: Tag[];
};

const NoteCard = ({ id, title, tags }: NoteCardProps) => {
  return (
    <Link key={id} to={`/${id}/note`}>
      <Card className="card pb-2 pt-4 flex flex-col items-center justify-center gap-2 w-56 h-32 border hover:scale-105 hover:shadow-xl transition-all dark:hover:shadow-[0_10px_10px_rgba(200,200,200,0.25)]">
        <h3>{title}</h3>
        <div className="flex flex-wrap overflow-scroll justify-center gap-1">
          {tags.map((tag) => (
            <Chip
              sx={{
                maxWidth: "200px",
              }}
              size="small"
              label={tag.label}
              color="primary"
              variant="outlined"
              key={tag.id}
            />
          ))}
        </div>
      </Card>
    </Link>
  );
};

export default NoteList;
