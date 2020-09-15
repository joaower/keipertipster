import React from 'react';
import { Router } from '@reach/router';
// import Home from '../components/Betting/FreeBets'
import Stats from '../components/static/stats';
import PredictionPage from '../components/betting/clientPredictionView/PredictionPage';
import Login from '../auth/Login';
import LandingPage from '../components/static/LandingPage';
import Contact from '../components/static/Contact';
// import Service from '../components/Static/Service'
import FreeBets from '../components/betting/FreeBets';
import SignUp from '../auth/Register/SignUp';

const PublicRoutes = () => (
  <Router>
    <LandingPage path="/" />
    <FreeBets path="/apostas" />
    {/* <Service path="/apostas" /> */}
    <Contact path="/contacto" />
    <Stats path="estatisticas" />
    <PredictionPage path="previsao/:id" />
    <Login path="auth/login" />
    <SignUp path="auth/registo" />
  </Router>
);

export default PublicRoutes;
