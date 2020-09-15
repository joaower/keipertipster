import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import { navigate } from '@reach/router'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useStylesColor } from '../../components/style'
import { CssTextField } from '../../components/Material-Ui/CssTextField'
import AuthRequest from '../../requests/auth'
import { AuthConsumer } from '../../context/AuthContext'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Vidal's Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Primeiro nome muito pequeno!')
    .max(50, 'Primeiro nome muito longo!')
    .required('Necessario'),
  lastName: Yup.string()
    .min(2, 'Ultimo nome muito pequeno!')
    .max(50, 'Ultimo nome muito longo!')
    .required('Necessario!'),
  username: Yup.string()
    .min(2, 'Username muito pequeno!')
    .max(50, 'Username muito grande!')
    .required('Necessario!'),
  email: Yup.string()
    .email('Email invalido!')
    .required('Necessario!'),
  password: Yup.string().required('Necessario!'),
})

export default function SignUp() {
  const classes = useStyles()
  const color = useStylesColor()
  const [referral_social_media, setReferral] = useState('')
  const [message, setMessage] = useState('')

  function registerUser(values, login) {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
    }
    AuthRequest.register(body)
      .then(res => {
        login(res.data.user.username, res.data.jwt, res.data.user.role.type)
      })
      .catch(err => {
        if (err.response !== undefined) {
          setMessage(err.response.data.message[0].messages[0].message)
        } else {
          setMessage('Servidor em baixo.')
        }
      })
  }
  return (
    <Container component="main" maxWidth="xs">
      <AuthConsumer>
        {({ login }) => (
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              username: '',
              password: '',
              referral_social_media: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                debugger
                registerUser(values, login)
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={`${classes.avatar} ${color.green}`}>
                    <LockOutlinedIcon
                      className={`${color.green} ${color.tOrange}`}
                    />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Registo
                  </Typography>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          value={values.firstName}
                          id="firstName"
                          label="Primeiro nome"
                          name="firstName"
                          autoComplete="fName"
                          onBlur={handleBlur}
                          autoFocus
                          onChange={handleChange}
                        />
                        {errors.firstName && touched.firstName && (
                          <Typography
                            className={color.tOrange}
                            variant="subtitle2"
                          >
                            {errors.firstName}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="lastName"
                          value={values.lastName}
                          label="Ultimo nome"
                          name="lastName"
                          autoComplete="lName"
                          autoFocus
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.lastName && touched.lastName && (
                          <Typography
                            className={color.tOrange}
                            variant="subtitle2"
                          >
                            {errors.lastName}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          onBlur={handleBlur}
                          value={values.email}
                          id="email"
                          label="Enderenço email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                          <Typography
                            className={color.tOrange}
                            variant="subtitle2"
                          >
                            {' '}
                            {errors.email}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          value={values.username}
                          id="username"
                          label="Nome usuario"
                          name="username"
                          onBlur={handleBlur}
                          autoFocus
                          onChange={handleChange}
                        />
                        {errors.username && touched.username && (
                          <Typography
                            className={color.tOrange}
                            variant="subtitle2"
                          >
                            {errors.username}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CssTextField
                          variant="outlined"
                          type="password"
                          margin="normal"
                          required
                          value={values.password}
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                          autoComplete="current-password"
                          autoFocus
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.password && touched.password && (
                          <Typography
                            className={color.tOrange}
                            variant="subtitle2"
                          >
                            {errors.password}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <InputLabel id="referral_social_media-label">
                          Como ouviste falar do website?
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="referral_social_media-label"
                          id="referral_social_media"
                          value={referral_social_media}
                          onBlur={handleBlur}
                          name="referral_social_media"
                          onChange={handleChange}
                          value={values.referral_social_media}
                        >
                          <MenuItem value="Nenhum">Nenhum</MenuItem>
                          <MenuItem value="Amigo">Amigo</MenuItem>
                          <MenuItem value="Instagram">Instagram</MenuItem>
                          <MenuItem value="Facebook">Facebook</MenuItem>
                          <MenuItem value="Twitter">Twitter</MenuItem>
                        </Select>
                        {errors.referral_social_media &&
                          touched.referral_social_media && (
                            <Typography
                              className={color.tOrange}
                              variant="subtitle2"
                            >
                              {errors.referral_social_media}
                            </Typography>
                          )}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={`${classes.submit} ${color.green} ${color.tOrange}`}
                    >
                      Registo
                    </Button>
                  </form>
                  <h1>{message}</h1>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link
                        className={color.tBlack}
                        variant="body2"
                        onClick={() => navigate('/auth/login')}
                      >
                        Já tens conta? Login
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            )}
          </Formik>
        )}
      </AuthConsumer>
    </Container>
  )
}
