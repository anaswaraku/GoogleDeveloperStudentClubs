import zIndex from "@mui/material/styles/zIndex";
import "./Main-head.css"; // Import the CSS

const Mainhead = () => {
  return (
    <div className="main">
      <div className="main-header">
        <h1 className="main_header_title">
          <span style={{ color: "#ea4335" }}>G</span>oogle{" "}
          <span style={{ color: "#4285F4" }}>D</span>evelopers{" "}
          <span style={{ color: "#34A853" }}>S</span>tudents
          <span style={{ color: "#F4B400" }}>C</span>lub
        </h1>
        <p className="main_header_subtitle">Bharata Mata College,Thrikkakara</p>
       
        <div className="shape circ1"></div>
        <div className="shape circ2"></div>
        <div className="shape circle1"></div>
        <div className="shape circle2"></div>
        <div className="shape rectangle1"></div>
        <div className="shape rec1"></div>
        <div className="shape rectangle2"></div>
        <div className="shape rec2"></div>
        <div className="shape triangle1"></div>
        <div className="shape triangle2"></div>
      </div>
    </div>
  );
};

export default Mainhead;
