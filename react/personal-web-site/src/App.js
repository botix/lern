import React from "react";
import { Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";

function App (){
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contacts} />
      {/* Needs more work, and some actual projects to display */}
      {/* <Route path="/portfolio" component={Portfolio} /> */}
    </>
  );
};

export default App;