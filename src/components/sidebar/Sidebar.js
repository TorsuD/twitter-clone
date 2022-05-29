import React from "react";
import "./Sidebar.css";
import Twitter from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOptions";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/**Twitter icon */}
      <Twitter className="sidebar__twitterIcon" />
      {/**Sidebar Option */}
      <SidebarOption active icon={<Home />} text="Home" />
      <SidebarOption icon={<Search />} text="Explore" />
      <SidebarOption icon={<NotificationsNone />} text="Notifications" />
      <SidebarOption icon={<MailOutline />} text="Messages" />
      <SidebarOption icon={<BookmarkBorder />} text="Bookmarks" />
      <SidebarOption icon={<ListAlt />} text="Lists" />
      <SidebarOption icon={<PermIdentity />} text="Profile" />
      <SidebarOption icon={<MoreHoriz />} text="More" />

      {/**Button to tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
