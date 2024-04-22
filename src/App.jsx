import React, { useState, useEffect } from 'react';

import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';

import { collection, addDoc } from "firebase/firestore"; 

const App = () => {

  console.log("env", import.meta.env.VITE_APIKEY)
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
