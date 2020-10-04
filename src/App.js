import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CustomHooksPage from "./CustomHooks/CustomHooksPage";
import NotFoundPage from "./NotFound/NotFoundPage";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import UsefulAnimationEffectsPage from "./UsefulAnimationEffects/UsefulAnimationEffectsPage";
import UsefulWidgetsPage from "./UsefulWidges/UsefulWidgetsPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact path="/" to="/custom-hooks" />
        <Route exact path="/custom-hooks" component={CustomHooksPage} />
        <Route
          exact
          path="/useful-animation-effects"
          component={UsefulAnimationEffectsPage}
        />
        <Route exact path="/useful-widgets" component={UsefulWidgetsPage} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
