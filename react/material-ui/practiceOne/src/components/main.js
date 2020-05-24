import React from "react";
import CoffeCard from "./coffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "../data/coffeMakerData";

const Main = () => {

  const getCoffeMakerCard = (coffeMakerObj) => {
      return (
        <Grid item xs={12} sm={4}>
          <CoffeCard { ...coffeMakerObj } />
        </Grid>
      )
  }

  return (
    <Grid container spacing={4}>
      {coffeMakerList.map(coffeMaker => getCoffeMakerCard(coffeMaker))}
    </Grid>
  )
}

export default Main;