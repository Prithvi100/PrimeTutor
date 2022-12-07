import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import SignIn from "./SignIn";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/yoga-postures-image.jpeg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header active={0} />
      <h1>
        Learn <em>Anywhere</em>, Match with Tutors Instantly{" "}
      </h1>
      <SignIn {...props} />
    </div>
  );
};

export default Home;
