import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import UserContext from "../../context/UserContext";
import { db, storage } from "../../utils/Firebase";

const OnBoarding = () => {
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

  const { user, config } = useContext(UserContext);
  const [userData, setUserData] = useState({
    edlevel: "",
    college: "",
    hourlyrate: "",
    monthlyrate: "",
    description: "",
  });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [file, setFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    if (file) {
      upload({ file: true });
    }
  }, [file]);

  useEffect(() => {
    if (resumeFile) {
      upload({ resume: true });
    }
  }, [resumeFile]);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    if (user?.onBoarded) {
      navigate("/Dashboard");
    }
  }, []);

  const upload = async (data) => {
    let storageRef;
    let uploadTask;
    if (data?.file) {
      console.log(file);
      // Upload file and metadata to the object 'images/mountains.jpg'
      storageRef = ref(storage, "images/" + file.name);
      uploadTask = uploadBytesResumable(storageRef, file);
      // Listen for state changes, errors, and completion of the upload.
    } else if (data?.resume) {
      console.log(resumeFile);
      // Upload resumeFile and metadata to the object 'images/mountains.jpg'
      storageRef = ref(storage, "resume/" + resumeFile.name);
      uploadTask = uploadBytesResumable(storageRef, resumeFile);
      // Listen for state changes, errors, and completion of the upload.
    }

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          if (data?.file) {
            setProfileUrl(downloadURL);
          } else if (data?.resume) {
            setResumeUrl(downloadURL);
          }
        });
      }
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(
      {
        edlevel: userData.edlevel,
        college: userData.college,
        hourlyRate: userData.hourlyrate,
        monthlyRate: userData.monthlyrate,
        categories: category,
        subCategory: subCategory,
        description: userData.description,
        tutorId: user.userId,
        tutorName: user.name,
        tutorEmail: user.email,
        profileImgUrl: "",
        resumeUrl: "",
        rating: 0,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      "Log*********************"
    );
    const docRef = await addDoc(collection(db, "tutor"), {
      edlevel: userData.edlevel,
      college: userData.college,
      hourlyRate: userData.hourlyrate,
      monthlyRate: userData.monthlyrate,
      categories: category,
      subCategory: subCategory,
      description: userData.description,
      tutorId: user.userId,
      tutorName: user.name,
      tutorEmail: user.email,
      profileImgUrl: profileUrl,
      resumeUrl: resumeUrl,
      rating: 0,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then(async (e) => {
        const tutorRef = doc(db, "users", user.userId);
        await updateDoc(tutorRef, {
          onBoarded: true,
          onBoardedStatus: "pending",
          updatedAt: new Date(),
        }).then((e) => {
          navigate("/Dashboard");
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <section className="position-relative pb-36 bg-gradient-gray2 overflow-hidden login-section">
      <div className="position-relative container" style={{ zIndex: "50" }}>
        <div className="text-center">
          {/* <a className="d-inline-block mb-40" href="/#">
            <img
              className="img-fluid #img-size 3 #new-size"
              src="images/Screen-Shot-2022-11-16-at-6-43-59-PM.png"
              alt=""
            />
          </a> */}
          <h2 className="fs-10 mb-10 mt-10">Complete Your Tutor Profile</h2>

          {profileUrl && (
            <img
              className="img-fluid #img-size 2 #new-size"
              style={{
                width: 150,
                borderRadius: "50%",
                margin: 10,
                objectFit: "contain",
              }}
              src={profileUrl}
              alt=""
            />
          )}
          <form className="mw-md-lg mx-auto" onSubmit={handleOnSubmit}>
            {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
            <div className="row mb-4 g-4">
              <div className="col-12">
                <div className="form-group">
                  <h6 style={{ textAlign: "left", fontWeight: 500 }}>
                    Upload your Profile Picture
                  </h6>
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    style={{ borderRadius: "3px" }}
                    type="file"
                    accept="image/*"
                    name="profile"
                    placeholder="Highest Level of Education"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    style={{ borderRadius: "3px" }}
                    type="text"
                    value={userData.description}
                    name="description"
                    placeholder="Describe yourself as a Tutor"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    style={{ borderRadius: "3px" }}
                    type="text"
                    name="edlevel"
                    placeholder="Highest Level of Education"
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
                    type="text"
                    value={userData.college}
                    name="college"
                    placeholder="College you attended/are attending"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <h6 style={{ textAlign: "left", fontWeight: 500 }}>
                    Upload your Latest Resume
                  </h6>
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    style={{ borderRadius: "3px" }}
                    type="file"
                    accept="pdf/*"
                    name="resume"
                    placeholder="Upload Your Resume"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <h6 style={{ textAlign: "left", fontWeight: 500 }}>
                    What subject would you like to Tutor?
                  </h6>
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    <DropdownToggle
                      caret
                      color="primary"
                      size="lg"
                      style={{ width: "100%" }}
                    >
                      {category === ""
                        ? "Subjects You Want to Tutor"
                        : category}
                    </DropdownToggle>
                    <DropdownMenu>
                      {config?.categories?.map((i) => {
                        return (
                          <DropdownItem
                            onClick={(e) => {
                              console.log(i);
                              setCategory(i);
                            }}
                          >
                            {i}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              <div className="col-12">
                {config?.[category]?.length > 0 && (
                  <div>
                    <h6 style={{ textAlign: "center", fontWeight: 500 }}>
                      Subcategories:
                    </h6>
                    {config?.[category]?.map((i) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={subCategory.includes(i)}
                              onChange={(event) => {
                                if (event.target.checked) {
                                  setSubCategory([...subCategory, i]);
                                } else {
                                  const data = subCategory;
                                  const newData = data.filter((x) => {
                                    return x !== i;
                                  });
                                  setSubCategory([...newData]);
                                }
                              }}
                              name="checkedA"
                            />
                          }
                          label={i}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
                    id="signInInput2-2"
                    style={{ borderRadius: "3px" }}
                    name="hourlyrate"
                    placeholder="Hourly Rate...(ex: $40)"
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
                    name="monthlyrate"
                    placeholder="Monthly Subscription Rate for a student (Optional):"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-light-light fs-18 px-9 py-4 w-100 fw-medium text-white mb-5 rounded-1 login-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OnBoarding;
