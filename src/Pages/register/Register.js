import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../utils/Firebase";

const Register = () => {
  const navigate = useNavigate();
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

  //const { signUpEmailPassword } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (user.username !== "" && user.email !== "" && user.password !== "") {
      // axios
      //   .post(`${BASE_API_URL}/signup`, {
      //     ...user,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     setErrorMsg("");
      //     navigate("/Login");
      //   })
      //   .catch((error) => {
      //     console.log("Error", error);
      //   });
      console.log(user, "User*****");
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
          // Signed in
          const newUser = userCredential.user;
          // ...
          console.log(newUser, "User****");

          // Add a new document in collection "cities"
          await setDoc(doc(db, "users", newUser.uid), {
            name: user.username,
            email: user.email,
            profileImgUrl: "",
            userType: "student",
            createdAt: new Date(),
            updatedAt: new Date(),
          })
            .then((e) => {
              setErrorMsg("");
              navigate("/Login");
            })
            .catch((error) => {
              console.log("Error", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(error);
        });
    } else {
      setErrorMsg("Please enter all the fields.");
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
          <h2 className="fs-10 mb-4">Join the TutorPaths Community</h2>

          <form className="mw-md-lg mx-auto" onSubmit={handleOnSubmit}>
            {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
            <div className="row mb-4 g-4">
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    style={{ borderRadius: "3px" }}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
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
              Register
            </button>
            <p className="text-muted mb-0">
              <span>Already have an account? </span>
              <a
                className="text-secondary"
                href="/#"
                onClick={() => navigate("/Login")}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
