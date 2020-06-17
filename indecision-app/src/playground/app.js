const obj = {
  name: "Vikram",
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind({ name: "Luis" });

console.log(getName());

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = [
      "Thing one",
      "Thing two",
      "Thing three",
      "Adasdads",
      "Dadsad"
    ];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here (class, static text)
// Setup options prop for Options component
// Render the length of the array

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}

// Option -> Option component here

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

// AddOption -> AddOption component here

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.addOption.value.trim();

    if (option) {
      alert(option);
      // this.options.push(option);
      // e.target.elements.option.value = "";
    }
    // this.render();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="addOption" id="add" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
