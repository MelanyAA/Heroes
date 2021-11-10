import React from "react";
import { Routes, Route } from "react-router-dom";
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
          <Route path="/hero/:heroeId" element={<HeroesScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
