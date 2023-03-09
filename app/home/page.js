"use client";

import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import Image from "next/image";
import { Icon } from "@mui/material";
import { Avatar } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="navbar flex border">
        {/* before search bar */}
        <div className="left flex items-center w-max">
          <div className=" mx-4 my-2 font-bold text-[25px]">apSocial</div>

          <div className="mx-3">
            <HomeIcon sx={{ fontSize: 28 }} />
          </div>

          <div className="mx-3">
            <DarkModeOutlinedIcon sx={{ fontSize: 28 }} />
          </div>

          <div className="mx-3">
            <GridViewIcon sx={{ fontSize: 28 }} />
          </div>
        </div>

        <div className="container border ml-4 mr-12 py-2 px-2 m-2 items-center w-[800px]">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." className="px-2 py-1" />
        </div>

        {/* after search bar  */}
        <div className="right flex items-center mx-2">
          <div className="mx-3">
            <PersonOutlinedIcon sx={{ fontSize: 28 }} />
          </div>

          <div className="mx-3">
            <EmailOutlinedIcon sx={{ fontSize: 28 }} />
          </div>

          <div className="mx-3">
            <NotificationsOutlinedIcon sx={{ fontSize: 28 }} />
          </div>

          <div className="mx-3">
            {/* <Image src="/assets/images/example image.jfif" alt="User image" width={20} height={20}></Image> */}
            {/* <Avatar alt="User Profile Image" src="./positive-person.avif" sx={{ width: 48, height: 48 }} /> */}
            <Avatar
              alt="User Profile Image"
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              sx={{ width: 36, height: 36 }}
            />
          </div>
          <div>John Doe</div>
        </div>
      </div>
    </>
  );
}
