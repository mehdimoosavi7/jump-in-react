// import logo from "./logo.svg";
import "./App.css";
import jump from "jump.js";

const jumpTop = () => {
  jump(".main");
};
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    jump(".target", {
      duration: 1000,
      offset: 0,
      callback: undefined,
      a11y: false,
    });
  }
});

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="main" style={{ height: "200vh" }}>
        <div style={{ height: "100vh" }}>Main</div>
        <div className="target" style={{ height: "100vh" }}>Target
          <button onClick={jumpTop}>go Top</button>
        </div>
      </div>
    </div>
  );
}

export default App;
