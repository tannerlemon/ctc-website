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
            <img src={fileIcon} />
          </div>
          <a className="navItem">about</a>
        </div>
        <div className="navigation">
          <div className="icon">
            <img src={messageIcon} />
          </div>
          <a className="navItem">contact</a>
        </div>
        <div className="navigation">
          <div className="icon">
            <img src={calendarIcon} />
          </div>
          <a className="navItem">events</a>
        </div>
        <div className="logo">
          <img src={logo} />
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
