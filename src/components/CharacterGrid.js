import React, { useState, useEffect } from "react";
import CharacterProfile from "./CharacterProfile";
import axios from "axios";
import "./CharacterGrid.css";

function CharacterGrid() {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    const { data } = await axios.get(
      "https://api.sampleapis.com/futurama/characters"
    );
    setCharacters(data);
    console.log(characters);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="CharacterGrid">
      {characters.map((character) => (
        <CharacterProfile key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
