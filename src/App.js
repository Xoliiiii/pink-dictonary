import logo from './logo.svg';
import './App.css';
import Search from "./components/Search";
import Definition from "./components/Definition"
import Synonyms from './components/Synonyms';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
     <h1>Dictionary App</h1>
     <Search/>
     <Definition/>
     <Synonyms/>
     <Example/>
    </div>
  );
}

export default App;
