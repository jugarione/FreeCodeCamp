import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let breakTime = 5;
let sessionTime = 25;
let isOn = false;
let timeInSeconds = 0;
let breaked = false;
let timer = "";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: breakTime,
      sessionLength: sessionTime,
      formatTime: "00:00",
    };
    this.moreBreak = this.moreBreak.bind(this);
    this.lessBreak = this.lessBreak.bind(this);
    this.moreSession = this.moreSession.bind(this);
    this.lessSession = this.lessSession.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.reset = this.reset.bind(this);
    this.audioEnd = this.audioEnd.bind(this);
  }

  moreBreak() {
    if (breakTime >= 60) {
      breakTime = 60;
    } else {
      breakTime++;
    }
    this.setState({ breakLength: breakTime });
    timeInSeconds = sessionTime * 60;
    this.formatTime();
  }

  lessBreak() {
    if (breakTime <= 1) {
      breakTime = 1;
    } else {
      breakTime--;
    }
    this.setState({ breakLength: breakTime });
    timeInSeconds = sessionTime * 60;
    this.formatTime();
  }

  moreSession() {
    if (sessionTime >= 60) {
      sessionTime = 60;
    } else {
      sessionTime++;
    }
    this.setState({ sessionLength: sessionTime });
    timeInSeconds = sessionTime * 60;
    this.formatTime();
  }

  lessSession() {
    if (sessionTime <= 1) {
      sessionTime = 1;
    } else {
      sessionTime--;
    }
    this.setState({ sessionLength: sessionTime });
    timeInSeconds = sessionTime * 60;
    this.formatTime();
  }

  startStopTimer() {
    if (timeInSeconds == 0) {
      timeInSeconds = sessionTime * 60;
      console.log("a");
    }

    if (isOn == true) {
      window.clearTimeout(timer);
      isOn = false;
    } else {
      console.log(true);
      isOn = true;
      this.countDown();
    }
  }

  countDown() {
    if (timeInSeconds == 0) {
      this.audioEnd();
    }
    if (timeInSeconds != 0 && isOn == true) {
      timeInSeconds--;
      timer = window.setTimeout(this.formatTime, 1000);
    } else {
      window.clearTimeout(timer);
      return;
    }
    console.log(timeInSeconds);
  }

  formatTime() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60;
    console.log(mins);
    this.countDown();
    let output =
      mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");

    this.setState({ formatTime: output });
  }

  reset() {
    isOn = false;
    breakTime = 5;
    sessionTime = 25;
    timeInSeconds = sessionTime * 60;
    this.setState({
      breakLength: breakTime,
      sessionLength: sessionTime,
    });
    this.formatTime();
  }

  audioEnd() {}

  render() {
    return (
      <div>
        <p id="main-title">Timer</p>
        <div id="break">
          <p id="break-label">Break Length</p>
          <button id="break-decrement" onClick={this.lessBreak}>
            b-
          </button>
          <p id="break-length">{this.state.breakLength}</p>
          <button id="break-increment" onClick={this.moreBreak}>
            b+
          </button>
        </div>

        <div id="session">
          <p id="session-label">Session Length</p>
          <button id="session-decrement" onClick={this.lessSession}>
            s-
          </button>
          <p id="session-length">{this.state.sessionLength}</p>
          <button id="session-increment" onClick={this.moreSession}>
            s+
          </button>
        </div>

        <div id="timer">
          <p id="timer-label">Session</p>
          <p id="time-left">{this.state.formatTime}</p>
          <button id="start_stop" onClick={this.startStopTimer}>
            >||
          </button>
          <button id="reset" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById("root"));
