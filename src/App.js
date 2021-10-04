import React, { useEffect } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

export default function App() {

  useEffect(() => {
    document.title = "Spacetagram";
  }, []);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </GlobalProvider>
  );
}