import React from "react";
import { Routes, Route } from "react-router-dom";
import { AsociacionScreen } from "../AsociacionScreen";
import { DcScreen } from "../Components/dc/DcScreen";
import { HeroesScreen } from "../Components/heroes/HeroesScreen";
import { MarvelScreen } from "../Components/marvel/MarvelScreen";
import { SearchScreen } from "../Components/search/SearchScreen";
import { Footer } from "../Components/Shared/Footer";
import { NavBar } from "../Components/Shared/Navbar";
import { HomeScreen } from "../HomeScreen";

export const DashboarRouter = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/hero/:heroeId" element={<HeroesScreen />} />
          <Route exact path="/marvel" element={<MarvelScreen />} />
          <Route exact path="/dc" element={<DcScreen />} />
          <Route exact path="/search" element={<SearchScreen />} />
          <Route exact path="/asociaciones" element={<AsociacionScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="*" element={<HomeScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
