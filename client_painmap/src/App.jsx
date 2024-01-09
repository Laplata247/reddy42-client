import React from 'react';
import { Route, Routes } from 'react-router-dom'

import './App.css'; // Ensure the CSS path is correct
import * as Pages from "./pages"
import { Header } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/painmap" element={<Pages.MapPainPage />} />
          <Route path="/chat" element={<Pages.ChatPage />} />
          <Route path="/history" element={<Pages.MedicalHistoryPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
