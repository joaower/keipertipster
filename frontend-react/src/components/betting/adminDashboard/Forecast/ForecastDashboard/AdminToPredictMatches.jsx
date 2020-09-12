import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import CustomCard from '../../../../card/CustomCard'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@material-ui/core/Tabs'
import { useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import { useStylesColor } from '../../../../style'
const AdminToPredictMatches = ({ classes }) => {
  const [value, setValue] = React.useState(0)
  const color = useStylesColor()
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  const theme = useTheme()
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
  function a11yProps(index: any) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    }
  }
  return (
    <Grid item xs={12} md={6}>
      <CustomCard />
      <Paper className={classes.paper1}>
        <Typography
          variant="h5"
          style={{ marginBottom: '1rem' }}
          className={classes.title}
        >
          Jogos por avaliar apresentados aqui
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{ style: { background: 'red' } }}
        >
          <Tab className={color.tGreen} label="Basquetebol" {...a11yProps(0)} />
          <Tab label="Tenis" {...a11yProps(1)} />
          <Tab label="Futebol" {...a11yProps(2)} />
          <Tab label="Basebol" {...a11yProps(3)} />
          <Tab label="Hoquei" {...a11yProps(4)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            Para estriar pó meu puto Vidal.
          </TabPanel>
          <TabPanel value={value} index={1}>
            Para estriar pó meu puto Vidal.
          </TabPanel>
          <TabPanel value={value} index={2}>
            Para estriar pó meu puto Vidal.
          </TabPanel>
          <TabPanel value={value} index={3}>
            Para estriar pó meu puto Vidal.
          </TabPanel>
          <TabPanel value={value} index={4}>
            Para estriar pó meu puto Vidal.
          </TabPanel>
        </SwipeableViews>
        {/* 
                {data && data.map(match => (
                    <GameCard
                        key={match.id}
                        match={match}
                        sportValue={sportValue}
                    />
                ))} */}
      </Paper>
    </Grid>
  )
}

export default AdminToPredictMatches
