import React, {Component} from 'react';
import styles from './App.css';
import CalcBody from './CalcBody/CalcBody';

class App extends Component {
  state = {
    total: "",
    preOperator: "",
    operator: ""
  };

  clearTotal = () => {
    this.setState({ total: "" });
  };

  updateTotal = (num) => {
    this.setState((prevState) => {
      return { total: prevState.total + num }
    });
  };

  addHandler = () => {
    this.setState((prevState) => {
      return {
        preOperator: prevState.total,
        total: "",
        operator: "+"
      };
    });
  };

  minusHandler = () => {
    this.setState((prevState) => {
      return {
        preOperator: prevState.total,
        total: "",
        operator: "-"
      };
    });
  };

  multiplyHandler = () => {
    this.setState((prevState) => {
      return {
        preOperator: prevState.total,
        total: "",
        operator: "x"
      };
    });
  };

  divideHandler = () => {
    this.setState((prevState) => {
      return {
        preOperator: prevState.total,
        total: "",
        operator: "/"
      };
    });
  };

  equalHandler = () => {
    if(this.state.operator === "+") {
      this.setState((prevState) => {
        return {
          total: Number(this.state.preOperator) + Number(prevState.total),
        };
      });
    } else if(this.state.operator === "-") {
      this.setState((prevState) => {
        return {
          total: Number(this.state.preOperator) - Number(prevState.total),
        };
      });
    } else if(this.state.operator === "/") {
      this.setState((prevState) => {
        return {
          total: Number(this.state.preOperator) / Number(prevState.total),
        };
      });
    } else if(this.state.operator === "x") {
      this.setState((prevState) => {
        return {
          total: Number(this.state.preOperator) * Number(prevState.total),
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className={styles.header}>Apple Calculator</h1>
        <CalcBody 
        total={this.state.total} 
        clearTotal={this.clearTotal}
        clicked={this.updateTotal}
        addHandler={this.addHandler}
        minusHandler={this.minusHandler}
        multiplyHandler={this.multiplyHandler}
        divideHandler={this.divideHandler}
        equalHandler={this.equalHandler}/>
      </div>
    );
  }
}

export default App;
