import React from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import Dash from '../components/betting/adminDashboard/Forecast/ForecastDashboard/Dash';

const AsyncDashboard = Loadable({
  loader: () => import('../components/betting/adminDashboard/Forecast/ForecastDashboard/aDashboard'),
  loading: Loading,
});

const AsyncDashboardCustomPrediction = Loadable({
  loader: () => import('../components/betting/adminDashboard/Forecast/CustomPrediction'),
  loading: Loading,
});

const ProtectedRoutes = () => (
  <Router>
    <Dash path="spider">
      <AsyncDashboard path="/dashboard" />
      <AsyncDashboardCustomPrediction path="/dashboard/custom" />
    </Dash>
  </Router>
);

export default ProtectedRoutes;
