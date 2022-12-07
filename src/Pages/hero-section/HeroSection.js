import { useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ProfilesImage from "../../images/hero/profiles.png";
import { db } from "../../utils/Firebase";
import Features from "./Features";

const HeroSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
    });
  };
  return (
    <div className="overflow-hidden pt-32 pb-36">
      <div className="container">
        <div className="row align-items-center g-16">
          <div className="col-12 col-md-6">
            <div className="mw-md-xl">
              <h2 className="fs-5 mb-6">
                Learn & Practice with the World's Brightest Minds
              </h2>

              <button
                className="btn btn-secondary px-10 py-5"
                type="button"
                onClick={() => navigate("/Login")}
              >
                <span
                  className="fs-20 text-white text-uppercase fw-semibold mb-0"
                  style={{ letterSpacing: "1px" }}
                >
                  Get Started
                </span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={ProfilesImage} alt="" />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default HeroSection;
