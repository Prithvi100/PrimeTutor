import { Button } from "@material-ui/core";
// import "./SearchComponent.css";

function RequestCard(props) {
  console.log("Requests", props);
  const requests = props.requests;

  if (props.loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="searchPage">
      {requests.map((i, index) => {
        return (
          <div className="searchResult">
            <img
              src={
                i?.profileImgUrl ||
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
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
                  <h4>{i.studentName}</h4>
                  <h5>{i.message} / Hr</h5>
                </div>
                {/* <h6>{description}</h6> */}

                <p style={{ color: "black" }}>
                  {/* {categories} , {college} */}
                </p>
              </div>
              <div>
                {/* <Rating
                  value={rating}
                  readOnly={true}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                /> */}
              </div>
              <div>
                <Button
                  style={{ borderRadius: 50 }}
                  variant="outlined"
                  onClick={() => {
                    // props.handleClickOpen(teacherData);
                  }}
                >
                  Accept
                </Button>

                <Button
                  style={{ borderRadius: 50 }}
                  variant="outlined"
                  onClick={() => {
                    // props.handleClickOpen(teacherData);
                  }}
                >
                  Reject
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RequestCard;
