import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import BusinessAPI from "./api/BusinessAPI";
import SportsAPI from "./api/SportsAPI";
import NewsAPI from "./api/NewsAPI";
import CryptoAPI from "./api/CryptoAPI";
import Interest from "./Interest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/channels">
          <Home />
        </Route>
        <Route exact path="/channels/:id">
          <Home />
        </Route>

        <Route exact path="/interest">
          <Interest />
        </Route>
        <Route exact path="/business">
          <BusinessAPI />
        </Route>
        <Route exact path="/sports">
          <SportsAPI />
        </Route>
        <Route exact path="/news">
          <NewsAPI />
        </Route>
        <Route exact path="/crypto">
          <CryptoAPI />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
