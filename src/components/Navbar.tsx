"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerKeys = [
    {
      href: "/",
      text: "خانه",
      icon: <FaHome />,
    },
    {
      href: "/products",
      text: "محصولات",
      icon: <IoStorefront />,
    },
    {
      href: "/about",
      text: "درباره ما",
      icon: <MdDescription />,
    },
    {
      href: "/contact",
      text: "تماس با ما",
      icon: <GrContact />,
    },
    // if token is not null, show login button
    {
      href: "/login",
      text: "ورود",
      icon: <FaUser />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className="flex justify-center items-center">
          <h1>شمع خانه</h1>
        </div>

        {drawerKeys.map(({ href, text, icon }, index) => (
          <ListItem key={index} disablePadding>
            <Link href={href}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <div className="flex justify-between items-center w-full p-4 gap-4">
        <span className="text-2xl flex items-center gap-2 whitespace-nowrap">
          <Image src="/icon-light.svg" alt="logo" width={30} height={30} />
          <span className="font-black">
            <b>شمع خانه</b>
          </span>
        </span>

        <SearchBar />

        <Button onClick={toggleDrawer(true)} className="min-w-fit">
          <RiMenu2Line className="text-2xl" />
        </Button>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
