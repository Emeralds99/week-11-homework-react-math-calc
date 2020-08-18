import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: 0,
      inputValue2: 0,
      operator: "add",
      outPutValue: 0,
    };
    this.calculate = this.calculate.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }
  calculate() {
    switch (this.state.operator) {
      case "add":
        this.setState({
          outPutValue:
            parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2),
        });
        break;
      case "subtract":
        this.setState({
          outPutValue: this.state.inputValue1 - this.state.inputValue2,
        });
        break;
      case "multiply":
        this.setState({
          outPutValue: this.state.inputValue1 * this.state.inputValue2,
        });
        break;
      case "divide":
        this.setState({
          outPutValue: this.state.inputValue1 / this.state.inputValue2,
        });
        break;
      default:
        this.setState({
          outPutValue: 10,
        });
    }
  }
  handleInput1(e) {
    this.setState({
      inputValue1: e.target.value,
    });
  }
  handleInput2(e) {
    this.setState({
      inputValue2: e.target.value,
    });
  }
  handleOperator() {
    this.setState({
      operator: document.getElementById("operators").value,
    });
  }
  render() {
    let outPutValue = this.state.outPutValue;
    return (
      <div>
        <input
          type="number"
          name="inputValue1"
          onChange={this.handleInput1}
        ></input>
        <select id="operators" name="operators" onChange={this.handleOperator}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          name="inputValue2"
          onChange={this.handleInput2}
        ></input>
        <button type="button" onClick={this.calculate}>
          =
        </button>
        <input name="outputValue" value={outPutValue}></input>
      </div>
    );
  }
}

export default Calculator;
