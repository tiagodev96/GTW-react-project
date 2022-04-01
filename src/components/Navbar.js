import React from "react";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-item tutorial">
            <span class="material-icons">question_mark</span>
          </li>
          <li className="nav-item logo">Guess The Word</li>
          <li className="nav-item statistics">
            <span class="material-icons">insert_chart_outlined</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
