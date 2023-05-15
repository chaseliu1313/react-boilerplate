import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { ErrorPage } from './pages/static/Error';
import { CoreContextProvider } from './context';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { GlobalStyles, styledTheme, muiTheme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from './pages/static/404';
import { Home } from './pages';
import { NetworkContextProvider } from './network';
import { NaviBar } from './components';

function App() {
  return (
    <ErrorBoundary fallback={ErrorPage()}>
      <NetworkContextProvider>
        <BrowserRouter>
          <CoreContextProvider>
            <ThemeProvider theme={styledTheme}>
              <MuiThemeProvider theme={muiTheme}>
                <GlobalStyles />
                <NaviBar />

                <Routes>
                  <Route path="*" element={<Page404 />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </MuiThemeProvider>
            </ThemeProvider>
          </CoreContextProvider>
        </BrowserRouter>
      </NetworkContextProvider>
    </ErrorBoundary>
  );
}

export default App;
