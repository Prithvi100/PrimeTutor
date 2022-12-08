import "./SearchComponent.css";
import SearchResult from "./SearchResult";

function TeacherCard(props) {
  console.log("searchResult", props);
  const tutors = props.tutors;
  const btnstyle = {
    margin: "9px 0",
    width: 100,
    borderRadius: 50,
    fontWeight: "bold",
    backgroundColor: "green",
  };

  return (
    <div className="searchPage">
      {tutors.map((i, index) => {
        return (
          <SearchResult
            profileImgUrl={i.profileImgUrl}
            tutorName={i.tutorName}
            description={i.description}
            rating={i.rating}
            college={i.college}
            categories={i.categories}
            hourlyRate={"$" + i.hourlyRate}
          />
        );
      })}
    </div>
  );
}

export default TeacherCard;
