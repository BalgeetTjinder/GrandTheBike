import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    table: {
      borderSpacing: 0,
      border: '1px solid white',
    },
    header: {
      '&:last-child': {
        borderRight: 'none'
      },
      margin: '0',
      padding: '0.5rem',
      borderBottom: '3px solid white',
      borderRight: '1px solid white',
      background: 'white',
      color: 'black',
      fontWeight: 'bold',
    },
    cell: {
      '&:last-child': {
        borderRight: 'none'
      },
      margin: '0',
      padding: '0.5rem',
      border: '1px solid white',
      color: 'white',
    },
    color: {
      width: '40px',
      height: '30px',
    },
    ownerButton: {
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'inherit',
      color: 'white',
      fontSize: '1em',
    },
    smallText: {
      fontSize: '12px'
    },
    select: {
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      border: 'none',
      background: 'inherit',
      color: 'inherit',
      fontSize: '1em',
    },
    option: {
      backgroundColor: theme.palette.primary.light,
    },
    color: {
      width: '50px',
      height: '20px',
      marginLeft: '10px',
    }
}))

export default useStyles