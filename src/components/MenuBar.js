import React from 'react';
import './MenuBar.css';

function MenuBar() {
  return (
    <div className="MenuBar">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
