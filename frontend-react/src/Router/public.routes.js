import React from 'react'
import { Router } from '@reach/router'
import Home from '../components/Betting/FreeBets'
import Stats from '../components/Static/stats'
import PredictionPage from '../components/Betting/clientPredictionView/PredictionPage'
import Login from '../components/login'
import Landing from '../components/Static/Landing'
import Contact from '../components/Static/Contact'
import Service from '../components/Static/Service'
import FreeBets from '../components/Betting/FreeBets'

const PublicRoutes = () => (
  <Router>
    <Landing path="/" />
    <FreeBets path="/apostas" />
    {/* <Service path="/apostas" /> */}
    <Contact path="/contacto" />
    <Stats path="estatisticas" />
    <PredictionPage path="previsao/:id" />
    <Login path="login" />
  </Router>
)

export default PublicRoutes
