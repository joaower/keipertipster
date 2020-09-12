import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Animation,
} from '@devexpress/dx-react-chart'

import { navigate } from '@reach/router'
import StatRequest from '../../requests/stats'

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
            navigate('/auth/login')
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
            navigate('/auth/login')
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
