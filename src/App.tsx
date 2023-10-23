import React, { useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Newnote from "./Newnote";
import { UseLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import Note from "./Note";
import Editnote from "./Editnote";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

export type Notes = {
  id: string;
} & NoteData;

export type NoteWithTags = {
  tags: Tag[];
  id?: string;
  title: string;
  body: string;
  tagIds?: string[];
};

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  body: string;
  tagIds: string[];
};
export type NoteData = {
  title: string;
  body: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

type ThemeSwitchProps = {
  isDarkMode: boolean | null;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const ThemeSwitch = ({ isDarkMode, setIsDarkMode }: ThemeSwitchProps) => {
  return (
    <button
      onClick={() => {
        setIsDarkMode((prev) => !prev);
        isDarkMode
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
      }}
      className="absolute top-3 right-3 z-20"
    >
      {isDarkMode ? <NightlightRoundOutlinedIcon /> : <LightModeIcon />}
    </button>
  );
};

function App() {
  const [notes, setNotes] = UseLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = UseLocalStorage<Tag[]>("TAGS", []);
  const [isDarkMode, setIsDarkMode] = UseLocalStorage<boolean | null>(
    "DARK",
    null
  );

  useEffect(() => {
    if (isDarkMode === false) return;
    if (isDarkMode === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } else {
      if (isDarkMode) document.documentElement.classList.add("dark");
    }
  }, [isDarkMode, setIsDarkMode]);

  const noteWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => {
          return note.tagIds.includes(tag.id);
        }),
      };
    });
  }, [tags, notes]);

  const onCreateNote = ({ tags, ...data }: NoteWithTags) => {
    setNotes((prev) => [
      ...prev,
      {
        ...data,
        id: uuidv4(),
        tagIds: tags.map((tag) => {
          return tag.id;
        }),
      },
    ]);
  };

  const onUpdateNote = ({ tags, id, ...data }: NoteWithTags) => {
    setNotes((prev) => {
      return prev.map((prevNote) => {
        if (prevNote.id === id) {
          return {
            ...prevNote,
            ...data,
            tagIds: tags.map((tag) => tag.id),
          };
        } else {
          return prevNote;
        }
      });
    });
  };

  const DeleteNotes = () => {
    localStorage.clear();
    window.location.reload();
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen justify-center dark:bg-gray-700 dark:text-white ">
      <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <div className="bg-[#d1b79e] -z-10 blur-[29rem] h-[35%] w-[55%] absolute top-[11rem] left-10"></div>
      <div className="bg-[#c3b4e3] -z-10 blur-[29rem] h-[40%] w-[55%] absolute top-[15rem] right-14 "></div> */}
      <div className="App relative container flex flex-wrap flex-col content-center p-3 font-serif ">
        <Routes>
          <Route
            path="/"
            element={
              <NoteList
                noteWithTags={noteWithTags}
                deleteNotes={DeleteNotes}
                tags={tags}
                setTags={setTags}
              />
            }
          />
          <Route
            path="/new"
            element={
              <Newnote
                onSubmit={onCreateNote}
                onAddTag={onAddTag}
                tags={tags}
              />
            }
          />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/:id">
            <Route path="show" element={<h1>Show</h1>} />
            <Route
              path="note"
              element={<Note notes={noteWithTags} setNotes={setNotes} />}
            />
            <Route
              path="note/edit"
              element={
                <Editnote
                  onSubmit={onUpdateNote}
                  onAddTag={onAddTag}
                  tags={tags}
                  notes={noteWithTags}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
