import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navabar.component";
import CreateUser from "./components/createuser.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
