import React, { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Newnote from "./Newnote";
import { UseLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import Note from "./Note";
import Editnote from "./Editnote";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./LandingPage";
import { ThemeSwitch } from "./ThemeSwitch";
import Header from "./Header";

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

function App() {
  const [notes, setNotes] = UseLocalStorage<RawNote[]>("NOTES", [
    {
      id: "one",
      title: "initiatingTitleOne",
      body: "initiatingBodyOne",
      tagIds: [],
    },
  ]);
  const [tags, setTags] = UseLocalStorage<Tag[]>("TAGS", []);
  const [isDarkMode, setIsDarkMode] = UseLocalStorage<boolean | null>(
    "DARK",
    null
  );

  const location = useLocation();

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
    if (notes[0]?.body === "initiatingBodyOne") return [];
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
    setNotes((prev) => {
      if (prev[0]?.body === "initiatingBodyOne") {
        return [
          {
            ...data,
            id: uuidv4(),
            tagIds: tags.map((tag) => {
              return tag.id;
            }),
          },
        ];
      } else {
        return [
          ...prev,
          {
            ...data,
            id: uuidv4(),
            tagIds: tags.map((tag) => {
              return tag.id;
            }),
          },
        ];
      }
    });
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

  const deleteNotes = () => {
    localStorage.clear();
    window.location.reload();
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen content-center items-center flex-wrap dark:bg-gray-700 dark:text-white ">
      {notes[0]?.body !== "initiatingBodyOne" && (
        <Header
          isDarkMode={isDarkMode}
          deleteNotes={deleteNotes}
          setIsDarkMode={setIsDarkMode}
        />
      )}
      <div className="App container flex flex-wrap flex-col content-center px-1 py-8 sm:p-10 font-Poppings ">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route
              path="/"
              element={
                notes[0]?.body === "initiatingBodyOne" ? (
                  <LandingPage
                    setIsDarkMode={setIsDarkMode}
                    isDarkMode={isDarkMode}
                  />
                ) : (
                  <NoteList
                    noteWithTags={noteWithTags}
                    deleteNotes={deleteNotes}
                    tags={tags}
                    setTags={setTags}
                  />
                )
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
        </AnimatePresence>
      </div>
      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
