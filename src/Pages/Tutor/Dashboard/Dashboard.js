import MainDash from "./components/MainDash/MainDash";
//import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash />
      {/*  <RightSide /> */}
    </div>
  );
};

export default Dashboard;
