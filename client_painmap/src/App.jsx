import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import * as Pages from './pages';
import { Layout } from './components';
import { Header } from './components';
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const location = useLocation();

  const { user } = useAuthContext();

  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }

    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    }
    else {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.defer = true;
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          if (typeof window.google.translate.TranslateElement === 'function') {
            googleTranslateElementInit();
          } else {
            console.error('Google Translate API script loaded, but TranslateElement constructor is not available.');
          }
        }, 50);
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  const showHeader = location.pathname !== ''; // Adjust this condition as needed

  return (
    <>
    <Routes>
      <Route path="/landing" element={<Pages.LandingPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.HomePage />} />

        <Route path="/select-gender" element={user ? <Pages.GenderSelection /> : < Pages.HomePage />} />
        <Route path="/painmap" element={user ? <Pages.MapPainPage /> : < Pages.HomePage />} />

        <Route path="/chat" element={user ? <Pages.ChatPage /> : < Pages.HomePage />} />
        <Route path="/history">
          <Route index element={user ? <Pages.MedicalHistoryPage /> : < Pages.HomePage />} />
          <Route path=":id" element={user ? <Pages.ConsultationPage /> : < Pages.HomePage />} />
        </Route>
      </Route>

      <Route path="/signup" element={<Pages.SignupPage />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
    </>
  );
}

export default App;
