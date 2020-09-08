import React from 'react'
import {
    Card,
    CardContent,
    Button,
} from '@material-ui/core'
import { Link } from '@reach/router'
import { useStylesCard } from '../style'
import Utility from '../../util/utility'

const CustomCard = ({ sportValue }) => {
    const classes = useStylesCard()
    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardFather}>
                <div className={classes.displayTournament}>
                    {Utility.getSportValue(sportValue)}
                </div>
                <div className={classes.displayCompetitors}>
                     <p>
                        Custom predict
                    </p> 
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
                            to={`/spider/dashboard/custom`}
                            state={{
                                sportValue,
                            }}
                        >
                            <Button>Create</Button>
                        </Link>
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default CustomCard