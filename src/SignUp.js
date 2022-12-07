//SignUp screen
import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { BASE_API_URL } from "./utils/constants";
//import { useAuth } from "../../providers/authProvider";
<Header />;
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/yoga-postures-image.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
const SignUp = (props) => {
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
      axios
        .post(`${BASE_API_URL}/signup`, {
          ...user,
        })
        .then((response) => {
          console.log(response.data);
          setErrorMsg("");
          props.history.push("/");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      setErrorMsg("Please enter all the fields.");
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header active={0} />
      <form onSubmit={handleOnSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Sign Up</h2>
            </Grid>
            {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
            <TextField
              label="Name"
              name="username"
              placeholder="Enter Your Name"
              fullWidth
              variant="filled"
              value={user.username || ""}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              placeholder="Enter Your Email"
              fullWidth
              name="email"
              variant="filled"
              value={user.email || ""}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              fullWidth
              variant="filled"
              value={user.password || ""}
              onChange={handleInputChange}
            />

            <center>
              {" "}
              <Button
                type="submit"
                color="Primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                // onClick={signUpEmailPassword(email, password)}
              >
                Sign Up
              </Button>
            </center>
          </Paper>
        </Grid>
      </form>
    </div>
  );
};

export default SignUp;
