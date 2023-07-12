import React from "react";
import { Form, Field } from "react-final-form";
import {
  composeValidators,
  maxLength,
  required,
  emailType,
} from "Utils/validator-utils.js";
import { makeStyles } from '@material-ui/core/styles';
import {Input} from 'final-form-material-ui';

import {StyledButton, useStyles} from 'style/components'

const useCustomStyles = makeStyles(theme => ({
  form: {
    'max-width': '400px',
    width:' 100%',
    display: 'flex',
    'align-items': 'stretch',
    'flex-direction': 'column',
  },
  buttons: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'margin-top': '10px',
  },
  submit: {
    'font-size': '16px',
    padding: '5px 10px',
    margin: '0 10px',
    'font-weight': '500',
  }
}))

const UserCreateForm = ({ onSubmit, buttonName, currentOfficer }) => {
  const s = useCustomStyles()
  const classes = useStyles()
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={classes.label}>
            Имя:
            <Field
              initialValue={currentOfficer ? currentOfficer.firstName : ""}
              component={Input}
              className={classes.input}
              placeholder="Имя"
              type="text"
              name="firstName"
              validate={composeValidators(required, maxLength(30))}
            />
          </label>
          <label className={classes.label}>
            Фамилия:
            <Field
              initialValue={currentOfficer ? currentOfficer.lastName : ""}
              component={Input}
              className={classes.input}
              placeholder="Фамилия"
              type="text"
              name="lastName"
              validate={composeValidators(required, maxLength(30))}
            />
          </label>
          <label className={classes.label}>
            Email:
            <Field
              initialValue={currentOfficer ? currentOfficer.email : ""}
              component={Input}
              className={classes.input}
              placeholder="email"
              type="text"
              name="email"
              validate={composeValidators(required, emailType)}
            />
          </label>
          <label className={classes.label}>
            Пароль:
            <Field
              component={Input}
              className={classes.input}
              placeholder="пароль"
              type="password"
              name="password"
              validate={required}
            />
          </label>
          <label className={classes.label}>
            Повторите пароль:
            <Field
              component={Input}
              className={classes.input}
              placeholder="пароль"
              type="password"
              name="repassword"
              validate={required}
            />
          </label>

          <div className={s.buttons}>
            <StyledButton
              type="submit"
              disabled={submitting || pristine}
            >
              {buttonName}
            </StyledButton>
            <StyledButton
              type="reset"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Сбросить
            </StyledButton>
          </div>
        </form>
      )}
    />
  );
};

export default UserCreateForm;