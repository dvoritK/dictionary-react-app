import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <main>
            <h1>Dictionary</h1>
            <h5>What word do you want to look up?</h5>
            <Dictionary />
          </main>
        </header>
      </div>
      <footer>
        {" "}
        <small>Coded by Dvorit Karpf-Cogan</small>
      </footer>
    </div>
  );
}

export default App;
