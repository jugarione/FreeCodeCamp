import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const soundButtons = [
  {
    display: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    innerhtml: "Q",
  },
  {
    display: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    innerhtml: "W",
  },
  {
    display: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    innerhtml: "E",
  },
  {
    display: "Dsc_Oh",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    innerhtml: "A",
  },
  {
    display: "Kick_n_Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    innerhtml: "S",
  },
  {
    display: "RP4_KICK_1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    innerhtml: "D",
  },
  {
    display: "Chord_1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    innerhtml: "Z",
  },
  {
    display: "Chord_2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    innerhtml: "X",
  },
  {
    display: "Chord_3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    innerhtml: "C",
  },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "display",
    };

    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
    this.makeSound(e.target.childNodes[0], e.target.id);
  }

  makeSound(src, display) {
    this.play(src);
    this.setState({
      display: display,
    });
  }

  handleKeyDown(e) {
    if (/q|w|e|a|s|d|z|x|c/gi.test(e.key) === true) {
      let keyPress = e.key.toUpperCase();
      let sound = document.getElementById(keyPress);
      let display = document.getElementById(keyPress).parentElement.id;
      this.makeSound(sound, display);
    }
    return;
  }

  play(elem) {
    let audio = elem;
    try {
      audio.play();
    } catch {
      console.log("tecla no valida");
    }
  }

  render() {
    const pads = soundButtons.map((item) => {
      return (
        <button
          id={item.display}
          className="drum-pad"
          key={item.innerhtml}
          onClick={this.handleClick}
        >
          <audio
            rel="preload"
            id={item.innerhtml}
            className="clip"
            src={item.src}
          />
          {item.innerhtml}
        </button>
      );
    });
    return (
      <div id="drum-machine" className="h-100" onKeyPress={this.handleKeyDown}>
        <p id="display">{this.state.display}</p>
        <div>{pads}</div>
      </div>
    );
  }
}

ReactDom.render(<DrumMachine />, document.getElementById("root"));
