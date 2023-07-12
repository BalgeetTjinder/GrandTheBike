import { makeStyles } from '@material-ui/core/styles';
import { rgba } from 'Utils/css-utils';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: '10px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '250px'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        borderLeft: `1px solid ${theme.palette.primary.main}`
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    title: {
        marginBottom: '10px',
        color: theme.palette.common.white
    },
    addButton: {
        marginBottom: '20px',
        padding: '10px',
        fontWeight: '500',
    },
    officers: {
        maxWidth: '650px',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
    },
    officer: {
        width: '300px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        borderRadius: '5px',
        border: `1px solid ${rgba(theme.palette.common.white, 0.5)}`,
        '-webkit-border-radius': '5px',
        '-moz-border-radius': '5px',
        '-ms-border-radius': '5px',
        '-o-border-radius': '5px',
        overflow: 'hidden',
        boxShadow: `5px 5px 5px ${theme.palette.secondary.dark}`,
    },
    button: {
        cursor: 'pointer',
        width: '50%',
        padding: '10px',
        border: 'none',
        backgroundColor: theme.palette.secondary.light,
        fontWeight: '500',
        fontSize: '14px',
        '&:disabled': {
            color: 'rgba(0, 0, 0, 0.418)',
            cursor: 'default',
        },
        '&:not(:disabled):hover': {
            backgroundColor: 'rgb(253, 253, 37)',
        }
    },
    name: {
        height: '50px',
        cursor: 'pointer',
        fontSize: '20px',
        border: 'none',
        backgroundColor: 'inherit',
        fontWeight: '600',
        padding: '10px',
    },
    modalBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100%',
        zIndex: '20',
        backgroundColor: rgba(theme.palette.common.black, 0.5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    modalContainer: {
        maxWidth: '800px',
        position: 'relative',
        backgroundColor: theme.palette.secondary.light,
        border: '1px solid #fff',
        padding: '20px 35px',
        borderRadius: '20px',
    },
    close: {
        cursor: 'pointer',
        position: 'absolute',
        right: '0',
        top: '5px',
        border: 'none',
        backgroundColor: 'unset',
    },
    closeImage: {
        width: '25px',
        height: '25px',
    },
    spanInterval: {
        paddingRight: '20px',
    },
    string: {
        display: 'flex',
        marginBottom: '15px',
    },
    stringTitle: {
        fontWeight: '600',
        color: theme.palette.text.primary,
    },
    editButton: {
        cursor: 'pointer',
        paddingLeft: '10px',
        backgroundColor: 'inherit',
        border: 'none',
        marginRight: '20px',
    },
    select: {
        cursor: 'pointer',
        height: '100%',
        border: 'none',
        background: 'inherit',
        color: 'inherit',
        fontSize: '1em',
    },
    option: {
        backgroundColor: theme.palette.common.white,
    }      
}))

export default useStyles