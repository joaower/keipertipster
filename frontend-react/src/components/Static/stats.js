import React, { useEffect, useState } from 'react'
import StatRequest from '../../requests/stats'
import { Paper } from '@material-ui/core'
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart'
import { Animation } from '@devexpress/dx-react-chart'
import { navigate } from '@reach/router'
import { green } from '@material-ui/core/colors'

function Stats() {
    const [total, setTotal] = useState(0)
    const [green, setGreen] = useState(0)
    useEffect(() => {
        StatRequest.countStats()
            .then(res => {
                setTotal(res.data)
                debugger
            })
            .catch(err => {
                if (err.response !== undefined) {
                    if (err.response.status === 401) {
                        navigate('/login')
                    }
                }
            })

        StatRequest.countGreen()
            .then(res => {
                setGreen(res.data)
            })
            .catch(err => {
                if (err.response !== undefined) {
                    if (err.response.status === 401) {
                        navigate('/login')
                    }
                }
            })
    }, [])
    const data = [
        { betOutcome: 'Green', bets: green },
        { betOutcome: 'Red', bets: total - green },
    ]
    return (
        <Paper>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis max={total + 1} />
                <BarSeries valueField="bets" argumentField="betOutcome" />
                <Title text="Chart with greens and reds" />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default Stats
