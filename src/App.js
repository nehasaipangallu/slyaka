import React from 'react';
import './style.css';
import Header from './components/header/Header';
import About from './components/about/About';

// function Header() {
//   return <h1>Hello, neha</h1>;
// }

export default function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
