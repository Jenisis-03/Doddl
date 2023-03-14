import React, { useState } from "react";
import "./CharacterProfile.css";

function CharacterProfile(props) {
  console.log(props);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="CharacterProfile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="profile-image"
        src={props.character.images.main}
        alt={props.character.name.first}
      />
      <div className={`profile-details ${isHovering ? "hovering" : ""}`}>
        <h2 className="profile-name">{props.character.name.first}</h2>
        <p className="profile-description">{props.character.sayings[0]}</p>
      </div>
    </div>
  );
}

export default CharacterProfile;
