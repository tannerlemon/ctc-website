import React, { useState } from "react";
import background from "../../imgs/main.jpg";
import MenuBar from "./MenuBar";

export default function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div
        className="pageWrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <MenuBar showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className="heroWrapper">
          <div className="yellowWrapper hero">
            <div>
              <div className="videoHolder">
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/531419892"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="Communities That Care"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
