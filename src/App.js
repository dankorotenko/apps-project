// import logo from './logo.svg';
import './components/FontAwesomeIcons/';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Timer from './components/Timer';
import Quiz from './components/Quiz';
import Notes from './components/Notes';
import Todo from './components/Todo';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home title="Homepage" />
            </Route>
            <Route path="/timer">
              <Timer title="Timer" />
            </Route>
            <Route path="/quiz">
              <Quiz title="Quiz" />
            </Route>
            <Route path="/notes">
              <Notes title="Notes" />
            </Route>
            <Route path="/passgen">
              <PasswordGenerator title="Password Generator" />
            </Route>

            <Route path="/todo">
              <Todo title="ToDo" />
            </Route>

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
