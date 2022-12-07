//import { Dashboard } from "@material-ui/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import ForgotPassword from "./ForgotPassword";
import CourseScreen from "./Pages/Classes/CourseScreens/CourseScreen";
import SearchComponent from "./Pages/Classes/SearchComponent";
import SearchResult from "./Pages/Classes/SearchResult";
import Sessions from "./Pages/Classes/Sessions";
//import GuruLogin from "./Pages/Guru/GuruLogin";
//import GuruQuestion from "./Pages/Guru/GuruQuestion";
import HeroSection from "./Pages/hero-section/HeroSection";
import Login from "./Pages/login/Login";
import Navbar from "./Pages/navbar/Navbar";
import Register from "./Pages/register/Register";
import Dashboard from "./Pages/Tutor/Dashboard/Dashboard";
import OnBoarding from "./Pages/Tutor/OnBoarding";
import TutorRegister from "./Pages/Tutor/TutorRegister";

function App() {
  console.log();
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" render={(props) => <Home text="Hello, " {...props} />} /> */}
          {/* <Route
            path="/"
            exact
            element={
              user ? <Navigate to="/Pages/Classes/Sessions" /> : <Home />
            }
          /> */}
          <Route path="/" exact element={<HeroSection />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/TutorRegister" exact element={<TutorRegister />} />
          <Route path="/ForgotPassword" exact element={<ForgotPassword />} />
          <Route path="/Classes" exact element={<Sessions />} />

          <Route path="/OnBoarding" exact element={<OnBoarding />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route
            path="/Classes/SearchComponent"
            exact
            element={<SearchComponent />}
          />
          <Route
            path="/Classes/SearchResult"
            exact
            element={<SearchResult />}
          />
          <Route
            path="/Classes/CourseScreen"
            exact
            element={<CourseScreen />}
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
