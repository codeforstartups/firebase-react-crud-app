import { useState, useEffect } from 'react';

import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // checking if user is authenticated from accessing is_authenticated key from local storage
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
