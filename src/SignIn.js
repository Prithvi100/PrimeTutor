//Signin screen
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context/UserContext";
import { BASE_API_URL } from "./utils/constants";

const SignIn = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  // email: "",
  // password: "",
  // });
  const [errorMsg, setErrorMsg] = useState("");
  console.log({ props });
  //const authProvider = useAuth();
  //const { loginEmailPassword, googleLogin } = useAuth();

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
      axios
        .post(`${BASE_API_URL}/signin`, {
          ...userData,
        })
        .then((response) => {
          console.log(response.data);
          setErrorMsg("");
          setUser({
            ...userData,
          });
          window.localStorage.setItem("user", JSON.stringify(userData));
          navigate("/Pages/Classes/Sessions");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      setErrorMsg("Please enter email and password.");
    }
  };
  console.log("Loaded");
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid style={{ margin: "20px" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Log In</h2>
          </Grid>
          {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
          <TextField
            label="Email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            fullWidth
            variant="filled"
          />
          <TextField
            label="Password"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter Your Password"
            type="password"
            fullWidth
            variant="filled"
          />

          <center>
            <Button
              type="submit"
              color="Primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              <center>
                {/* <Link to="/Pages/Classes/Sessions"> Log In </Link> */}
                Sign In
              </center>{" "}
            </Button>
          </center>
          <br />
          <Typography>
            <center>
              {" "}
              <Link to="/">Forgot Password?</Link>
              <br />
              New to RizzBars?
              {/* <Link to="/SignUp"> Sign Up</Link> */}
              <button
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                Sign Up
              </button>
            </center>
          </Typography>
        </Paper>
      </Grid>
    </form>
  );
};

export default SignIn;
