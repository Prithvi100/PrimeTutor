import React from "react";
import Header from "../../../Header";
import CourseSidebar from "./CourseSidebar";
import VideoLayout from "./VideoLayout";

import "./CourseScreen.css";
const CourseScreen = () => {
  return (
    <div className="header">
      <Header />
      <div className="content">
        <CourseSidebar />
        <VideoLayout />
      </div>
    </div>
  );
};

export default CourseScreen;
