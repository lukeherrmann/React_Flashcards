import React, { Fragment, } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Container, } from 'semantic-ui-react';


const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/main" component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
