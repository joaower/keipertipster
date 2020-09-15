import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import { Link } from '@reach/router';
import { useStylesCard } from '../style';

const comparator = (prevProps, nextProps) => {
  // if(prevProps.sportValue!==nextProps.sportValue) return false
  if (
    prevProps.match.id !== nextProps.match.id
    && prevProps.sportValue === nextProps.sportValue
  ) { return false; }
  /* if (prevProps.isLoggedIn !== nextProps.setProps.isLoggedIn) {
        return true
    }
    if (prevProps.route !== nextProps.setProps.route) {
        return true
    }
    if (prevProps.anchorText !== nextProps.setProps.anchorText) {
        return true
    } */
  return true;
};

const GameCard = React.memo(({ match, sportValue }) => {
  const classes = useStylesCard();
  console.log(match);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardFather}>
        <div className={classes.displayTournament}>
          <p>
            {sportValue === '3' && match.competition.name}
            {sportValue === '2' && match.league.name}
          </p>
          <p>
            {sportValue === '3' && match.competition.area.code}
            {sportValue === '2' && match.league.type}
          </p>
          {/* <p>{tournament}</p> */}
        </div>
        {/* {competitors.map(competitors => (
                    <div className={classes.displayCompetitors}>
                        <p>Desportista</p>
                        <p>{competitors.name}</p>
                    </div>
                ))} */}
        <div className={classes.displayCompetitors}>
          <p>
            {sportValue === '3' && match.homeTeam && match.homeTeam.name}
            {sportValue === '2' && match.teams.home.name}
          </p>
        </div>
        <div className={classes.displayCompetitors}>
          <p>
            {sportValue === '3' && match.awayTeam && match.awayTeam.name}
            {sportValue === '2' && match.teams.away.name}
          </p>
        </div>
        <div className={classes.buttons}>
          {sportValue === '3' && (
            <Link
              to={`/spider/dashboard/${match.id}`}
              state={{
                competition: match.competition,
                homeTeam: match.homeTeam,
                awayTeam: match.awayTeam,
                sportValue,
              }}
            >
              <Button>Edit</Button>
            </Link>
          )}
          {sportValue === '2' && (
            <Link
              to={`/spider/dashboard/${match.id}`}
              state={{
                competition: match.league,
                homeTeam: match.teams.home,
                awayTeam: match.teams.away,
                sportValue,
              }}
            >
              <Button>Edit</Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}, comparator);

GameCard.propTypes = {
  match: ''
};

export default GameCard;
