import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConsultationsProvider } from './components/contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConsultationsProvider>
        <App />
      </ConsultationsProvider>
    </Router>
  </React.StrictMode>,
)
