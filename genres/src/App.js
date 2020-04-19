import React from 'react';
import logo from './logo.svg';
import genreJson from './genres.json'

import './App.css';

function App() {

  return (
    <div className="">
      <header className="">
        {/* <h4>Want to Find some new Genres?</h4> */}
        <Main />

      </header>
    </div>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // genreOptions: genreJson.Genre,
      genreBroken: [this.handleMainGenre()]
    }
  }
  handleMainGenre() {
    let genresList = [];
    let prefixList = [];
    let suffixList = [];
    let allGenres = [];
    for (let i = 0; i < genreJson.genres.length; i++) {
      if (genreJson.genres[i].standAlone) {
        genresList.push(genreJson.genres[i])
      }
      if (genreJson.genres[i].prefix) {
        prefixList.push(genreJson.genres[i])
      }
      if (genreJson.genres[i].suffix) {
        suffixList.push(genreJson.genres[i])
      }
    }
    allGenres.push(genresList);
    allGenres.push(prefixList);
    allGenres.push(suffixList);
    return allGenres;
  }

  render() {

    return (
      <div>
        <Genre genreOptions={this.state.genreBroken} />
        {/* <div>{this.handleMainGenre()}</div> */}
      </div>
    );
  }

}
class Genre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allGenres: this.props.genreOptions[0],
      current: "Rock",
      button: true

    }
  }


  handleSwitchClick = () => {
    this.randomBaseGenre();
    this.render();
  }

  randomBaseGenre() {
    let num = Math.floor(Math.random() * this.state.allGenres[0].length)
    let numPre = Math.floor(Math.random() * this.state.allGenres[1].length)
    let numSuf = Math.floor(Math.random() * this.state.allGenres[2].length)

    let number = Math.floor(Math.random() * 9)
    console.log(num, numPre, numSuf, number);
    console.log(this.state.allGenres[1].length - (numPre + 1) + " " + this.state.allGenres[0][num].name + " " + this.state.allGenres[2][numSuf].name
    )
    if (number === 0) {
      this.setState({ current: this.state.allGenres[0][num].name });
    } else if (number === 1 || number === 2) {
      this.setState({ current: this.state.allGenres[1][numPre].name + " " + this.state.allGenres[0][num].name });

    } else if (number === 3 || number === 4 || number === 5) {
      // console.log(this.state.allGenres[0][num].name + " " + this.state.allGenres[2][numSuf].name);
      this.setState({ current: this.state.allGenres[0][num].name + " " + this.state.allGenres[2][numSuf].name });

    } else if (number === 6 || number === 7) {
      this.setState({ current: this.state.allGenres[1][numPre].name + " " + this.state.allGenres[0][num].name + " " + this.state.allGenres[2][numSuf].name });

    } else if (number === 8) {
      this.setState({
        current: this.state.allGenres[1][numPre].name + " " + this.state.allGenres[1][this.state.allGenres[1].length - (numPre + 1)].name + " " +
          this.state.allGenres[0][num].name + " " + this.state.allGenres[2][numSuf].name
      });
    }
  }
  render() {

    return (
      <div className="body">
        {/* <div> */}
          <h1 className="head">
            {this.state.current}
          </h1>
          <div className="buttonBig">
            <a className="mainButton" onClick={this.handleSwitchClick} >Generate Random Genre</a>
          </div>
        </div>

      // </div>
    );
  }
}

export default App;
