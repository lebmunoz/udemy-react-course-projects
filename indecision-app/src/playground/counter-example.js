let count = 0;

const someId = "myIdHere";

const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateDois = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateDois, appRoot);
};

renderCounterApp();
