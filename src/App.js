import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/home'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
