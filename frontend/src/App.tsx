import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import WithAuth from './components/ProtectedRoute/WithAuth';


const Home = React.lazy(() => import('./pages/Home'));
const Events = React.lazy(() => import('./pages/Events'));
const Dependents = React.lazy(() => import('./pages/Dependents'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<></>}>
          <Switch>
            <WithAuth exact path="/home">
              <Home />
            </WithAuth>
            <WithAuth exact path="/">
              <Events />
            </WithAuth>
            <WithAuth exact path="/dependents">
              <Dependents />
            </WithAuth>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
