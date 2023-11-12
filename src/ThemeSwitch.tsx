import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import { IconButton, Tooltip } from "@mui/material";

type ThemeSwitchProps = {
  isDarkMode: boolean | null;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const ThemeSwitch = ({
  isDarkMode,
  setIsDarkMode,
}: ThemeSwitchProps) => {
  return (
    <div>
      <Tooltip
        placement="bottom-start"
        arrow
        title={isDarkMode ? "Swith to Light Mode" : "Swith to Dark Mode"}
      >
        <IconButton
          onClick={() => {
            setIsDarkMode((prev) => !prev);
            isDarkMode
              ? document.documentElement.classList.remove("dark")
              : document.documentElement.classList.add("dark");
          }}
        >
          {isDarkMode ? (
            <LightModeIcon className="text-gray-200" />
          ) : (
            <NightlightRoundOutlinedIcon />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};
