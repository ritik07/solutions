import React from "react";
import "./App.css";
import Search from "./Components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id" component={Details} />
    <Route path="/about/:id" component={Details} />
        </Switch>
      </Router>
      {/* <Search />
      <Categories title="Pizza & Noodles" /> */}
    </div>
  );
}

export default App;
