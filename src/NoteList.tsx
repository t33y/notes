import React, { useState } from "react";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Chip,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { Notes, Tag } from "./App";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";

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
    <motion.div
      exit={{ x: "-100vh" }}
      transition={{ ease: easeInOut }}
      className="container sm:px-20 flex flex-col flex-wrap content-center "
    >
      <div className="header sm:gap-3 gap-1 flex-col sm:p-5 rounded-lg bg-gray-100 dark:bg-gray-800 dark:bg-opacity-10 shadow-md  mb-4 items-start flex justify-between">
        <h1 className="sm:text-2xl text-lg font-LilitaOne text-gray-700 dark:text-gray-200 font-extrabold ">
          {" "}
          Your Notes
        </h1>
        <div className="buttons flex gap-1 sm:gap-2">
          <Link className="flex content-end" to={"/new"}>
            <Button
              className="hover:scale-105 transition-all"
              size="small"
              variant="contained"
            >
              Create
            </Button>
          </Link>
          <Button
            className="hover:scale-105 transition-all "
            size="small"
            variant="contained"
            onClick={handleEditTagClick}
          >
            Edit Tag
          </Button>
          {/* <Button
            className="hover:scale-105 transition-all"
            size="small"
            variant="text"
            color="warning"
            onClick={deleteNotes}
          >
            Clear
          </Button> */}
        </div>
      </div>
      <div className="sub_body sm:px-12 pt-4 bg-white dark:bg-gray-800 dark:bg-opacity-20 mb-4 flex flex-col gap-2 justify-between  sm:flex-row pb-4 rounded-md shadow-sm ">
        <div className="title sm:w-[30%] flex gap-2 pb-4 flex-col items-start ">
          <label className="text-xs" htmlFor="title">
            Filter by Title
          </label>
          <TextField
            InputProps={{
              className:
                "dark:!text-gray-700 !rounded-t-sm dark:!bg-gray-50 !font-serif",
            }}
            placeholder="Filter notes by title..."
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
          <label className="text-xs" htmlFor="tags">
            Filter by Tags
          </label>
          <ReactSelect
            placeholder="Select tags to filter by..."
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

      <div className="main_body bg-gray-100 p-3 dark:bg-gray-800 dark:bg-opacity-10 shadow-lg sm:p-10  flex flex-wrap w-full justify-center gap-4">
        {!noteWithTags[0] && (
          <div className="gap-3 hover:scale-105 dark:bg-gray-600 p-7 shadow-md rounded-sm flex flex-col items-center transition-all justify-center">
            <p className="text-2xl text-gray-700 dark:text-gray-50 font-LilitaOne">
              You have no note!
            </p>
            <Link to={"/new"}>
              <button className=" text-gray-700 dark:text-gray-50 border shadow-md hover:scale-[1.04] transition-all hover:bg-blue-200 hover:bg-opacity-40 p-3 dark:hover:bg-gray-800 dark:shadow-gray-500 font-LilitaOne border-blue-500  rounded-xl font-normal ">
                Create New Note
              </button>
            </Link>
          </div>
        )}
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
      <AnimatePresence>
        {!modalIsClosed && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{
              y: "0vh",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              y: "-100vh",
              transition: { duration: 0.8, ease: easeIn },
            }}
            className="modal_container flex justify-center items-start absolute top-0 sm:right-0  w-full content-center flex-wrap pt-20 h-[95%]"
          >
            <svg
              fill="rgba(0, 0, 0, 0.3)"
              className="absolute -bottom-[7rem] left-0 w-full h-28 "
            >
              <motion.path
                initial={{
                  d: `M0 0 L${window.innerWidth} 0 Q${
                    window.innerWidth / 2
                  } 224 0 0`,
                }}
                animate={{
                  d: `M0 0 L${window.innerWidth} 0 Q${
                    window.innerWidth / 2
                  } 0 0 0`,
                  transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                }}
                exit={{
                  d: `M0 0 L${window.innerWidth} 0 Q${
                    window.innerWidth / 2
                  } 224 0 0`,
                  transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
                }}
              />
            </svg>
            <div
              className="overlay 
            w-full h-full bg-black/30 flex absolute transition-all top-0 left-0"
            ></div>
            <div className="modal -translate-y-24 transition-all bg-gray-200 dark:bg-gray-200 p-4 w-full sm:w-[40%] flex flex-col z-10">
              <h2 className=" flex items-center dark:text-gray-800 font-bold justify-between pb-2 border-b border-b-blue-500">
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
                    <Tooltip title="Delete tag">
                      <IconButton
                        aria-label="delete tag"
                        size="small"
                        color="primary"
                        onClick={() => deleteTag(tag.id)}
                      >
                        {" "}
                        <DeleteOutlinedIcon fontSize="small" />{" "}
                      </IconButton>
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
        <h3 className="w-[95%]">{title}</h3>
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
