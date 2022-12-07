import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { Redirect } from "react-router";

function SearchResult(props) {
  console.log({ props });
  const {
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    Guru,
    history,
  } = props;
  const btnstyle = {
    margin: "9px 0",
    width: 100,
    borderRadius: 50,
    fontWeight: "bold",
    backgroundColor: "green",
  };

  const redirectUser = () => {
    console.log(history);
    history.push("/Pages/Classes/CourseScreen");
  };
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p style={{ color: "black" }}>{Guru}</p>
          <p style={{ color: "black" }}>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
            <Button
              type="submit"
              color="Primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={redirectUser}
            >
              <center>
                {/* <Link to="/Pages/Classes/Sessions"> Log In </Link> */}
                Join Class
              </center>{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
