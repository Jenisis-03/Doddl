// CharacterProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HoverEffect from './HoverEffect';

const CharacterProfile = ({ id }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.sampleapis.com/futurama/characters/${id}`)
      .then((response) => setCharacter(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-profile">
      <h2>
        <HoverEffect text={character.name} />
      </h2>
      <img
        src={character.images.main}
        alt={`${character.name} profile`}
        className="profile-image"
      />
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <p>
        <strong>Occupation:</strong> {character.occupation}
      </p>
    </div>
  );
};

export default CharacterProfile;
