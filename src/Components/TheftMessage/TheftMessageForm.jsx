import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from "react-final-form";
import { TextField, Input, Select } from 'final-form-material-ui';
import {
  composeValidators,
  maxLength,
  required,
  letters,
} from "Utils/validator-utils.js";

import { typeFormatterToRus } from "Utils/formatter-utils";

import { StyledTypography, StyledButton, useStyles } from 'style/components'

const useCustomStyles = makeStyles(theme => ({
  form: {
    maxWidth: '500px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column'
  },
  string: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  halfStringhalfString: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  color: {
    width: '50px',
    marginLeft: '10px',
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
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  submit: {
    fontSize: '16px',
    padding: '5px 10px',
    margin: '0 10px',
    fontWeight: '500',
  }
}))

const TheftMessageForm = ({ isAuth, onSubmit, officers }) => {
  const classes = useCustomStyles()
  const s = useStyles()
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.string}>
            <StyledTypography>ФИО арендатора:</StyledTypography>
            <Field
              component={Input}
              className={s.input}
              placeholder="Фамилия Имя Отчество"
              type="text"
              name="ownerFullName"
              validate={composeValidators(required, letters)}
            />
          </div>
          <div className={classes.string}>
            <StyledTypography>Номер лицензии: </StyledTypography>
            <Field
              component={Input}
              className={s.input}
              placeholder="№ лицензии"
              type="text"
              name="licenseNumber"
              validate={composeValidators(required, maxLength(30))}
            />
          </div>
          <div className={classes.string}>
            <div className={classes.halfString}>
              <StyledTypography>Цвет:</StyledTypography>
              <Field
                component={Input}
                className={classes.color}
                type="color"
                name="color"
                initialValue="#ffffff"
                validate={composeValidators(required)}
              />
            </div>
            <div className={classes.halfString}>
              <StyledTypography>Тип:</StyledTypography>
              <label className={s.radio}>
                <Field
                  component={Input}
                  className={s.radioDot}
                  type="radio"
                  name="type"
                  value="sport"
                  validate={composeValidators(required)}
                />{" "}
                <StyledTypography>{typeFormatterToRus("sport")}</StyledTypography>
              </label>

              <label className={s.radio}>
                <Field
                  component={Input}
                  className={s.radioDot}
                  type="radio"
                  name="type"
                  value="general"
                  validate={composeValidators(required)}
                />{" "}
                <StyledTypography>{typeFormatterToRus("general")}</StyledTypography>
              </label>
            </div>
          </div>
          {isAuth ? (
            <div className={classes.string}>
              <StyledTypography>Ответственный сотрудник:</StyledTypography>
              <Field name="officer" component={Select} className={s.input}>
                <option />

                {officers.length > 0
                  ? officers.map((officer) => {
                      if (officer.approved) {
                        return (
                          <option value={officer._id} key={officer._id}>
                            {officer.firstName} {officer.lastName}
                          </option>
                        );
                      }
                    })
                  : ""}
              </Field>
            </div>
          ) : (
            ""
          )}
          <StyledTypography>Описание:</StyledTypography>
          <Field
            component={TextField}
            name="description"
            className={s.textarea}
            placeholder="Описание"
            validate={composeValidators(required, maxLength(200))}
          />
          <div className={classes.buttons}>
            <StyledButton
              type='submit'
              disabled={submitting || pristine}
            >
              Отправить
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

export default TheftMessageForm;
