import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from '@reach/router'
import { useStylesCard, useStylesColor } from '../style'

const CustomCard = ({ sportValue }) => {
  const classes = useStylesCard()
  const color = useStylesColor()
  return (
    <Card
      className={`${classes.root} ${color.green}`}
      style={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }}
    >
      <CardContent className={classes.cardFather}>
        <div className={classes.displayTournament}>
          {/* {Utility.getSportValue(sportValue)} */}
          <Typography variant="overline" className={color.tGrey}>
            Nova aposta
          </Typography>
        </div>
        <div className={classes.displayCompetitors}>
          <p />
        </div>
        <div className={classes.displayCompetitors}>
          {/* <p>
                        {sportValue === '3' &&
                            match.awayTeam &&
                            match.awayTeam.name}
                        {sportValue === '2' && match.teams.away.name}
                    </p> */}
        </div>
        <div className={classes.buttons}>
          <Link
            to="/spider/dashboard/custom"
            state={{
              sportValue,
            }}
          >
            <Typography className={color.tOrange}>Create</Typography>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomCard
