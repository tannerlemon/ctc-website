import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import background from "./imgs/Website-Together.jpg";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleShowOverlay = () => {
    setShowOverlay(true);
  };
  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className="pageWrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navigation
        showOverlay={showOverlay}
        handleShowOverlay={handleShowOverlay}
        handleCloseOverlay={handleCloseOverlay}
      />
      {
        <Slider
          showOverlay={showOverlay}
          handleCloseOverlay={handleCloseOverlay}
        />
      }
    </div>
  );
}

export default App;
