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
      <Resume />
      {/* <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contacts} /> */}
    </>
  );
};

export default App;