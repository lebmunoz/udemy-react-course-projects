class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const someId = "myIdHere";

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// // Challenge
// // Make button "-1" - setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateDois = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={addOne}>+1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateDois, appRoot);
// };

// renderCounterApp();
