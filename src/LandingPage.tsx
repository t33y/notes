import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const LandingPage = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <motion.div
      exit={{ y: "-100vh" }}
      transition={{ ease: easeInOut }}
      className="w-full container font-LilitaOne bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-700  z-10  flex flex-col items-center justify-center"
    >
      <div className="flex self-end">
        <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>

      <div className="w-full container h-full flex flex-col items-center justify-center">
        {/* <div className=" absolute bg-[#ddaaf3] blur-3xl bg-opacity-[0.08] -z-10 top-[15%] left-[23%] h-[40%] w-[40%] border"></div> */}
        <div className="shadow-lg  p-5">
          <div className="flex flex-col sm:flex-row items-center">
            <svg
              className=" h-64"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <g>
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
                  strokeWidth="2px"
                  d="M72.5,11.4c-1.3,1.3-1.4,1.6-1.4,8.7v7.4H59.4c-11.8,0-11.8,0-13.1,1.4L45,30.2v106.6v106.6l1.4,1.3l1.3,1.4H128h80.4l1.3-1.4l1.4-1.3V136.7V30.2l-1.4-1.3c-1.3-1.4-1.3-1.4-13.1-1.4h-11.7v-7.4c0-7.2-0.1-7.5-1.4-8.7c-0.8-0.9-2-1.4-3-1.4s-2.2,0.5-3,1.4c-1.3,1.3-1.4,1.6-1.4,8.7v7.4h-8.7h-8.7v-7.4c0-7.2-0.1-7.5-1.4-8.7c-1.7-1.8-4.3-1.8-6,0c-1.3,1.3-1.4,1.6-1.4,8.7v7.4h-8.7h-8.7v-7.4c0-7.2-0.1-7.5-1.4-8.7c-0.8-0.9-2-1.4-3-1.4c-1,0-2.2,0.5-3,1.4c-1.3,1.3-1.4,1.6-1.4,8.7v7.4h-8.7h-8.7v-7.4c0-7.2-0.1-7.5-1.4-8.7c-0.8-0.9-2-1.4-3-1.4c-1,0-2.2,0.5-3,1.4c-1.3,1.3-1.4,1.6-1.4,8.7v7.4h-8.7h-8.7v-7.4c0-7.2-0.1-7.5-1.4-8.7c-0.8-0.9-2-1.4-3-1.4S73.4,10.5,72.5,11.4z M183.4,107.5c0.9,0.8,1.4,2,1.4,3c0,1-0.5,2.2-1.4,3c-1.3,1.4-1.4,1.4-11.7,1.4c-10.3,0-10.4,0-11.7-1.4c-0.9-0.8-1.4-2-1.4-3c0-1,0.5-2.2,1.4-3c1.3-1.4,1.4-1.4,11.7-1.4C182,106.1,182.1,106.1,183.4,107.5z M183.4,125l1.4,1.3v36.8v36.7l-5.6,5.6c-7.5,7.5-7.4,7.5-15,0l-5.6-5.6v-36.7v-36.8l1.4-1.3c1.3-1.4,1.4-1.4,11.7-1.4C182,123.6,182.1,123.6,183.4,125z"
                />
                <motion.path
                  fill={isDarkMode ? "white" : "black"}
                  d="M167.3,164.2v31.8l2.2,2.1l2.2,2.1l2.2-2.1l2.2-2.1v-31.8v-31.8h-4.4h-4.4L167.3,164.2L167.3,164.2z"
                />
              </g>
            </svg>
            <div>
              <h2 className=" text-8xl leading-normal font-bold">Note</h2>
              <h2 className=" text-4xl font-bold ">Don't Memorise it</h2>
              <h2 className=" text-3xl font-bold">Tag it</h2>
            </div>
          </div>
          <Link to={"/new"}>
            <button className=" border shadow-lg hover:scale-[1.04] transition-all hover:bg-blue-200 hover:bg-opacity-40 dark:hover:bg-gray-800 dark:shadow-gray-500 font-SourceSerif4 border-blue-500  w-[75%] ml- h-10 rounded-xl font-normal mt-5 ">
              Create Note
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
