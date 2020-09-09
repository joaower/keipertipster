import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    flex: 1,
  },
}))

export default function Selector({
  value,
  handleChange,
  type,
  valueArray,
  helpText,
}) {
  const classes = useStyles()
  return (
    <div className={classes.flex}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {type}
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={value}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          {valueArray.map(({ id, desc }) => (
            <MenuItem value={id}>{desc}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{helpText}</FormHelperText>
      </FormControl>
    </div>
  )
}
