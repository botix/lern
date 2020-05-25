import React from "react";
import avatar from "../images/grayHat.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../images/computer-1.jpg";
import {
  Typography,
  Avatar,
  Grid,
  Box,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  mainContainer: {
    position: "relative",
    height: "93.5vh",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]:{
      height: "90vh"
    }
  },
  avatar:{
    width: "10%",
    height: "10%",
    margin: "1rem auto",
    backgroundColor: "tan"
  },
  title:{
    color:"tomato"
  },
  subtitle:{
    color:"tan",
    marginBottom:"3rem"
  },
  typedTextContainer:{
    position: "absolute",
    top:"49%",
    left:"49%",
    transform:"translate(-50%, -50%)",
    width:"100vw",
    textAlign: "center",
    zIndex: 1
  }
}));


const Header = () => {
  const classes = useStyles();

  return(
    <>
    <Box className={classes.mainContainer}></Box>
      <Box className={classes.typedTextContainer}>
        <Grid container justify="center">
          <Avatar src={avatar} alt="avatarimage" className={classes.avatar}/>
        </Grid>
        <Typography variant="h4" className={classes.title}>
          <Typed 
            strings={["Ante Botić"]}
            typeSpeed={200}
          />
        </Typography>
        <br/>
        <Typography variant ="h5" className={classes.subtitle}>
          <Typed 
            strings={["Web Development", "MERN Stack", "JavaScript", "NodeJS", "ReactJS", "MongoDB", "Postgres", "Linux"]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </Typography>
      </Box>
      </>
  );
};

export default Header;