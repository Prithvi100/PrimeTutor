import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import MainDash from "./components/MainDash/MainDash";
//import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, config } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user?.userType !== "tutor") {
      navigate("/");
      return;
    }
    if (user && user?.userType === "tutor") {
      fetchHisData();
    }
  }, []);

  const fetchHisData = async () => {};

  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash />
      {/*  <RightSide /> */}
    </div>
  );
};

export default Dashboard;
