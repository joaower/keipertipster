import React from 'react';
import {
  Paper, Typography, Grid, makeStyles, Button
} from '@material-ui/core';
import Footer from '../../shared/components/Footer';
import { CssTextField } from '../Material-Ui/CssTextField';
import { useStylesColor } from '../style';

const useStyles = makeStyles(theme => ({
  contSection: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '5rem',

      paddingRight: '10rem',
      paddingLeft: '10rem',
    },
  },
  formContainer: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      // paddingLeft: '10rem',
      // paddingRight: '10rem',
    },
  },
  formItem: {
    textAlign: 'center',
    padding: '0.3rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.5rem',
    },
  },
  formButton: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',

    [theme.breakpoints.up('md')]: {},
  },
}));

const Contact = () => {
  const classes = useStyles();
  const color = useStylesColor();
  return (
    <>
      <section className={classes.contSection}>
        <Paper className={classes.formContainer} elevation={3}>
          <Typography variant="h4">
            Utilize este formulario para me contatar
          </Typography>

          <form>
            <Grid
              style={{ paddingTop: '5rem' }}
              container
              direction="column"
              justify="space-around"
            >
              <Grid container direction="row">
                <Grid
                  className={classes.formItem}
                  item
                  xs={12}
                  sm={6}
                >
                  <CssTextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Primeiro nome"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  className={classes.formItem}
                  item
                  xs={12}
                  sm={6}
                >
                  <CssTextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Ultimo nome"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid className={classes.formItem} item xs={12}>
                <CssTextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.formItem} item xs={12}>
                <CssTextField
                  fullWidth
                  id="outlined-number"
                  label="Number"
                  required
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.formItem} item xs={12}>
                <CssTextField
                  fullWidth
                  required
                  id="outlined-multiline-static"
                  label="Mensagem"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.formButton} item xs={12}>
                <Button
                  className={`${color.tOrange} ${color.green}`}
                  style={{
                    color: '#CC8B65',
                    background: '#013328',
                  }}
                  variant="outlined"
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
