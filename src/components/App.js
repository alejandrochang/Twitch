import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
  return <div>PageOne
    <Link to="page2">TO page 2</Link>
  </div>
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