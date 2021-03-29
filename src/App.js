import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Result from "./Result";
import Background from "./Background";
import Categories from "./Categories";
import Edit from "./Edit";
import Test from "./Test";
import Rescat from "./Rescat";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Background></Background>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Categorized-Quiz's" component={Categories}/>
            <Route exact path="/Create-Quiz/:id" component={Create}/>
            <Route exact path="/Edit/:id" component={Edit}/>
            <Route exact path="/Test/:id" component={Test}/>
            <Route exact path="/Results/:id" component={Result}/>
            <Route exact path="/Res/Categorized" component={Rescat}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
