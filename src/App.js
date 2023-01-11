import logo from './images/kvndr-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
          <a href="https://www.instagram.com/kvndr.io/">
              <img src={logo} className="logo" alt="logo" />
          </a>
          <a className={"link"} href="https://www.instagram.com/kvndr.io/">
              <p>Now playing on Instagram!</p>
          </a>
      </header>
    </div>
  );
}

export default App;
