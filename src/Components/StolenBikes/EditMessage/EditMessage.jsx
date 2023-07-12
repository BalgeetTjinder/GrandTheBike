import React, { useState } from "react";
import useOfficersStyles from 'Components/Officers/Officers.module'
import useStolenBikesStyles from '../StolenBikes.module'
import ModalWin from 'Components/ModalWin/ModalWin.jsx'

import close from "Src/img/close.svg";
import edit from "Src/img/edit.svg";
import {
  typeFormatterToEng,
  statusFormatterToEng,
  statusFormatterToRus,
  TYPES,
  STATUSES,
} from "Utils/formatter-utils";

import {StyledTypography} from 'style/components'

const EditMessage = ({
  formattedThefts,
  officers,
  selectedMessageId,
  isEditMessageOpen,
  closeEditMessage,
  editMessage,
}) => {
  const classes = useStolenBikesStyles()
  const style = useOfficersStyles()

  const currentMessage = formattedThefts.find(
    (theft) => theft._id === selectedMessageId
  );

  const [editParam, setEditParam] = useState("");
  const [editParamValue, setEditParamValue] = useState("");
  const handleChange = (e) => {
    setEditParamValue(e.target.value);
  };
  const handleEditClick = (param) => {
    setEditParam(param);
    setEditParamValue(currentMessage[param]);
  };
  const saveNewValue = (param) => {
    if (editParamValue.trim() && editParamValue !== currentMessage[param]) {
      let value;
      if (param === "officer") {
        value = officers.find(
          (officer) =>
            officer.firstName === editParamValue.split(" ")[0] &&
            officer.lastName === editParamValue.split(" ")[1]
        )._id;
      } else value = editParamValue;
      const editingValue = { [editParam]: value };
      editMessage({messageId: currentMessage._id, newMessage: editingValue});
    }
    setEditParam("");
    setEditParamValue("");
  };

  return (
    <ModalWin
          isAddModalOpen={isEditMessageOpen}
          closeAddModal={closeEditMessage}
        >
        <h1 className={style.title}>Информация о краже</h1>
        <div className={style.infoModule}>
          <div className={style.string}>
            <span className={style.stringTitle}>Дата создания:&nbsp;</span>
            <span className={style.spanInterval}>{currentMessage.createdAt}</span>
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>Данные владельца:&nbsp;</span>
            {editParam === "ownerFullName" ? (
              <>
                <input
                  className={style.input}
                  type="text"
                  name="ownerFullName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("ownerFullName")}
                />
              </>
            ) : (
              <>
                <span>{currentMessage.ownerFullName}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("ownerFullName")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>
              Ответственный сотрудник:&nbsp;
            </span>
            {editParam === "officer" ? (
              <select
                className={style.select}
                defaultValue={editParamValue}
                onChange={handleChange}
                onBlur={() => saveNewValue("officer")}
              >
                {officers.map((officer, index) => {
                  return (
                    <option key={index} className={style.option}>
                      {officer.firstName} {officer.lastName}
                    </option>
                  );
                })}
              </select>
            ) : (
              <>
                <span>{currentMessage.officer}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("officer")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>Номер лицензии:&nbsp;</span>
            {editParam === "licenseNumber" ? (
              <>
                <input
                  className={style.input}
                  type="text"
                  name="licenseNumber"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("licenseNumber")}
                />
              </>
            ) : (
              <>
                <span>{currentMessage.licenseNumber}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("licenseNumber")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>Цвет:&nbsp;</span>
            {editParam === "color" ? (
              <>
                <input
                  className={classes.color}
                  type="color"
                  name="color"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("color")}
                />
              </>
            ) : (
              <>
                <div
                  style={{ backgroundColor: currentMessage.color }}
                  className={classes.color}
                />
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("color")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
            <span className={style.stringTitle}>Тип:&nbsp;</span>
            {editParam === "type" ? (
              <select
                className={style.select}
                defaultValue={editParamValue}
                onChange={(e) =>
                  setEditParamValue(typeFormatterToEng(e.target.value))
                }
                onBlur={() => saveNewValue("type")}
              >
                {TYPES.map((type, index) => {
                  return (
                    <option key={index} className={style.option}>
                      {type.rus}
                    </option>
                  );
                })}
              </select>
            ) : (
              <>
                <span>{currentMessage.type}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("type")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>Описание:&nbsp;</span>
            {editParam === "description" ? (
              <>
                <textarea
                  className="textarea"
                  name="description"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("description")}
                />
              </>
            ) : (
              <>
                <span className={style.longText}>{currentMessage.description}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("description")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={style.string}>
            <span className={style.stringTitle}>Статус:&nbsp;</span>
            {editParam === "status" ? (
              <>
                <select
                  className={style.select}
                  defaultValue={statusFormatterToRus(editParamValue)}
                  onChange={(e) =>
                    setEditParamValue(statusFormatterToEng(e.target.value))
                  }
                  onBlur={() => {
                    if (editParamValue === "done") {
                      handleEditClick("resolution");
                    } else {
                      saveNewValue("status");
                    }
                  }}
                >
                  {STATUSES.map((status, index) => {
                    return (
                      <option key={index} className={style.option}>
                        {status.rus}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : (
              <>
                <span>{statusFormatterToRus(currentMessage.status)}</span>
                <button
                  className={style.editButton}
                  onClick={() => handleEditClick("status")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {currentMessage.status === "done" ? (
            <div className={style.string}>
              <span className={style.stringTitle}>Решение:&nbsp;</span>
              {editParam === "resolution" ? (
                <>
                  <textarea
                    className="textarea"
                    name="resolution"
                    autoFocus={true}
                    required={true}
                    value={editParamValue}
                    onChange={handleChange}
                    onBlur={() => saveNewValue("resolution")}
                  />
                </>
              ) : (
                <>
                  <span className={style.longText}>
                    {currentMessage.resolution}
                  </span>
                  <button
                    className={style.editButton}
                    onClick={() => handleEditClick("resolution")}
                  >
                    <img src={edit} alt="edit" />
                  </button>
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className={style.close} onClick={closeEditMessage}>
          <img src={close} className={style.closeImage} alt="Х" />
        </button>
  </ModalWin>
  );
};

export default EditMessage;
