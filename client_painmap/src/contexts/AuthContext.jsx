import React, { useReducer, createContext, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { user: action.payload }
      case 'LOGOUT':
        fetch('http://localhost:5000/logout', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        })

        return { user: null }
      default:
        return state
    }
  }

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, { 
      user: null
    })

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
  
      if (user) {
        dispatch({ type: 'LOGIN', payload: user }) 
      }
    }, [])

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
          {children}
        </AuthContext.Provider>
      );
    };
