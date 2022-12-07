import React from "react";
import "./CourseSidebar.css";
import SidebarRow from "./SidebarRow";
function CourseSidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Course Home" />
      <SidebarRow title="My Progress" />
      <SidebarRow title="Chat with Gurus of this Course" />
    </div>
  );
}

export default CourseSidebar;
