import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { StyledButton } from "style/components";

export default function Footer() {
  return (
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography>
              <StyledButton>
                Обратиться в поддержку
              </StyledButton>
            </Typography> 
          </Toolbar>
        </Container>
      </AppBar>
  )
}