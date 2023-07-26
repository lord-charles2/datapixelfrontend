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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import { ListItemAvatar } from "@mui/material";
import Link from "next/link";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="bg-gray-200">
        <div className="flex justify-evenly">
          <Link href={"/"} className="flex flex-col items-center">
            <Image
              src={"/images2/home2.png"}
              height={30}
              width={30}
              alt="image"
            />
            <p>Home</p>
          </Link>
          <Link href={"/login"} className="flex flex-col items-center">
            <Image
              src={"/images2/user.png"}
              height={30}
              width={30}
              alt="image"
            />
            <p>Login</p>
          </Link>
          <div className="flex flex-col items-center">
            <Image src={"/images2/cs.png"} height={30} width={30} alt="image" />
            <p>Help</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/images2/settings2.png"}
              height={30}
              width={30}
              alt="image"
            />
            <p>Settings</p>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="xxs:visible md:invisible lg:invisible"
          >
            <Image
              src={"/images2/menu.svg"}
              alt="image"
              width={30}
              height={30}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
