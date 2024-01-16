import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConsultationsProvider } from './contexts'
import { GenderProvider } from './contexts'

import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <GenderProvider>
        <ConsultationsProvider>
          <App />
        </ConsultationsProvider>
        </GenderProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
)
    