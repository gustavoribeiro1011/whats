import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Whatsef from "../whatsef/whatsef";
import About from "../whatsef/about";

export default (props) => (
  <Router>
    <Route path="/whatsef" component={Whatsef} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/whatsef" />
  </Router>
);
