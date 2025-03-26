// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import DetailsPage from './pages/DetailsPage';
import { useEffect } from 'react';

// In App.js, update the ProtectedRoute component:

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, loading, navigate]);
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  return isAuthenticated ? children : null;
};


function AppContent() {
  return (
    <Router basename="/algo-root-frontend-assignment">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route 
          path="/details" 
          element={
            <ProtectedRoute>
              <DetailsPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
