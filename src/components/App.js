import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const pageOne = () => {
  return <div>PageOne</div>
}

const pageTwo = () => {
  return <div>pageTwo</div>
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/page2" component={pageTwo} />
      </div>
    </BrowserRouter>
  );
}

export default App;