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
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaRegUserCircle,
  FaUserCircle,
} from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const token = Cookies.get("token");
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "صفحه اصلی", icon: <FaHome />, href: "/" },
    { text: "محصولات", icon: <IoStorefront />, href: "/products" },
    { text: "درباره ما", icon: <MdDescription />, href: "/about" },
    { text: "تماس با ما", icon: <GrContact />, href: "/contact" },
    { text: "حساب کاربری", icon: <FaUser />, href: "/profile" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const useScrollCondition = (conditionOne: string, conditionTwo: string) => {
    if (scroll > 20) {
      return conditionOne;
    } else {
      return conditionTwo;
    }
  };
  return (
    <nav
      className={`fixed w-full top-0 z-50 ${useScrollCondition(
        "bg-white",
        "bg-transparent text-white"
      )}  shadow-md`}
    >
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icon-light.svg" alt="logo" width={30} height={30} />
              <span
                className={`text-xl hidden sm:inline ${useScrollCondition(
                  "",
                  "text-white"
                )}`}
              >
                <b>شمع خانه</b>
              </span>
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Full width on mobile when active 
            //! TODO: The search bar has problems with mobile size. 
            //! I need to fix it. 
            */}
            <div
              className={`
              ${
                isSearchVisible
                  ? "absolute left-0 right-0 top-0 p-4 bg-white dark:bg-gray-900 md:relative md:p-0"
                  : "hidden md:block"
              }
              w-full md:w-auto
            `}
            >
              <SearchBar />
            </div>

            {/* Search Toggle for Mobile */}
            <button
              className="md:hidden text-gray-600 hover:text-primary"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              {!isSearchVisible && <FaSearch className="text-xl" />}
            </button>

            {/* Cart */}
            <Link href="/cart">
              <Tooltip title="سبد خرید">
                <IconButton>
                  <Badge badgeContent={itemCount} color="primary"></Badge>
                  <FaShoppingCart color={useScrollCondition("gray", "white")} />
                </IconButton>
              </Tooltip>
            </Link>

            {/* user dashboard */}
            {token ? (
              <Link href="/dashboard">
                <Tooltip title="داشبورد">
                  <IconButton>
                    <FaUserCircle color={useScrollCondition("gray", "white")} />
                  </IconButton>
                </Tooltip>
              </Link>
            ) : (
              <Link href="/login">
                <Tooltip title="ثبت نام / ورود">
                  <IconButton>
                    <FaUserCircle color={useScrollCondition("gray", "white")} />
                  </IconButton>
                </Tooltip>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <IconButton
              className="md:hidden"
              onClick={toggleDrawer(true)}
              edge="end"
              color="inherit"
            >
              <RiMenu2Line
                className={`text-2xl ${useScrollCondition(
                  "text-gray-600",
                  "text-white"
                )}`}
              />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
          },
        }}
      >
        <Box className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/icon-light.svg" alt="logo" width={30} height={30} />
            <span className="text-xl font-black">شمع خانه</span>
          </div>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon className="min-w-[40px]">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
