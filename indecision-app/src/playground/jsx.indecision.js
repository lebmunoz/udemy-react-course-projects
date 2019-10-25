console.log("App running!");

const app = {
  title: "Este título",
  subtitle: "Este textinho aqui embaixo para descrever o nosso texto do app",
  options: []
};

function getOptions(options) {
  if (options.length > 0) {
    return (
      <div>
        <h4>Here are your options:</h4>
        <ol>
          {options.map(option => (
            <li key={option}>{option}</li>
          ))}
        </ol>
        <button onClick={removeAll}>Remove all</button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>No options</h4>
        <button disabled>Remove all</button>
      </div>
    );
  }
}

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      {app.options && getOptions(app.options)}

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
