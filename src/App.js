import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat';
import './style.css';
import Header from './components/header/Header';
import About from './components/about/About';
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/Home';

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
