import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import GameCorner from './GameCorner';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/AboutMe">
              <AboutMe/>
            </Route>
            <Route exact path="/Projects">
              <Projects/>
            </Route>
            <Route exact pacth="/GameCorner">
              <GameCorner/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
