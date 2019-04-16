import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Body from './pages/Body'
import {Router} from '@reach/router'
import List from './pages/List';
import Nav from './components/Nav'
import MakePost from './pages/Makepost'

const instance = axios.create({
  baseURL: 'https://swapi.co/api',
  timeout: 1000
});

const CharactersContext = React.createContext()

class App extends Component {
  state = {
    characters : []
  }

  async componentDidMount(){
    // const rawInfo = await instance.get("https://swapi.co/api/people/")
    const info = await instance.get("/people/")
    // const info = await rawInfo.json()
    this.setState({
      characters: info.data.results
    })
  }

  render() {
    return (
      <CharactersContext.Provider value={this.state.characters}>
        <div className="App">
          <Nav/>
          <Router>
            <Body path="/"/>
            <List path="/ejemplo"/>
            <MakePost path="/post"/>
          </Router>
        </div>
      </CharactersContext.Provider>
    );
  }
}

export default App;
export {
  CharactersContext
}
