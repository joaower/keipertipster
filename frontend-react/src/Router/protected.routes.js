import React from 'react'
import { Router } from '@reach/router'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import Dash from '../components/Betting/adminDashboard/Forecast/ForecastDashboard/Dash'

const AsyncDashboard = Loadable({
    loader: () => import('../components/Betting/adminDashboard/Forecast/ForecastDashboard/aDashboard'),
    loading: Loading,
})

const AsyncDashboardPrediction = Loadable({
    loader: () => import('../components/Betting/adminDashboard/Forecast/AdminSingularPrediction'),
    loading: Loading,
})

const AsyncDashboardCustomPrediction = Loadable({
    loader: () => import('../components/Betting/adminDashboard/Forecast/AdminDashboardCustomPrediction'),
    loading: Loading,
})

const ProtectedRoutes = () => (
    <Router>
        <Dash path="spider">
            <AsyncDashboard path="/dashboard" />
            <AsyncDashboardCustomPrediction path="/dashboard/custom" />
            <AsyncDashboardPrediction path="/dashboard/:id" />
        </Dash>
    </Router>
)

export default ProtectedRoutes
