import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../components/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/Apis";
import { styled } from "@mui/system";
import { LinearProgress, Typography } from "@mui/material";
import CoinDetails from "../components/CoinDetails";
import ReactHtmlParser from "react-html-parser";

const Container = styled("div")(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = styled("div")(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
}));

const Heading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 2, // Adjust as needed
  fontFamily: "Montserrat",
});

const Description = styled(Typography)({
  width: "100%",
  fontWeight: "bold",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
});

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState;

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchSingleCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Container>
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading variant="h3">{coin?.name}</Heading>
        <Description variant="subtitle1">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}
        </Description>
      </Sidebar>
      <CoinDetails coin={coin} />
    </Container>
  );
};

export default CoinPage;
