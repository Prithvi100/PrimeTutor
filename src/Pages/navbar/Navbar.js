import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import NewLogo from "../../images/NewLogo.png";
import NameBlack from "../../logos/gradia-name-black.svg";

import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (event) => {
    // event.preventDefault();
    window.localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  console.log(user, "*****");
  return (
    <section className="navbar-section">
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-transparent py-5 py-lg-3 px-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <img className="img-fluid img-logo" src={NewLogo} alt="" />
            </a>
            {!user ? (
              <div className="collapse navbar-collapse ms-11">
                <ul className="navbar-nav">
                  <li className="nav-item p-5">
                    <a className="nav-link d-inline-block p-0" href="/#">
                      <h3 className="fs-17 fw-medium text-secondary mb-0">
                        Features
                      </h3>
                    </a>
                  </li>
                  <li className="nav-item p-5">
                    <a className="nav-link d-inline-block p-0" href="/#">
                      <h3 className="fs-17 fw-medium text-secondary mb-0">
                        Testimonials
                      </h3>
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="collapse navbar-collapse ms-11">
                <ul className="navbar-nav">
                  <li className="nav-item p-5">
                    <a
                      className="nav-link d-inline-block p-0"
                      href="/tutors"
                    ></a>
                  </li>
                </ul>
              </div>
            )}
            <div className="d-none d-lg-block">
              <div className="row">
                <div className="col-auto">
                  {!user && (
                    <button
                      className="btn btn-transparent px-4 py-3 rounded-1 tutor-button"
                      type="button"
                      onClick={() => {
                        navigate("/TutorRegister");
                      }}
                    >
                      <span className="fs-17 fw-medium text-secondary mb-0">
                        For Tutors
                      </span>
                    </button>
                  )}
                  {/* <button
                      onClick={handleLogout}
                      type="button"
                      className="btn-transparent"
                    >
                      Logout
                    </button> */}
                </div>
                <div className="col-auto">
                  {!user ? (
                    <div className="border border-2 border-secondary rounded-3">
                      <button
                        className="btn btn-transparent px-4 py-3 rounded-1"
                        type="button"
                        onClick={() => {
                          navigate("/Login");
                        }}
                      >
                        <span className="fs-17 fw-medium text-secondary mb-0">
                          Login
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div className="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={handleClick}
                      >
                        <AccountCircleIcon />
                      </button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => {}}>My Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            href="/#"
                            onClick={handleLogout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="d-lg-none">
              <button className="btn navbar-burger p-0">
                <svg
                  className="text-dark-light"
                  width="51"
                  height="51"
                  viewbox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs"
          style={{ zIndex: "9999" }}
        >
          <div
            className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
            style={{ opacity: "75%" }}
          ></div>
          <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
            <div className="d-flex align-items-center">
              <a className="me-auto h4 mb-0 text-decoration-none" href="/#">
                <img className="img-fluid" src={NameBlack} alt="" />
              </a>
              <a className="navbar-close" href="/#">
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#111827"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="py-16">
              <ul className="nav flex-column">
                <li className="nav-item mb-12">
                  <a className="nav-link d-inline-block p-0" href="/#">
                    <h3 className="fs-17 fw-medium text-secondary mb-0">
                      Features
                    </h3>
                  </a>
                </li>
                <li className="nav-item mb-12">
                  <a className="nav-link d-inline-block p-0" href="/#">
                    <h3 className="fs-17 fw-medium text-secondary mb-0">
                      Solutions
                    </h3>
                  </a>
                </li>
                <li className="nav-item mb-12">
                  <a className="nav-link d-inline-block p-0" href="/#">
                    <h3 className="fs-17 fw-medium text-secondary mb-0">
                      Resources
                    </h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-inline-block p-0" href="/#">
                    <h3 className="fs-17 fw-medium text-secondary mb-0">
                      Pricing
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="btn btn-light px-4 py-3 w-100 mb-5 rounded-1"
                type="button"
              >
                <span className="fs-17 fw-medium text-secondary mb-0">
                  Login
                </span>
              </button>
              <div className="d-inline-block w-100 rounded-3 free-trial">
                <button
                  className="btn btn-light px-4 py-3 w-100 rounded-1"
                  type="button"
                >
                  <span className="fs-17 fw-medium text-secondary mb-0">
                    Start Free Trial
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
