import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let formula = "0";
let number = "";
let operation = [];
let result = 0;

class JsCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: formula,
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.numbers = this.numbers.bind(this);
    this.refreshDisplay = this.refreshDisplay.bind(this);
    this.resultator = this.resultator.bind(this);
    this.operator = this.operator.bind(this);
  }
  // clear all the variables and refresh display
  clearDisplay() {
    result = 0;
    number = "";
    formula = result.toString();
    operation = [];
    this.refreshDisplay();
  }
  refreshDisplay() {
    this.setState({
      display: formula,
    });
  }

  cleanArray(element, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == element) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  operator(e) {
    let digit = e.target.innerHTML;
    operation.push(number);
    operation.push(digit);
    this.cleanArray("", operation);
    console.log(operation);
    // if there's 3 operator's delete all and push the last one
    if (
      /-|\+|\*|\//.test(operation[operation.length - 3]) &
      /-|\+|\*|\//.test(operation[operation.length - 2])
    ) {
      console.log("a limpiar");
      operation.pop();
      operation.pop();
      operation.push(digit);
    }
    // if theres 2 operator it delete the first one exept -
    if (
      (/-|\+|\*|\//.test(formula[formula.length - 1]) == true) &
      (digit != "-")
    ) {
      operation.pop();
      operation.pop();
      operation.push(digit);
    } else if ((digit == "-") & (formula[formula.length - 2] == "-")) {
      operation.pop();
      operation.pop();
    }

    number = "";
    formula = operation.join("");
    console.log(operation);
    this.refreshDisplay();
  }
  numbers(e) {
    let digit = e.target.innerHTML;
    if (formula == 0) {
      formula = digit;
      number = digit;
    } else if ((/\./.test(number) == true) & (digit == ".")) {
    } else if ((number[0] == 0) & (digit != ".") & (number[1] != ".")) {
      number = digit;
      formula = formula.slice(0, -1);
      formula = formula + digit;
    } else if ((digit == ".") & (number[number.length - 1] == ".")) {
    } else {
      formula = formula + digit;
      number = number + digit;
    }
    console.log(operation);
    this.refreshDisplay();
  }
  // there's a bug, if i not imput the lst number it crashes!
  resultator() {
    operation.push(number);
    operation = operation.join("");
    result = eval(operation);
    if (operation.indexOf("/")) {
    }
    this.setState({
      display: result,
    });
    console.log(formula);

    number = "";
    formula = result;

    operation = [result.toString()];
    console.log(operation);
  }

  render() {
    return (
      <div id="center">
        <div id="calculator">
          <p id="display">{this.state.display}</p>
          <button id="clear" onClick={this.clearDisplay}>
            AC
          </button>
          <button onClick={this.operator} id="divide">
            /
          </button>
          <button onClick={this.operator} id="multiply">
            *
          </button>
          <button onClick={this.numbers} id="seven">
            7
          </button>
          <button onClick={this.numbers} id="eight">
            8
          </button>
          <button onClick={this.numbers} id="nine">
            9
          </button>
          <button onClick={this.operator} id="subtract">
            -
          </button>
          <button onClick={this.numbers} id="four">
            4
          </button>
          <button onClick={this.numbers} id="five">
            5
          </button>
          <button onClick={this.numbers} id="six">
            6
          </button>
          <button onClick={this.operator} id="add">
            +
          </button>
          <button onClick={this.numbers} id="one">
            1
          </button>
          <button onClick={this.numbers} id="two">
            2
          </button>
          <button onClick={this.numbers} id="three">
            3
          </button>
          <button onClick={this.resultator} id="equals">
            =
          </button>
          <button onClick={this.numbers} id="zero">
            0
          </button>
          <button onClick={this.numbers} id="decimal">
            .
          </button>
        </div>
      </div>
    );
  }
}

ReactDom.render(<JsCalculator />, document.getElementById("root"));
