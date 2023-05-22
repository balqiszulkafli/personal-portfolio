import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
      </div>
      <p>
        &copy; 2023 Balqis Zulkafli <br></br>This is the fact is my first React
        project! Please don't judge me :)
      </p>
    </div>
  );
}

export default Footer;
