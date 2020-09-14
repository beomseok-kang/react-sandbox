import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomHooksPage from './CustomHooks/CustomHooksPage';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import UsefulAnimationEffectsPage from './UsefulAnimationEffects/UsefulAnimationEffectsPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/custom-hooks" component={CustomHooksPage}/>
        <Route exact path="/useful-animation-effects" component={UsefulAnimationEffectsPage}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
