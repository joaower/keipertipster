import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import { useStylesDrawer } from './components/style'
import Routes from '@/router/routes'
import theme from './theme'

function App() {
  const classes = useStylesDrawer()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <main className={classes.content}>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  )
}

export default App
