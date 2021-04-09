import React from "react";
import Menu from "./Menu";

export default function MenuBar({ showMenu, setShowMenu }) {
  const closedBar = () => {
    return (
      <div className="menuBar">
        <div className="yellowWrapper title">
          <h2>Communities That Care</h2>
        </div>
        <div
          className="yellowWrapper menuToggleHolder"
          onClick={() => setShowMenu(false)}
        >
          <h3>close</h3>
          <div>
            <div className="menuToggle"></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {!showMenu && (
        <div className="menuBar">
          <div className="yellowWrapper title">
            <h2>Communities That Care</h2>
          </div>
          <div
            className="yellowWrapper menuToggleHolder"
            onClick={() => setShowMenu(true)}
          >
            <h3>menu</h3>
            <div>
              <div className="menuToggle"></div>
              <div className="menuToggle"></div>
            </div>
          </div>
        </div>
      )}
      {showMenu && <Menu closedBar={closedBar} showMenu={showMenu} />}
    </div>
  );
}
