import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { BASE_API_URL } from "../../utils/constants";
import { db } from "../../utils/Firebase";
import ClassHeader from "./ClassHeader";
import SearchComponent from "./SearchComponent";
import "./Sessions.css";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundImage: `url(${"https://img.freepik.com/free-photo/white-cloud-blue-sky_1203-9447.jpg?size=626&ext=jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Sessions = (props) => {
  const { config, user, setUser } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user, "*******");
    if (!user) {
      navigate("/");
      return;
    }

    const getCategories = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/categories`);
        const result = data.map((item) => item.category);
        setCategories(result);
        // setFilteredCategories(result.slice(0, 8));
        setFilteredCategories(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    getData();
  }, []);

  const getData = async () => {
    const tutorData = [];

    const querySnapshot = await getDocs(collection(db, "tutor"));
    querySnapshot.forEach((doc) => {
      tutorData.push({
        id: doc.id,
        ...doc.data(),
      });
      console.log(`${doc.id} => ${doc.data().name}`);
    });
    setTutors(tutorData);
    console.log(tutorData);
  };
  console.log({ categories });
  return (
    <div className={classes.root}>
      <ClassHeader />
      <h1>
        <center>Learn from the Best</center>
      </h1>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
      <ul className="categories">
        {config?.categories?.map((category) => (
          <li
            className="category"
            style={{
              backgroundColor:
                selectedCategories === category ? "#ffc544" : "#ffeec8",
            }}
          >
            <Button
              variant="outlined"
              style={{ borderRadius: "5px", width: 200, height: 80 }}
              onClick={() => {
                setSelectedCategories(category);
              }}
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
      <SearchComponent
        {...props}
        tutors={tutors}
        selectedCategories={selectedCategories}
      />
    </div>
  );
};

export default Sessions;
