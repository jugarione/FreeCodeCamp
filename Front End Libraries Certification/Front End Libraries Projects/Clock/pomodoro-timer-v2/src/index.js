import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let breakTime = 5;
let sessionTime = 25;
let isCounting = false;
let timeInSeconds = 1500;
let formatedTime = "25:00";
let interval = "";
let sessionState = true;
let timerStateVar = "Session";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: breakTime,
      sessionLength: sessionTime,
      formatTime: formatedTime,
      timerState: "Session",
    };
    this.moreBreak = this.moreBreak.bind(this);
    this.lessBreak = this.lessBreak.bind(this);
    this.moreSession = this.moreSession.bind(this);
    this.lessSession = this.lessSession.bind(this);
    this.refreshUi = this.refreshUi.bind(this);
    this.clock = this.clock.bind(this);
    this.startStopClock = this.startStopClock.bind(this);
    this.timeFormatter = this.timeFormatter.bind(this);
    this.reset = this.reset.bind(this);
    this.audioEnd = this.audioEnd.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
  }

  moreBreak() {
    if (breakTime >= 60) {
      breakTime = 60;
    } else {
      breakTime++;
    }
    this.timeFormatter();
  }

  lessBreak() {
    if (breakTime <= 1) {
      breakTime = 1;
    } else {
      breakTime--;
      console.log(breakTime);
    }
    this.timeFormatter();
  }

  moreSession() {
    if (sessionTime >= 60) {
      sessionTime = 60;
    } else {
      sessionTime++;
    }
    timeInSeconds = sessionTime * 60;
    this.timeFormatter();
  }

  lessSession() {
    if (sessionTime <= 1) {
      sessionTime = 1;
    } else {
      sessionTime--;
    }
    timeInSeconds = sessionTime * 60;
    this.timeFormatter();
  }

  refreshUi() {
    this.setState({
      breakLength: breakTime,
      sessionLength: sessionTime,
      formatTime: formatedTime,
      timerState: timerStateVar,
    });
  }

  changeTimer() {
    if (timeInSeconds == 0 && sessionState == false) {
      sessionState = true;
      timeInSeconds = sessionTime * 60 + 1;
      timerStateVar = "Session";
    } else if (timeInSeconds == 0 && sessionState == true) {
      sessionState = false;
      timeInSeconds = breakTime * 60 + 1;
      timerStateVar = "Break";
    }
    this.refreshUi();
    this.audioEnd();
  }

  clock() {
    if (timeInSeconds != 0 && isCounting == true) {
      timeInSeconds--;
      console.log(timeInSeconds);
      this.timeFormatter();
    } else if (timeInSeconds == 0 && isCounting == true) {
      this.changeTimer();
    }
  }

  startStopClock() {
    if (isCounting == false) {
      isCounting = true;
      interval = setInterval(this.clock, 100);
    } else {
      isCounting = false;
      clearInterval(interval);
    }
  }

  timeFormatter() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60;
    formatedTime =
      mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");
    this.refreshUi();
  }

  reset() {
    isCounting = false;
    breakTime = 5;
    sessionTime = 25;
    timeInSeconds = sessionTime * 60;
    isCounting = true;
    sessionState = true;
    timerStateVar = "Session";
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    this.startStopClock();
    this.timeFormatter();
    this.refreshUi();
  }

  audioEnd() {
    this.audioBeep.play();
  }

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
          <p id="timer-label">{this.state.timerState}</p>
          <p id="time-left">{this.state.formatTime}</p>
          <audio
            id="beep"
            rel="preload"
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            ref={(audio) => {
              this.audioBeep = audio;
            }}
          />
          <button id="start_stop" onClick={this.startStopClock}>
            p||
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
