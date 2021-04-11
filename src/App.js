import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';
import Person from './Person';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/personalize">
          <Person/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
