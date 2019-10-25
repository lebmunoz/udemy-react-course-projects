console.log("Visibility app running!");

//  !!! = corretions;

const appData = {
  header: "Visibility toggle",
  details: "This hidden details are now visible"
};

const toggleButton = () => {
  // let visibleStatus = document.getElementById("toHide");
  visibility = !visibility;
  // if (visibleStatus.style.visibility === "hidden") {
  //   visibleStatus.style.visibility = "visible";
  // } else {
  //   visibleStatus.style.visibility = "hidden";
  // }
  render();
};

// let buttonText = "Hide details";
let visibility = false;

const appRoot = document.getElementById("app");

// <button onClick={toggleButton}>{buttonText}</button>
// <p id="toHide">{appData.details}</p>
const render = () => {
  const template = (
    <div>
      <h1>{appData.header}</h1>
      <button onClick={toggleButton}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>{appData.details}</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
