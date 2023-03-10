"use client";

import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { Avatar, IconButton } from "@mui/material";
import Link from "next/link";

import { useState } from "react";

import { useContext } from "react";

// import { ThemeContext } from "@/context/ThemeContext";
import Navbar from "../../widgets/Navbar";

import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  // return (
  //   <>
  //     {/* <ThemeProvider>
  //       <Navbar />
  //     </ThemeProvider> */}
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  var lightThemeColour = "white";
  var darkThemeColour = "black";

  return (
    <div className={`bg-${isDarkTheme ? "gray-800" : "white"}`}>
      <div className="flex items-center px-2 border-b">
        <div className="flex items-center justify-start">
          {/* logo */}
          <div
            className={`mx-4 my-2 font-bold text-[25px] text-${
              isDarkTheme ? lightThemeColour : darkThemeColour
            }`}>
            apSocial
          </div>

          {/* home icon  */}
          <div className="mx-3">
            <Link href="/home">
              <IconButton className="cursor-pointer">
                <HomeIcon
                  sx={{
                    fontSize: 28,
                    color: isDarkTheme ? lightThemeColour : darkThemeColour,
                  }}
                />
              </IconButton>
            </Link>
          </div>

          {/* dark mode switch  */}
          <div className="mx-3 cursor-pointer">
            <IconButton className="cursor-pointer" onClick={toggleTheme}>
              <DarkModeOutlinedIcon
                sx={{
                  fontSize: 28,
                  color: isDarkTheme ? lightThemeColour : darkThemeColour,
                }}
              />
            </IconButton>
          </div>

          {/* grid view icon  */}
          <div className="mx-3">
            <IconButton className="cursor-pointer">
              <GridViewIcon
                sx={{
                  fontSize: 28,
                  color: isDarkTheme ? lightThemeColour : darkThemeColour,
                }}
              />
            </IconButton>
          </div>

          {/* search bar  */}
          <div
            className={`border ml-4 mr-12 py-2 px-2 m-2 flex items-center text-${
              isDarkTheme ? lightThemeColour : darkThemeColour
            }`}>
            <SearchOutlinedIcon
              sx={{
                fontSize: 28,
                color: isDarkTheme ? lightThemeColour : darkThemeColour,
              }}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`appearance-none focus:outline-none mx-2 bg bg-${
                isDarkTheme ? "gray-800" : "white"
              }`}
            />
          </div>
        </div>
        <div className="container flex justify-end mr-4">
          <div className="flex items-center mx-2">
            {/* user icon  */}
            <div className="mx-3">
              <IconButton className="cursor-pointer">
                <PersonOutlinedIcon
                  sx={{
                    fontSize: 28,
                    color: isDarkTheme ? lightThemeColour : darkThemeColour,
                  }}
                />
              </IconButton>
            </div>

            {/* message icon  */}
            <div className="mx-3">
              <IconButton className="cursor-pointer">
                <EmailOutlinedIcon
                  sx={{
                    fontSize: 28,
                    color: isDarkTheme ? lightThemeColour : darkThemeColour,
                  }}
                />
              </IconButton>
            </div>

            {/* notifications icon  */}
            <div className="mx-3">
              <IconButton className="cursor-pointer">
                <NotificationsOutlinedIcon
                  sx={{
                    fontSize: 28,
                    color: isDarkTheme ? lightThemeColour : darkThemeColour,
                  }}
                />
              </IconButton>
            </div>

            {/* user image or avatar */}
            <div className="mx-3">
              {/* <Image src="/assets/images/example image.jfif" alt="User image" width={20} height={20}></Image> */}
              {/* <Avatar alt="User Profile Image" src="./positive-person.avif" sx={{ width: 48, height: 48 }} /> */}
              <Avatar
                alt="User Profile Image"
                src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
                sx={{ width: 36, height: 36 }}
              />
            </div>

            {/* username */}
            <div
              className={`mr-2 text-${
                isDarkTheme ? lightThemeColour : darkThemeColour
              }`}>
              John Doe
            </div>

            {/* logout */}
            <div className="mr-2">
              <Link href="/">
                <IconButton className="cursor-pointer">
                  <LogoutIcon sx={{ fontSize: 28, color: "red" }} />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
