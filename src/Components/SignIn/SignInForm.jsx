import React from "react";
import { Form, Field } from "react-final-form";
import {Input} from 'final-form-material-ui';
import {
  composeValidators,
  required,
  emailType,
} from "Utils/validator-utils.js";

import { makeStyles } from '@material-ui/core/styles';
import { StyledTypography, StyledButton } from 'style/components'


const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: '400px',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  submit: {
    alignSelf: 'center',
    fontSize: '16px',
    padding: '5px 10px',
    marginTop: '20px',
    fontWeight: '500',
  }
}))

const SignInForm = ({ onSubmit }) => {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className="label">
            <StyledTypography>Email:</StyledTypography>
            <Field
              component={Input}
              className="input"
              placeholder="email"
              type="text"
              name="email"
              validate={composeValidators(required, emailType)}
            />
          </label>
          <label className="label">
            <StyledTypography>Пароль:</StyledTypography>
            <Field
              component={Input}
              className="input"
              placeholder="пароль"
              type="password"
              name="password"
              validate={required}
            />
          </label>
          <StyledButton
            type='submit'
            disabled={submitting || pristine}
          >
            Войти
          </StyledButton>
        </form>
      )}
    />
  );
};

export default SignInForm;
