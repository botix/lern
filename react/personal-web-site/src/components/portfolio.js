import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../images/scientist.png"
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height:"100vh"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto"
  }
});

const Portfolio = () => {
  const classes = useStyles();

  return(
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 1
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Source Code
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
    
  );
};

export default Portfolio;