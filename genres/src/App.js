import React from 'react';
import logo from './logo.svg';
import genreJson from './genres.json'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>HELLO</h2>
        <Genre />

      </header>
    </div>
  );
}
class Genre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genreOptions: genreJson.Genre,
    }
  }

  handleMainGenre() {
    let genresList = [];

    for (let i = 0; i < genreJson.genres.length; i++) {

      if (genreJson.genres[i].standAlone) {

        genresList.push(<p> {this.state.genreOptions[i]}</p>)

      }

    }
  }


  render() {
    let genreList = this.state.genreOptions;

    return (
      <div className="">
        {this.handleMainGenre()}
      </div>
    );
  }
}

export default App;
