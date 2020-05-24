import  React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import  {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import { 
  ArrowBack, 
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/beardedguy.jpg";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: "#222"
  },
  arrowBack:{
    color: "tomato"
  }, 
  titleColor:{
    color:"tan"
  },
  menuSliderContainer:{
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar:{
    display: "block",
    margin: "1rem auto",
  },
  listItem:{
    color: "tan"
  }
}))

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contact"
  }
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebarState = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const classes = useStyles();

  const sidebar = (
    <Box component="div" className={classes.menuSliderContainer} onClick={toggleSidebarState}>
    <Divider />
    <Avatar src={avatar} className={classes.avatar} />
    <Divider />
    <List>
      {menuItems.map((lsItem, key) => (
        <ListItem button key={key} className={classes.listItem} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem}>
            {lsItem.listIcon}
          </ListItemIcon>
          <ListItemText primary={lsItem.listText}/>
        </ListItem>
      ))}
    </List>
  </Box>
  );

  return (
    <>
    <Box component="nav">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={toggleSidebarState}>
            <ArrowBack className={classes.arrowBack}/>
          </IconButton>
          <Typography variant="h5" className={classes.titleColor}>
            Portfolio
          </Typography>
          <MobileRightMenuSlider
            open={sidebarOpen}
            onClose={toggleSidebarState}
            anchor="right"
          >
            {sidebar}
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Navbar;