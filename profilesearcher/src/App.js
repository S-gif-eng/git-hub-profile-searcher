
import './App.css';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-dark bg-dark">
     <a href="/" className="navbar-brand">Github Profile Searcher</a>
      </nav>
      <Api/>
    </div>
  );
}

export default App;
