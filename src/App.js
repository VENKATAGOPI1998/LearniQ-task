import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Card from "./Card";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="central">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Card" component={Card}></Route>
            <Route exact path="/Easy" component={Easy}></Route>
            <Route exact path="/Medium" component={Medium}></Route>
            <Route exact path="/Hard" component={Hard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
