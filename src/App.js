import "./App.css";
import Slider from "./components/Slider";
import background from "./imgs/Website-Together.jpg";

function App() {
  return (
    <div
      className="pageWrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      {<Slider />}
    </div>
  );
}

export default App;
