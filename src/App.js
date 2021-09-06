import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Navbar from './components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router';
import { useState } from 'react';

import Mercury from './pages/Mercury/Mercury';
import Venus from './pages/Venus/Venus';
import Earth from './pages/Earth/Earth';
import Mars from './pages/Mars/Mars';
import Jupiter from './pages/Jupiter/Jupiter';
import Saturn from './pages/Saturn/Saturn';
import Uranus from './pages/Uranus/Uranus';
import Neptune from './pages/Neptune/Neptune';
import AllPlanets from './components/AllPlanets/AllPlanets';

function App() {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState('/');

  return (
    <ThemeProvider>
      <MainContainer>
        <Navbar pathName={location.pathname}
          onHover={setActivePlanet}
          activePlanet={activePlanet} />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/mercury">
              <Mercury />
            </Route>
            <Route exact path="/venus">
              <Venus />
            </Route>
            <Route exact path="/earth">
              <Earth />
            </Route>
            <Route exact path="/mars">
              <Mars />
            </Route>
            <Route exact path="/jupiter">
              <Jupiter />
            </Route>
            <Route exact path="/saturn">
              <Saturn />
            </Route>
            <Route exact path="/uranus">
              <Uranus />
            </Route>
            <Route exact path="/neptune">
              <Neptune />
            </Route>
            <Route exact path="/">
              <AllPlanets activePlanet={activePlanet} />
            </Route>
          </Switch>
        </AnimatePresence>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
