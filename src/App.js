import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Mercury from './pages/Mercury/Mercury';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router';
import { useState } from 'react';
import Venus from './pages/Venus/Venus';

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
          </Switch>
        </AnimatePresence>
        {/* <Mercury /> */}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
