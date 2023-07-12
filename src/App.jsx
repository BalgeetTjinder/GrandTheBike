import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import easyStore from 'Store';
import muiTheme from 'Style/muiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles, StyledSpinner } from 'style/components';

import Footer from 'Components/Footer/Footer.jsx';
import HeaderContainer from 'Components/Header/HeaderContainer.jsx';
import TheftMessageContainer from 'Components/TheftMessage/TheftMessageContainer.jsx';
import UserCreateContainer from 'Components/UserCreate/UserCreateContainer.jsx';
import SignInContainer from 'Components/SignIn/SignInContainer.jsx';
import MainContainer from 'Components/Main/MainContainer.jsx';
import AuthorizedMenuContainer from 'Components/AuthorizedMenu/AuthorizedMenuContainer.jsx';
import OfficersContainer from 'Components/Officers/OfficersContainer.jsx';
import StolenBikesContainer from 'Components/StolenBikes/StolenBikesContainer.jsx';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <HeaderContainer />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center" 
          style={{ minHeight: '87vh' }}
        >
          <Grid item xs={12} className={classes.paper}>
            <React.Suspense fallback={<StyledSpinner />}>
              <Routes>
                <Route path="/registration" element={<UserCreateContainer />} />
                <Route path="/sign-in" element={<SignInContainer />} />
                <Route path="/menu" element={<AuthorizedMenuContainer />} />
                <Route path="/officers" element={<OfficersContainer />} />
                <Route path="/stolen-bikes" element={<StolenBikesContainer />} />
                <Route path="/theft-message" element={<TheftMessageContainer />} />
                <Route path="/" element={<MainContainer />} />
                <Route path="*" element={<MainContainer />} />
              </Routes>
            </React.Suspense>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

function BikeApp() {
  return (
    <BrowserRouter>
      <StoreProvider store={easyStore}>
        <MuiThemeProvider theme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default BikeApp;