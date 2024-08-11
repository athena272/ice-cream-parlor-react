import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import FlavorsPage from '../Pages/FlavorsPage/FlavorsPage';
import AboutPage from '../Pages/AboutPage/AboutPage';

const RoutesPage = () => (
    <Routes> {/* Seleciona apenas um componente para exibir na tela baseado na url */}
        <Route path='/' element={<HomePage />} /> {/* Vomponente que associa a rota ao componente */}
        <Route path='/flavors' element={<FlavorsPage />} />
        <Route path='/about' element={<AboutPage />} />
    </Routes>
);

export default RoutesPage;