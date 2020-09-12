import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { navigate } from '@reach/router'
import { useStylesColor } from '../../components/style'
import InboxIcon from '@material-ui/icons/Inbox'
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'
import imageURL from './logo.jpeg'

const Footer = () => {
  const color = useStylesColor()
  return (
    <footer
      className={color.grey}
      style={{
        paddingTop: '7rem',
        paddingBottom: '2rem',
        textAlign: 'center',
        borderTop: '5px solid #013328!important',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm>
          <Typography gutterBottom variant="h6" className={color.tGreen}>
            Sobre nós
          </Typography>
          <ul style={{ listStyleType: 'none', padding: '0.5rem' }}>
            <li>
              <Divider />

              <Typography gutterBottom variant="subtitle1">
                Tens alguma questão?
              </Typography>
              <Typography gutterBottom variant="body2">
                <InboxIcon style={{ marginRight: '1rem' }} fontSize="small" />{' '}
                bobapostas@gmail.com
              </Typography>
            </li>
            <Divider />
            <li>
              <Typography gutterBottom variant="body1">
                Horas de apostas
              </Typography>
              <Typography gutterBottom variant="body2">
                <QueryBuilderOutlinedIcon
                  style={{ marginRight: '1rem' }}
                  fontSize="small"
                />{' '}
                15-17h
              </Typography>
            </li>
          </ul>
        </Grid>
        {/* <Grid item xs={12} sm>
          <Typography variant="h6" className={color.tGreen}>
            Novos tweets
          </Typography>
        </Grid> */}
        <Grid item xs={12} sm>
          <Typography variant="h6" className={color.tGreen}>
            Codigo de etica
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dicta accusantium tempore dolore id soluta accusamus, harum modi rem
            fuga, fugit itaque, culpa a animi ipsa natus perferendis laboriosam
            consequuntur!Tempore, provident porro magni harum deserunt dolorum
            doloremque a! Nulla mollitia error ea dolorem nihil dolore atque
            deleniti, tempore praesentium a ipsa culpa, consectetur ducimus nam
            temporibus quod et perspiciatis!
          </Typography>
        </Grid>
        <Grid item xs={12} sm justify="center">
          <Typography variant="h6" className={color.tGreen}>
            Conecta-te connosco
          </Typography>

          <p></p>
          <TwitterIcon
            className={color.tBlack}
            style={{ cursor: 'pointer', marginRight: '1rem', fontSize: '2rem' }}
            size="large"
          />
          <FacebookIcon
            className={color.tBlack}
            onClick={() =>
              navigate(
                'https://www.facebook.com/keipertipster-106156397668326/',
              )
            }
            style={{ cursor: 'pointer', marginRight: '1rem', fontSize: '2rem' }}
            size="large"
          />
          <InstagramIcon
            className={color.tBlack}
            onClick={() => navigate('https://www.instagram.com/keipertipster/')}
            style={{ cursor: 'pointer', marginRight: '1rem', fontSize: '2rem' }}
            size="large"
          />
          <br />
          <Grid style={{marginTop: '3rem'}} container justify="center">
            <Grid item xs justify="center" style={{width: '5rem', height: '5rem'}}>
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  src={imageURL}
                />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
