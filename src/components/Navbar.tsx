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
import { FaHeart, FaHome, FaRegUserCircle, FaSearch, FaUser } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { total } = useSelector((state: RootState) => state.cart);
  const pathname = usePathname();

  const token = Cookies.get("token");

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
      href: "/favorites",
      text: "علاقه مندی ها",
      icon: <FaHeart />,
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
        <div className="flex items-center justify-center p-2 gap-2">
          <h1>شمع خانه</h1>
        </div>

        {drawerKeys.map(({ href, text, icon }, index) => (
          <ListItem
            className={`${
              pathname === href ? "bg-primary text-background" : ""
            } p-2 rounded-xl`}
            key={index}
            disablePadding
          >
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
      <div className="flex items-center justify-between w-full gap-4 p-4">
        <span className="flex items-center gap-2 text-2xl whitespace-nowrap">
          <Image src="/icon-light.svg" alt="logo" width={30} height={30} />
          <span className="font-black">
            <b>شمع خانه</b>
          </span>
        </span>

        <SearchBar />

        <div className="flex items-center gap-2">
          <Link href="/cart">
            <Button
              className="relative flex items-center gap-2"
              color="primary"
            >
              <TbShoppingCart className="text-2xl" />
              <span>سبد خرید</span>
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-sm text-white rounded-full bg-secondary">
                {total}
              </span>
            </Button>
          </Link>

          {token ? (
            <Link href="/dashboard">
              <Button variant="contained" startIcon={<FaRegUserCircle />}>
                <span>حساب کاربری</span>
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="contained" startIcon={<FaRegUserCircle />}>
                <span>ورود / ثبت نام</span>
              </Button>
            </Link>
          )}

          <Button onClick={toggleDrawer(true)} className="min-w-fit">
            <RiMenu2Line className="text-2xl" />
          </Button>
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
