import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";
<Route exact path="/Home" component={Home} />;
<Route path="/Contact" component={Contact} />;
<Route path="/About" component={About} />;

const App = () => (
  <div>
    <Navigation />
  </div>
);
export default App;
