import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined'
import { Typography } from '@material-ui/core'
import { useStylesColor } from '../style'
function PredictedMiniCardBetStatus({ data, type }) {
  const [alignment, setAlignment] = React.useState('waiting')
  const color = useStylesColor()
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  debugger
  return (
    <li>
      <Typography variant="overline" className={color.tGreen} style={{ marginRight: '2rem' }}>{data.match}</Typography>
      {type !== 'Simples' && (
        <ToggleButtonGroup
          value={alignment}
          exclusive
          size="small"
          onChange={handleAlignment}
          aria-label="Estado de aposta"
        >
          <ToggleButton value="green" aria-label="green">
            <DoneAllOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="red" aria-label="red">
            <CloseOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="waiting" aria-label="waiting">
            <HourglassEmptyOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </li>
  )
}

export default PredictedMiniCardBetStatus
