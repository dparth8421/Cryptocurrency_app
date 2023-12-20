import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/"); // Navigate to thcde home page
  };

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={handleTitleClick}
              className={classes.title}
              variant="h6"
            >
              Crypto Catcher
            </Typography>

            <Select
              value="outline"
              style={{ width: 100, height: 40, marginLeft: 15 }}
            >
              <MenuItem value={"USD"}>INR</MenuItem>
              <MenuItem value={"INR"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
