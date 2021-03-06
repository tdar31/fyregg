import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Matchpage from "./pages/Matchpage";
import NoMatch from "./pages/NoMatch";
import Profilepage from "./pages/Profilepage";
import Home from "./pages/Home";
import Champion from "./pages/Champion";
import Item from "./pages/Item";
import Spell from "./pages/Spell";
import ChampionPage from "./pages/ChampionPage";
import SpellPage from "./pages/SpellPage";
import Itempage from "./pages/Itempage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/match/:mId" component={Matchpage} />
        <Route exact path="/summoner/" component={Profilepage} />
        <Route
          exact
          path="/summoner/:username/:region"
          component={Profilepage}
        />
        <Route
          exact
          path="/summoner/:username/:region/:theme"
          component={Profilepage}
        />
        <Route
          exact
          path="/summoner/:username/:region/:matchData"
          component={Profilepage}
        />
        <Route exact path="/champions" component={Champion} />
        <Route exact path="/champions/:champId" component={ChampionPage} />
        <Route exact path="/items" component={Item} />
        <Route exact path="/items/:itemId" component={Itempage} />
        <Route exact path="/spells" component={Spell} />
        <Route exact path="/spells/:spellId" component={SpellPage} />
        {/* //
        //
        // */}
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
