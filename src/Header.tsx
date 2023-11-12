import { motion } from "framer-motion";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";

type Props = {
  deleteNotes: () => void;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ deleteNotes, isDarkMode, setIsDarkMode }: Props) => {
  return (
    // <div className="containr">
    <motion.div
      initial={{ y: "-100px" }}
      animate={{ y: "0" }}
      className="h-[54px] pl-12 w-full  flex flex-col justify-end justify-items-end"
    >
      <div className="flex justify-between items-end shadow-lg pb-2 pr-1 relative ">
        <svg
          className="w-12 h-14 shadow-lg absolute -bottom-4 -left-12 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            fill="none"
            stroke={isDarkMode ? "white" : "black"}
            d="M 14.160156 2.226562 C 13.90625 2.480469 13.886719 2.539062 13.886719 3.925781 L 13.886719 5.371094 L 11.601562 5.371094 C 9.296875 5.371094 9.296875 5.371094 9.042969 5.644531 L 8.789062 5.898438 L 8.789062 47.539062 L 9.0625 47.792969 L 9.316406 48.066406 L 40.703125 48.066406 L 40.957031 47.792969 L 41.230469 47.539062 L 41.230469 5.898438 L 40.957031 5.644531 C 40.703125 5.371094 40.703125 5.371094 38.398438 5.371094 L 36.113281 5.371094 L 36.113281 3.925781 C 36.113281 2.519531 36.09375 2.460938 35.839844 2.226562 C 35.683594 2.050781 35.449219 1.953125 35.253906 1.953125 C 35.058594 1.953125 34.824219 2.050781 34.667969 2.226562 C 34.414062 2.480469 34.394531 2.539062 34.394531 3.925781 L 34.394531 5.371094 L 30.996094 5.371094 L 30.996094 3.925781 C 30.996094 2.519531 30.976562 2.460938 30.722656 2.226562 C 30.390625 1.875 29.882812 1.875 29.550781 2.226562 C 29.296875 2.480469 29.277344 2.539062 29.277344 3.925781 L 29.277344 5.371094 L 25.878906 5.371094 L 25.878906 3.925781 C 25.878906 2.519531 25.859375 2.460938 25.605469 2.226562 C 25.449219 2.050781 25.214844 1.953125 25.019531 1.953125 C 24.824219 1.953125 24.589844 2.050781 24.433594 2.226562 C 24.179688 2.480469 24.160156 2.539062 24.160156 3.925781 L 24.160156 5.371094 L 20.761719 5.371094 L 20.761719 3.925781 C 20.761719 2.519531 20.742188 2.460938 20.488281 2.226562 C 20.332031 2.050781 20.097656 1.953125 19.902344 1.953125 C 19.707031 1.953125 19.472656 2.050781 19.316406 2.226562 C 19.0625 2.480469 19.042969 2.539062 19.042969 3.925781 L 19.042969 5.371094 L 15.644531 5.371094 L 15.644531 3.925781 C 15.644531 2.519531 15.625 2.460938 15.371094 2.226562 C 15.214844 2.050781 14.980469 1.953125 14.785156 1.953125 C 14.589844 1.953125 14.335938 2.050781 14.160156 2.226562 Z M 35.820312 20.996094 C 35.996094 21.152344 36.09375 21.386719 36.09375 21.582031 C 36.09375 21.777344 35.996094 22.011719 35.820312 22.167969 C 35.566406 22.441406 35.546875 22.441406 33.535156 22.441406 C 31.523438 22.441406 31.503906 22.441406 31.25 22.167969 C 31.074219 22.011719 30.976562 21.777344 30.976562 21.582031 C 30.976562 21.386719 31.074219 21.152344 31.25 20.996094 C 31.503906 20.722656 31.523438 20.722656 33.535156 20.722656 C 35.546875 20.722656 35.566406 20.722656 35.820312 20.996094 Z M 35.820312 24.414062 L 36.09375 24.667969 L 36.09375 39.023438 L 35 40.117188 C 33.535156 41.582031 33.554688 41.582031 32.070312 40.117188 L 30.976562 39.023438 L 30.976562 24.667969 L 31.25 24.414062 C 31.503906 24.140625 31.523438 24.140625 33.535156 24.140625 C 35.546875 24.140625 35.566406 24.140625 35.820312 24.414062 Z M 35.820312 24.414062 "
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            fill={isDarkMode ? "white" : "black"}
            d="M 32.675781 32.070312 L 32.675781 38.28125 L 33.535156 39.101562 L 34.394531 38.28125 L 34.394531 25.859375 L 32.675781 25.859375 Z M 32.675781 32.070312 "
          />
        </svg>
        <h1 className="font-LilitaOne ">Note</h1>
        <div className="flex gap-5 pr-6">
          <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <button
            className="hover:scale-105 text-sm  hover:bg-blue-200 hover:bg-opacity-40 dark:hover:bg-gray-800 border border-blue-500 sm:text-base rounded-lg p-2 transition-all"
            onClick={deleteNotes}
          >
            Clear Notes
          </button>
        </div>
      </div>
      {/* <svg className=" pt-1" height="20px" width="100%">
          <path />
          <motion.path
            stroke={isDarkMode ? "white" : "black"}
            strokeWidth="3px"
            strokeLinecap="round"
            fill="none"
            d="m0 0 l1500 00"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 2.1,
            }}
            className=" w-full"
          />
        </svg> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Header;
