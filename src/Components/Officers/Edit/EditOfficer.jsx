import React, { useState } from "react";
import useStyles from 'Components/Officers/Officers.module'
import CancelIcon from '@material-ui/icons/Cancel';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {StyledButton, StyledIconButton} from 'style/components'
import ModalWin from 'Components/ModalWin/ModalWin.jsx'

const EditOfficer = ({
  officers,
  selectedOfficerId,
  closeEditOfficer,
  editOfficer,
  isEditOfficerOpen
}) => {
  const classes = useStyles()
  const currentOfficer = officers.find(
    (officer) => officer._id === selectedOfficerId
  );

  const [editParam, setEditParam] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setEditParamValue(e.target.value);
  };
  const handleEditClick = (param) => {
    setEditParam(param);
    setEditParamValue(currentOfficer[param]);
  };
  const saveNewValue = (param) => {
    if (editParamValue.trim() && editParamValue !== currentOfficer[param]) {
      const editingValue = { [editParam]: editParamValue };
      editOfficer({officerId: currentOfficer._id, officerData: editingValue});
    }
    setEditParam("");
    setEditParamValue("");
  };

  const [repassword, setRepassword] = useState("");
  const [editParamValue, setEditParamValue] = useState("");
  const handlePasswordChange = (e, type) => {
    type === "password" && setPassword(e.target.value);
    type === "repassword" && setRepassword(e.target.value);
  };

  const saveNewPassword = () => {
    if (password && password === repassword) {
      editOfficer({officerId: currentOfficer._id, officerData: { password, repassword }});
      setEditParam("");
      setEditParamValue("");
      alert("Пароль изменён");
    } else {
      alert("Введённые пароли не совпадают");
    }
  };

  return (
    <ModalWin
      isAddModalOpen={isEditOfficerOpen}
      closeAddModal={closeEditOfficer}
    >
    <h1 className={classes.title}>Информация о сотруднике</h1>
        <div className={classes.infoModule}>
          <div className={classes.string}>
            <span className={classes.stringTitle}>Имя:&nbsp;</span>
            {editParam === "firstName" ? (
              <>
                <input
                  className={classes.input}
                  type="text"
                  name="firstName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("firstName")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.firstName}</span>
                <button
                  className={classes.editButton}
                  onClick={() => handleEditClick("firstName")}
                >
                  <BorderColorIcon/>
                </button>
              </>
            )}
          </div>
          <div className={classes.string}>
            <span className={classes.stringTitle}>Фамилия:&nbsp;</span>
            {editParam === "lastName" ? (
              <>
                <input
                  className={classes.input}
                  type="text"
                  name="lastName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("lastName")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.lastName}</span>
                <button
                  className={classes.editButton}
                  onClick={() => handleEditClick("lastName")}
                >
                  <BorderColorIcon/>
                </button>
              </>
            )}
          </div>
          <div className={classes.string}>
            <span className={classes.stringTitle}>Email:&nbsp;</span>
            {editParam === "email" ? (
              <>
                <input
                  className={classes.input}
                  type="email"
                  name="email"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("email")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.email}</span>
                <button
                  className={classes.editButton}
                  onClick={() => handleEditClick("email")}
                >
                  <BorderColorIcon/>
                </button>
              </>
            )}
          </div>

          {editParam === "password" ? (
            <>
              <div className={classes.string}>
                <span className={classes.stringTitle}>Новый пароль: </span>
                <input
                  className={classes.input}
                  type="password"
                  name="password"
                  autoFocus={true}
                  value={password}
                  onChange={(e) => handlePasswordChange(e, "password")}
                />
              </div>
              <div className={classes.string}>
                <span className={classes.stringTitle}>Повторите пароль: </span>
                <input
                  className={classes.input}
                  type="password"
                  name="repassword"
                  autoFocus={true}
                  value={repassword}
                  onChange={(e) => handlePasswordChange(e, "repassword")}
                />
              </div>
              <StyledButton className={classes.button} onClick={saveNewPassword}>
                Сохранить пароль
              </StyledButton>
            </>
          ) : (
            <StyledButton
              className={classes.button}
              onClick={() => setEditParam("password")}
            >
              Изменить пароль
            </StyledButton>
          )}
        </div>
    </ModalWin>
  );
};

export default EditOfficer;