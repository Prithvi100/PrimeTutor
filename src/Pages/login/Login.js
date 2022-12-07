import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { auth, db } from "../../utils/Firebase";
import "./login.css";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const paperStyle = {
    padding: 30,
    height: "60vh",
    width: 400,
    margin: "150px",
    padding: "25px",
  };

  const btnstyle = {
    margin: "9px 0",
    width: 100,
    borderRadius: 50,
    fontWeight: "bold",
    backgroundColor: "green",
  };
  //october 21st-23rd

  //1500 SJAS

  //
  //Boots,

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (userData.email !== "" && userData.password !== "") {
      // axios
      //   .post(`${BASE_API_URL}/signin`, {
      //     ...userData,
      //   })

      signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then(async (userCredential) => {
          // Signed in
          const loggedInUser = userCredential.user;
          // ...

          console.log(loggedInUser);

          const docRef = doc(db, "users", loggedInUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setErrorMsg("");
            const data = {
              userId: docSnap.id,
              ...docSnap.data(),
            };
            setUser(data);
            window.localStorage.setItem("user", JSON.stringify(data));
            if (data.userType === "student") {
              navigate("/Classes");
            } else if (data.userType === "tutor") {
              if (data.onBoarded) {
                navigate("/Dashboard");
              } else {
                navigate("/Onboarding");
              }
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("No User Found");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      setErrorMsg("Please enter email and password.");
    }
  };
  return (
    <section className="position-relative pb-36 bg-gradient-gray2 overflow-hidden login-section">
      <div className="position-relative container" style={{ zIndex: "50" }}>
        <div className="text-center">
          <a className="d-inline-block mb-40" href="/#">
            <img
              className="img-fluid #img-size 3 #new-size"
              src="images/Screen-Shot-2022-11-16-at-6-43-59-PM.png"
              alt=""
            />
          </a>
          <h2 className="fs-10 mb-4">Welcome Back!</h2>

          <form className="mw-md-lg mx-auto" onSubmit={handleOnSubmit}>
            {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
            <div className="row mb-4 g-4">
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    id="signInInput2-1"
                    style={{ borderRadius: "3px" }}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    id="signInInput2-2"
                    style={{ borderRadius: "3px" }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-light-light fs-18 px-9 py-4 w-100 fw-medium text-white mb-5 rounded-1 login-btn"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-muted mb-0">
              <span>Don’t have an account? </span>
              <a
                className="text-secondary"
                href="/#"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Register");
                }}
              >
                Create free account
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
