import "./App.css";
import fileIcon from "./imgs/file.png";
import messageIcon from "./imgs/message.png";
import calendarIcon from "./imgs/calendar.png";
import background from "./imgs/Website-Together.jpg";
import logo from "./imgs/ctc-white.png";

function App() {
  return (
    <div
      className="pageWrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="gradient">
        <div className="navigation">
          <div className="icon">
            <img alt="file icon" src={fileIcon} />
          </div>
          <div className="navItem">about</div>
        </div>
        <div className="navigation">
          <div className="icon">
            <img alt="message icon" src={messageIcon} />
          </div>
          <div className="navItem">contact</div>
        </div>
        <div className="navigation">
          <div className="icon">
            <img alt="calendar icon" src={calendarIcon} />
          </div>
          <div className="navItem">events</div>
        </div>
        <div className="logo">
          <img alt="Communities That Care logo" src={logo} />
        </div>
        <h1 className="name">
          <span className="communities">communities</span> <br />
          <span className="that">
            that <br />
          </span>
          <span className="care">care</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
