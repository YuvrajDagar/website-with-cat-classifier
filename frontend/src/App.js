import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";

//Route
import RouteComponent from "./Components/Routes/index";

const App = () => {
  return (
    <Router>
      <Header />
      <RouteComponent />
    </Router>
  );
};

export default App;
