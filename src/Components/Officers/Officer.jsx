import React from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { StyledButton } from 'style/components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './Officers.module';

const Officer = ({ officer, editOfficer, deleteOfficer, openEditOfficer }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <button
            to={`/officers/${officer._id}`}
            className={classes.name}
            onClick={() => openEditOfficer(officer._id)}
          >
            <Typography component="h4" variant="h4">
              {officer.firstName} {officer.lastName}
              {officer.approved ? <AssignmentTurnedInIcon /> : ''}
            </Typography>
          </button>
        </CardContent>
      </div>
      <CardMedia className={classes.cover}>
        <StyledButton
          onClick={() => {
            editOfficer({ officerId: officer._id, officerData: { approved: true } })}
          }
          disabled={officer.approved}
        >
          Одобрить
        </StyledButton>
        <StyledButton onClick={() => deleteOfficer({ officerId: officer._id })}>
          Удалить
        </StyledButton>
      </CardMedia>
    </Card>
  );
};

export default Officer;
