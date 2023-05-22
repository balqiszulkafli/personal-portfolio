import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  /*START
  the function below, when going to the other pages, 
  it will make the navbar 
  automatically close when goin to other page*/

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  //END
  return (
    /*the id={expandNavbar ? "open" : "close" 
    means that the navbar if true it will assgin id to "open"
    if false it will assgin id to "close"
    */

    /*setExpandNavbar is a function that updates the value of the
        expandNavbar state. (prev) => !prev is a function that takes the
        previous state value (prev) and returns the opposite value. If prev is
        true, it will return false, and if prev is false, it will return true.
        This effectively toggles the value.*/

    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/graphicdesign">Graphic Design</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
