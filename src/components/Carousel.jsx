import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "../config/Apis";
import { CryptoState } from "./CryptoContext";

const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Carousel = () => {
  const [trendind, setTrending] = useState([]);
  const classes = useStyles();

  const { currency } = CryptoState();

  console.log(trendind);
  const trendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  useEffect(() => {
    trendingCoins();
  }, [currency]);
  return <div className={classes.carousel}> Carousel</div>;
};

export default Carousel;
