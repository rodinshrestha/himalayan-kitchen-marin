import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import VegetableTarkariCurry from "./components/VegetableTarkariCurry";
import Sides from "./components/Sides";
import { StyledDiv } from "./style";
import ChickenCurry from "./components/ChickenCurry";
import LambCurry from "./components/LambCurry";
import SeaFoodCurry from "./components/SeaFoodCurry";
import Biryani from "./components/Biryani";
import Chowmein from "./components/Chowmein";
import NonAlcholicBeverage from "./components/NonAlcholicBeverage";
import HimilayanTandoori from "./components/HimilayanTandoori";

const FromTheKitchen = () => {
  return (
    <StyledDiv>
      <Starter />
      <Momo />
      <Chowmein />
      <ChickenCurry />
      <LambCurry />
      <VegetableTarkariCurry />
      <SeaFoodCurry />
      <HimilayanTandoori />
      <Biryani />
      <Sides />
      <NonAlcholicBeverage />
    </StyledDiv>
  );
};

export default FromTheKitchen;
