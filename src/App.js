import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Classes from "./Components/Classes";
import Home from "./Components/Home";

function App () {
  return (
    <Router>
      <Navbar title="YogaFy" mode={ 'dark' } />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/classes' >
          <Classes />
        </Route>
        <Route exact path='/about' >
          <h1>This is About</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//#region comments
{/* <div className="container"> */ }
{/* </div> */ }

//#endregion
