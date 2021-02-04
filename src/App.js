import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import DisplayLibrary from './components/DisplayLibrary';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/library" component={DisplayLibrary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
