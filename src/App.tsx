import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Label from './views/Label';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import {Tag} from  "./views/Tag"
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;


function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/label">
            <Label/>
          </Route>
          <Route exact path="/label/:id">
            <Tag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
