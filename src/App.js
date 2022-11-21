import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat';
import './style.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';
import Services from './components/services/Services';

import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';
import Home from './components/home/Home';
export default function App() {
  return (
    <div>
      {/*<Header />
       <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter> */}

      <HashRouter>
        <Header />
        <Routes className="content">
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/about" element={}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
