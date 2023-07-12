import React, { useState } from "react";
import useStyles from 'Components/Officers/Officers.module'
import close from "../../../img/close.svg";

const Resolution = ({ onStatusDoneClicked, closeResolution }) => {
  const sOfficers = useStyles()
  const [resolutionText, setResolutionText] = useState("");

  return (
    <div className={sOfficers.modalBackground}>
      <div className={sOfficers.modalContainer}>
        <label>Введите текст решения:</label>
        <textarea
          className="textarea"
          onChange={(e) => setResolutionText(e.target.value)}
        />
        <button
          className={sOfficers.button}
          onClick={() => onStatusDoneClicked(resolutionText)}
        >
          Сохранить
        </button>
        <button className={sOfficers.close} onClick={closeResolution}>
          <img src={close} className={sOfficers.closeImage} alt="Х" />
        </button>
      </div>
    </div>
  );
};

export default Resolution;
