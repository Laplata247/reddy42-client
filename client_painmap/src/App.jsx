import React from 'react';
import { Route, Routes } from 'react-router-dom'

import './App.css'; // Ensure the CSS path is correct
import * as Pages from "./pages"
import { Header } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path='/landing' element={<Pages.LandingPage />}></Route>
        <Route path='/signup' element={<Pages.SignupPage />}></Route>
        <Route path='/login' element={<Pages.LoginPage />}></Route>
        
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/painmap" element={<Pages.MapPainPage />} />
          <Route path="/chat" element={<Pages.ChatPage />} />
          <Route path="/history">
            <Route index element={<Pages.MedicalHistoryPage />} />
            <Route path=":id" element={<Pages.ConsultationPage />} />
          </Route>
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
