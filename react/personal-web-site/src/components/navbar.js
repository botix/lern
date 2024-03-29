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
  Menu,
  MenuOpen,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/beardedguy.jpg";

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#222",
    height: "6.5vh",
    [theme.breakpoints.down("md")]:{
      minHeight: "10vh"
    }
  },
  hamburgerMenu:{
    color: "tomato",
    minHeight: "4vh",
    minWidth: "4vh"
  }, 
  titleColor:{
    color:"tan"
  },
  menuSliderContainer:{
    width: 250,
    background: "#511",
    height: "100%",
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
  // {
  //   listIcon: <Apps />,
  //   listText: "Portfolio",
  //   listPath: "/portfolio"
  // },
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
    <Box component="nav" style={{overflow:"hidden"}}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={toggleSidebarState}>
          {sidebarOpen ? 
            <MenuOpen className={classes.hamburgerMenu}/> :
            <Menu className={classes.hamburgerMenu} />
          }
          </IconButton>
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