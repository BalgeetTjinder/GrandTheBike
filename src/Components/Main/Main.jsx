import { Link } from "react-router-dom";
import React from "react";

import { useStyles, StyledTypography, StyledButton } from 'style/components'

const Main = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}> 
      <StyledTypography style={{ fontSize: '260%', fontWeight: 'bold'  }}>
        Если у вас был украден велосипед, который вы арендовали у нас, пожалуйста, свяжитесь с нами и сообщите об этом.
      </StyledTypography>
      <StyledButton>
        <Link to="/theft-message">
          Сообщить о краже
        </Link>
      </StyledButton>
    </div>
  );
};

export default Main;