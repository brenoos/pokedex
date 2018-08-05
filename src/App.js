import React, { Component } from 'react'
import pokeBall from './pokeball.svg'
import {Route} from 'react-router-dom';
import './App.css'

import PokeList from './components/pokeList'
import PokeInfo from './components/pokeInfo'

class App extends Component {

  componentDidMount(){
    var pokeballElement = document.getElementById('pokeballBack');

    window.onscroll = function(){
        var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
        pokeballElement.style.transform = rotation;
    }
  }

  render() {
    return (
      <div className="App">
        <img className="pokeball-back" id="pokeballBack" src={pokeBall} alt="" />
        <Route exact path="/" render={() => <PokeList />} />
        <Route exact path="/:pokeNumber" component={PokeInfo} />
      </div>
    );
  }
}

export default App
