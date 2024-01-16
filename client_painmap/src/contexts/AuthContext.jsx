import React, { useReducer, createContext, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const logoutUser = async() => {
  const response = await axios.get('http://localhost:5000/patients')
}


export const AuthReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { user: action.payload }
      case 'LOGOUT':
        logoutUser()  // come back to this if have time
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
