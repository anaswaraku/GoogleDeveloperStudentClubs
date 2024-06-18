import React from "react";
import "./About.css"; 
import Button from "@mui/material/Button";


const joinus = () => {
  window.open(
    "https://gdsc.community.dev/accounts/social/signup/?next=/bharata-mata-college-thrikkakara-india/"
  );
};

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        className="about"
        style={{
          maxWidth: "600px",
          color: "rgba(0, 0, 0, 0.621)",
          zIndex: "1",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        "GDSC BMC is a platform for budding and aspiring developers aiming to
        bridge the gap between theory and practice. Our goal is to help them
        broaden their understanding of emerging technologies and shape their
        skills into a better version. The club intends to provide students with
        hands-on technology through Google's curated resources."
      </p>
      <div className="Join1">
        <div className="join">
          <h1>Stay Updated !</h1>
          <p>
            Join our community to receive the latest updates, news, and event
            information
          </p>
          <Button variant="contained" onClick={joinus}>
            Join Us
          </Button>
    
        </div>
      </div>
    </div>
  );
};

export default About;
