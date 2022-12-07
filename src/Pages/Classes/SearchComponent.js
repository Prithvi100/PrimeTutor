import "./SearchComponent.css";
import SearchResult from "./SearchResult";

function SearchComponent(props) {
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
      {/* <div className="searchPage_info">
        <Button variant="outlined">Flexibility</Button>
        <Button variant="outlined">Type of Calming Activity</Button>
        <Button variant="outlined">Price</Button>
      </div> */}
      {tutors.map((i, index) => {
        return (
          <SearchResult
            img={i.profileImg}
            location=""
            title={i.subject}
            Guru={i.tutorName}
            description={i.description}
            star={i.rating}
            price={"$" + i.price}
            total=""
          />
        );
      })}

      {/* <SearchResult
        {...props}
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_12/3458890/210323-ayurvedic-medicine-appropriation-main-cover-cs.jpg"
        location=""
        title="Yoga in the Heat- Burn some calories"
        Guru="By Guru Sharma"
        description="Get your sweat on with some great yoga in the sun!"
        star={4.3}
        price="$200 / course"
        total=""
      />

      <SearchResult
        {...props}
        img="https://webassets.shawacademy.com/what-is-ashtanga-yoga.jpg"
        location=""
        title="Ashtanga Yoga Session"
        Guru="By Sangeetha"
        description="Experience a real Ashtanga Yoga session, from the privacy of your own home"
        star={4.7}
        price="$50 / course"
        total=""
      /> */}
      {/* <SearchResult
        {...props}
        img="https://chopra.brightspotcdn.com/dims4/default/1e469e3/2147483647/strip/true/crop/795x341+0+15/resize/894x383!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fb5%2Ff2%2Fb63ad8bb7d4c611481c78ef8b849%2Fresorativeyogaposes-0.jpg"
        location=""
        title="Outdoor Yoga Session-Anywhere, anytime"
        Guru="By Rajeev Ram"
        description="Get ready to heal with some Restorative Yoga!"
        star={4.1}
        price="$150/course"
        total=""
      />
      <SearchResult
        {...props}
        img="https://images.sadhguru.org/sites/default/files/media_files/iso/en/48322-hatha-yoga-nature-of-sadhana-progress.jpg"
        location=""
        title="Intense and Spiritual Hatha Yoga Session"
        Guru="By Brian Metropolis"
        description="Experience a Guided World-Class Hatha Yoga Session from your home"
        star={5.0}
        price="$35/ course"
        total=""
      />
      <SearchResult
        {...props}
        img="https://www.news-medical.net/image.axd?picture=2021%2F3%2Fshutterstock_1236746887.jpg"
        location=""
        title="Morning Meditation Class"
        Guru="By Roger Sullivan"
        description="Experience Guided Meditation Sessions as the sun rises, from the comfort of your home"
        star={5.0}
        price="450/ Course"
        total=""
      />
      <SearchResult
        {...props}
        img="data:image/jpeg;base64,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"
        location=""
        title="Mindful Meditation Class to Help you Sleep Better"
        Guru="By Naval Ravikant"
        description="Sleep Better and Faster with these advanced meditation techniques!"
        star={5.0}
        price="$650/ Course"
        total=""
      />
      <SearchResult
        {...props}
        img="https://www.redearthacupuncture.com/media/general/meditation_waterfall.jpg"
        location=""
        title="Calm and Relaxing Meditation Class"
        Guru="By Karthika Mohan"
        description="Be free of your troubles and be in the moment with us!"
        star={5.0}
        price="$180/ Course"
        total=""
      />
      <SearchResult
        {...props}
        img="https://i.ytimg.com/vi/GgGdMJDiVYE/maxresdefault.jpg"
        location=""
        title="Meditation Class- Learn how to Unlock your Chakras!"
        Guru="By Guru Pathik"
        description="Unlock your Chakras from the Comfort of your home- Avatar Style"
        star={5.0}
        price="$160/ Course"
        total=""
      />
      <SearchResult
        {...props}
        img="https://static3.bigstockphoto.com/0/4/2/large1500/240018958.jpg"
        location=""
        title="Natural Meditation Class- Learn to Meditate in Nature"
        Guru="By Surya Krishna"
        description="Be one with your surroundings and be aware of the earth around you. A class that will help you get in touch with the world and be one with it."
        star={5.0}
        price="$210/ Course"
        total=""
      /> */}
    </div>
  );
}

export default SearchComponent;
