import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { useStylesDrawer } from './style';
import Routes from '../router/routes';
import theme from '../theme';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const classes = useStylesDrawer();

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <main className={classes.content}>
            <Routes />
          </main>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
