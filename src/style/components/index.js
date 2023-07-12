import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";

import { rgba } from 'Utils/css-utils';
import theme from 'Style/theme';

const useStyles = makeStyles(theme => ({
    '@global': {
        a: {
            color: 'inherit', 
            textDecoration: 'inherit', 
        },
        '*::-webkit-scrollbar': {
            width: '0.7em'
        },
        '*::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.secondary.light,
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary.main,
            outline: '1px solid slategrey'
        }
    },
    whiteText:{
        color: theme.palette.common.white
    },
    blackText:{
        color: theme.palette.common.black
    },
    warningColorText:{
        color: theme.palette.warning.main
    },
    successColorText: {
        color: theme.palette.success.main
    },
    root: {
        backgroundColor: theme.palette.primary.light,
    },
    paper: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    app: {
        height: '95vh',
        display: 'grid',
        gridTemplateRows: '50px 1fr 30px',
        color: '#FFDA73',
        fontFamily: 'Roboto, sans-serif'
    },
    container: {
        maxWidth: '1200px',
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    main: {
        padding: '15px 0',
        overflowY: 'auto',
        overflowX: 'hidden',
    }, 
    label: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px',
        alignItems: 'center',
        textAlign: 'end',
    },
    input: {
        width: '250px', 
        padding: '5px',
        marginLeft: '10px',
        fontSize: '16px',
    },
    textarea: {
        resize: 'none',
        height: '90px',
        padding: '10px',
        width: '100%',
        fontSize: '16px',
    },
    radio: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
    },
    radioDot: {
        width: '15px',
        height: '15px',
        marginRight: '10px', 
    }
}));

const StyledTypography = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontSize: '1rem'
    }
}))(Typography);


const StyledIconButton = withStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
    },
    disabled: {
        backgroundColor: rgba(theme.palette.primary.main, 0.7)
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
        backgroundColor: theme.palette.secondary.main
    },
}))(IconButton);

const _StyledButton = withStyles((theme) => ({
    root: {
        background: `#E2C499`,
        borderRadius: '30px',
        border: `1px solid #8C0004`,
        minWidth: '100px',
        padding: '10px',
        margin: '5px',
        boxShadow: `0 5px 7px 2px rgba(0, 0, 0, 0.3)`,
        color: theme.palette.type === 'light' ? '#000000' : theme.palette.common.black,
    },
    disabled: {
        backgroundColor:  rgba(theme.palette.common.white, 0.3),
        color: rgba(theme.palette.common.white, 0.3),
    },
    endIcon: {
        margin: 0,
        color: theme.palette.type === 'light' ? theme.palette.common.black : '#FFFFFF',
    }
}))(Button);

const StyledButton = (props) => {
    return(
        <_StyledButton 
            startIcon = {props.pending ? <CircularProgress size={20}/> : ''}
            {...props}
        >
            {props.children}
        </_StyledButton>
    )
}

const StyledSpinner = withStyles({
    colorPrimary: {
        color: theme.palette.common.white
    },
    colorSecondary: {
        color: theme.palette.common.black
    },

})(CircularProgress)

export {
    useStyles, 
    StyledButton, 
    StyledSpinner,
    StyledIconButton,
    StyledTypography
}