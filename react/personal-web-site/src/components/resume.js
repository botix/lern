import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Link } from "@material-ui/core";
import Navbar from "./navbar";
import data from "../utils/studyPath";

const useStyles = makeStyles(theme => ({
  mainContainer:{
    background: "#233",
    overflow: "auto",
    height:"100vh"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after":{
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before":{
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }

  },
  timeLineItem:{
    padding: "1rem",
    borderBottom: "2px solid tan",
    margin: "1rem 3rem 1rem 1rem",
    position: "relative",
    clear: "both",

    [theme.breakpoints.up("md")]:{
      width: "40%",
      margin: "1rem",
      "&:nth-of-type(2n)":{
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      }
    }


    
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin:"0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]:{
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)":{
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before":{
        display:"none"
      }
    },
    [theme.breakpoints.down("md")]:{
      margin: "0 auto"
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  title: {
    color: "#CCC",
    padding: "0",
    textTransform: "uppercase",
    margin: ".125 rem",
  },
  subtitle: {
    color: "tomato",
    marginBottom: ".8rem"
  },
  link: {
    marginTop: ".8rem",
    color: "#999",
  },
  tan: {
    color: "tan"
  }
}));

const Resume = () => {
  const classes = useStyles();
  const child = [];
  let grandchild = [];

  data.map((year, idx) => {

    year.map((month, key) => {
      if(key > 0){
        grandchild.push(
          <Box component="div" className={classes.timeLineItem} key={(key+1)*Math.random()}>
          <Typography variant="h5" align="center" className={`${classes.title}`}>
            {month[0]}
          </Typography>
          <Typography variant="body1" align="center" className={classes.subtitle}>
            {month[1]}
          </Typography>
          <Typography variant="subtitle1" align="center" className={classes.tan}>
            {month[2]}
          </Typography>
          
          {month[3] && month[4] && 
            <Typography align="center" className={classes.link}>
              <Link href={month[4]} color="inherit">{month[3]}</Link>
            </Typography>
          }
          </Box>
        );
      };
    });
    
    child.push(
      <Box component="div" className={classes.timeLine} key={idx}>
        <Typography
        variant="h2"
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          {year[0]}
        </Typography>
        {grandchild}
      </Box>
    );

    grandchild = [];

  });

  return (
    <>
     <Navbar />
     <Box component="header" className={classes.mainContainer}> 
      <Typography variant="h4" align="center" className={classes.heading}>
        study path
      </Typography>
     {child}
     </Box>
    </>
  );
};

export default Resume;