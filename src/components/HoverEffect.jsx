// HoverEffect.jsx
import React, { useState } from 'react';

const HoverEffect = ({ text, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    color: hovered ? '#ff6600' : '#333',
  };

  return (
    <span
      className="hover-effect"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {text}
    </span>
  );
};

export default HoverEffect;
