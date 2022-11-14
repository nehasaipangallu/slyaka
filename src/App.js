import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/header/Header';
import About from './components/about/About';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './components/home/Home';

export default function App() {
  return (
    <div>
      <Header />
      <HashRouter basename="/#">
        <Routes>
          <Route  path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}
