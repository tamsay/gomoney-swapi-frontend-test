import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import SwapiContextProvider from '../src/context/index';

function App() {

  return (
    <div className="App">
      <SwapiContextProvider>
          <Header />
          <HomePage />
      </SwapiContextProvider>
    </div>
  );
}

export default App;
