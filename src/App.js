import React from "react";
import { styled } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";

const StyledAppContainer = styled("div")({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});

const App = () => {
  return (
    <BrowserRouter>
      <StyledAppContainer>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </StyledAppContainer>
    </BrowserRouter>
  );
};

export default App;
