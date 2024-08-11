import React from 'react';
import RoutesPage from './Routes/RoutesPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => (
  <div className='App'>
    <BrowserRouter> {/* Componente que armazena as rotas */}
      <Header />
      <RoutesPage />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
