import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  History,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "./utils/constants";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
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
function ForgotPassword(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  console.log({ props });

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
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form onSubmit={handleOnSubmit}>
        <Grid style={{ margin: "20px" }}>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Reset Password</h2>
            </Grid>
            {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
            <TextField
              label="Enter New Password"
              name=""
              onChange={handleInputChange}
              placeholder="Enter Your New Password"
              fullWidth
              variant="filled"
            />
            <TextField
              label="Confirm Password"
              name="password"
              onChange={handleInputChange}
              placeholder="Re-enter Your New Password"
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
                  Reset
                </center>{" "}
              </Button>
            </center>
            <br />
          </Paper>
        </Grid>
      </form>
    </div>
  );
}

export default ForgotPassword;
