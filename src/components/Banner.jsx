import { makeStyles } from "@mui/styles";
import React from "react";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner4.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            Crypto Catcher
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        {/* <Carousel />   */}
      </Container>
    </div>
  );
};

export default Banner;
