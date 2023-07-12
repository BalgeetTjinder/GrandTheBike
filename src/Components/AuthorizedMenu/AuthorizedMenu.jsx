import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { StyledButton } from 'style/components'
import stolenBike1 from 'Img/stolenBike1.jpg'
import stolenBike2 from 'Img/stolenBike2.jpg'
import stolenBike3 from 'Img/stolenBike3.jpg'

const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },

  cardRoot: {
    maxWidth: 450,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 345,
    },
  },

  media: {
    height: 220,
    [theme.breakpoints.up('sm')]: {
      height: 420,
    },
  },

  cardActionsRoot: {
    justifyContent: 'center'
  },
}));

const AuthorizedMenu = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
            <Grid key="/theft-message" item>
              <Link to="/theft-message">
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={stolenBike1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography>
                        Здесь вы можете сообщить о новом случае кражи
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions classes={{ root: classes.cardActionsRoot }}>
                      <StyledButton size="small" color="primary">
                        <Typography color='textPrimary'>Сообщить о новом случае</Typography>
                      </StyledButton>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
            <Grid key="/stolen-bikes" item>
              <Link to="/stolen-bikes">
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={stolenBike2}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography>Здесь будут отображаться все ваши зарегистрированные случаи.</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions classes={{ root: classes.cardActionsRoot }}>
                      <StyledButton>
                        <Typography color='textPrimary'>Украденные велосипеды</Typography>
                      </StyledButton>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
            <Grid key="/officers" item>
              <Link to="/officers">
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={stolenBike3}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography>
                      Наша отважная команда всегда готова предоставить вам помощь
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions classes={{ root: classes.cardActionsRoot }}>
                    <StyledButton>
                      <Typography color='textPrimary'>Отвественные сотрудники</Typography>
                    </StyledButton>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
        </Grid>
    </Grid>
    </Grid>
  );
};

export default AuthorizedMenu;