import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth';
import WithAuth from './components/ProtectedRoute/WithAuth';
import NewUser from './components/ProtectedRoute/NewUser';
import Layout from './components/Layout/layout';


const Home = React.lazy(() => import('./pages/Home'));
const Dependents = React.lazy(() => import('./pages/Dependents'));
const Events = React.lazy(() => import('./pages/Events'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<></>}>
          <Routes>
            <Route element={<WithAuth />}>
              <Route element={<Layout />}>
                <Route element={<Profile />} path="/complete-profile" />
                <Route element={<NewUser />}>
                  <Route element={<Events />} path="/" />
                  <Route element={<Dependents />} path="/dependents" />
                </Route>
              </Route>
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
