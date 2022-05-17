import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <main>
            <h1>Dictionary</h1>
            <Dictionary />
          </main>
        </header>
      </div>
      <footer>
        <a
          href="https://github.com/dvoritK/dictionary-react-app.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          open-source code
        </a>{" "}
        <span className="coded-by">by Dvorit Karpf-Cogan and </span>
        <a
          href="https://fancy-dasik-f5d206.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="netlify-link"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
