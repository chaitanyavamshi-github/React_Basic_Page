import React from "react";
import Header from "./components/Header/Header";
import BannerWrapper from "./components/BannerWrapper/BannerWrapper";
import MainContent from "./components/MainContent/MainContent"
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <BannerWrapper />
      <MainContent />
    </div>
  );
}

export default App;
