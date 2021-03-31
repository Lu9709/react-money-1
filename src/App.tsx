import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Nav from './components/Nav';
import Money from './views/Money';
import Label from './views/Label';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;


function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/label">
            <Label/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
        <Nav/>
      </Router>
    </AppWrapper>
  );
}


export default App;
