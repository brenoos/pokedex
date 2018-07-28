import React, { Component } from 'react'
import pokeBall from './pokeball.svg'
import './App.css'

import PokeList from './components/pokeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="pokeball-back" id="pokeballBack" src={pokeBall} alt="" />
        <PokeList />
      </div>
    );
  }
}

export default App
