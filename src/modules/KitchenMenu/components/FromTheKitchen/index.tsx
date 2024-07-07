import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import VegetableTarkariCurry from "./components/VegetableTarkariCurry";
import Tandori from "./components/Tandori";
import TikaMasala from "./components/TikaMasala";
import Sides from "./components/Sides";
import { StyledDiv } from "./style";
import ChickenCurry from "./components/ChickenCurry";
import LambCurry from "./components/LambCurry";
import SeaFoodCurry from "./components/SeaFoodCurry";
import Biryani from "./components/Biryani";

const FromTheKitchen = () => {
  return (
    <StyledDiv>
      <Starter />
      <Momo />
      <VegetableTarkariCurry />
      <TikaMasala />
      <ChickenCurry />
      <LambCurry />
      <SeaFoodCurry />
      <Tandori />
      <Biryani />
      <Sides />
    </StyledDiv>
  );
};

export default FromTheKitchen;
