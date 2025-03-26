// src/context/AuthContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

useEffect(() => {
  try {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(user) });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
    localStorage.removeItem('user'); // Remove invalid data
    dispatch({ type: 'SET_LOADING', payload: false });
  }
}, []);


  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };


const deleteAccount = () => {
  if (state.user) {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Filter out the current user
    const updatedUsers = users.filter(u => u.email !== state.user.email);
    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    // Remove the current user session
    localStorage.removeItem('user');
    // Update state
    dispatch({ type: 'LOGOUT' });
  }
};


  return (
    <AuthContext.Provider value={{ ...state, login, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
