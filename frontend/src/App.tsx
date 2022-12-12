import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import WithAuth from './components/ProtectedRoute/WithAuth';
import NewUser from './components/ProtectedRoute/NewUser';
import Layout from './components/Layout/layout';

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
