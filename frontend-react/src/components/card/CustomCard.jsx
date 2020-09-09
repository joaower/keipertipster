import React from "react";
import { Card, CardContent, Button, Typography } from "@material-ui/core";
import { Link } from "@reach/router";
import { useStylesCard, useStylesColor } from "../style";
import Utility from "../../util/utility";

const CustomCard = ({ sportValue }) => {
  const classes = useStylesCard();
  const color = useStylesColor()
  return (
    <Card className={`${classes.root} ${color.green}`} style={{padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
      <CardContent className={classes.cardFather}>
        <div className={classes.displayTournament}>
          {/* {Utility.getSportValue(sportValue)} */}
          <Typography className={color.tGrey}>New pick</Typography>
        </div>
        <div className={classes.displayCompetitors}>
          <p></p>
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
            <Button className={color.tOrange}>Create</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
