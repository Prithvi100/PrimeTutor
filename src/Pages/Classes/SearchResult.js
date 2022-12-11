import { Button, Rating } from "@mui/material";
import React from "react";
import "./SearchResult.css";

function SearchResult(props) {
  console.log({ props });
  const {
    tutorName,
    categories,
    hourlyRate,
    college,
    description,
    rating,
    profileImgUrl,
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
      <img
        src={profileImgUrl}
        alt=""
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          objectFit: "cover",
        }}
      />
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h4>{tutorName}</h4>
            <h5>{hourlyRate} / Hr</h5>
          </div>
          <h6>{description}</h6>

          <p style={{ color: "black" }}>
            {categories} , {college}
          </p>
        </div>
        <div>
          <Rating
            value={rating}
            readOnly={true}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
        </div>
        <div>
          <Button style={{ borderRadius: 50 }} variant="outlined">
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
