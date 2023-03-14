import React from 'react';
import CharacterGrid from './components/CharacterGrid';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <CharacterGrid />
    </div>
  );
}

export default App;
