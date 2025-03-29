import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import EditUserPage from './pages/EditUserPage';

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(sessionStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/users" replace /> : <LoginPage setToken={setToken} />} />
        <Route path="/users" element={token ? <UsersPage /> : <Navigate to="/" replace />} />
        <Route path="/edit/:id" element={token ? <EditUserPage /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
