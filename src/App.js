import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../src/Components/Pages/Homepage/Homepage'
import About from '../src/Components/Pages/About/About'

import Contact from '../src/Components/Pages/Contact/Contact'
import Mobile from './Components/Pages/Services/Mobile'
import Software from './Components/Pages/Services/Software'
import Iot from './Components/Pages/Services/Iot'
import Animation from './Components/Pages/Services/Animation'
import Graphics from './Components/Pages/Services/Graphics'
import Ar from "./Components/Pages/Services/Ar"
import Custom from './Components/Pages/Services/Custom'
import Seo from './Components/Pages/Services/Seo'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/software" element={<Software />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/ar" element={<Ar />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/custom" element={<Custom />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
