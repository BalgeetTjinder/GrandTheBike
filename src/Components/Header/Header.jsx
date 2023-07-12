import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "Img/logo.svg";
import { NavLink } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { StyledButton } from 'style/components'

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
root: {
    flexGrow: 1,
    },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  toolbarMod: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  link: {

  },
  active: {
      color: theme.palette.primary.main
  }
}));

const Header = ({ isAuth, signOut }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  
  const theme = useTheme()

  const classes = useStyles();

  const drawer = (
      <div>
        {isAuth && (
          <>
              <ListItem button key='/theft-message'>
                  <NavLink
                      to="/theft-message"
                      className={classes.link}
                      activeClassName={classes.active}
                      onClick={handleDrawerToggle}
                  >
                      Новый случай
                  </NavLink>
              </ListItem>
              <ListItem button key='/theft-message'>
                  <NavLink
                      to="/stolen-bikes"
                      className={classes.link}
                      activeClassName={classes.active}
                      onClick={handleDrawerToggle}
                  >
                      Украденные велосипеды
                  </NavLink>
              </ListItem>
              <ListItem button key='/theft-message'>
                  <NavLink
                      to="/officers"
                      className={classes.link}
                      activeClassName={classes.active}
                      onClick={handleDrawerToggle}
                  >
                      Ответственные сотрудники
                  </NavLink>
              </ListItem>
          </>
        )}
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbarMod}>
          <div>
          {isAuth &&
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          }
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              className={classes.menuButton}
            >
              <NavLink to="/">
                  <img src={logo} alt="logo" />
              </NavLink>
            </IconButton>
          </div>
            <div>
              {!isAuth && (
              <>
                <StyledButton>
                  <NavLink to="/sign-in">Войти</NavLink>
                </StyledButton>
                <StyledButton>
                  <NavLink to="/registration">Регистрация</NavLink>
                </StyledButton>
              </>
              )}
              {isAuth && (
                  <StyledButton onClick={() => signOut()}>
                      Выйти
                  </StyledButton>
              )}
          </div>
          </Toolbar>
        </AppBar>
        
        <nav className={classes.drawer}>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                <CloseIcon/>
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          <div className={classes.toolbar} />
        </div>
      </div>
    );
}

export default Header;