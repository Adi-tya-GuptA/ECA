import React from "react";
// import Logo from "./eca.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-logo">
          <img src="./eca.png" alt="" />
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">clubs</li>
            <li className="nav-item">gallery</li>
            <li className="nav-item">team</li>
            <li className="nav-item join-btn">JOIN-US</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
