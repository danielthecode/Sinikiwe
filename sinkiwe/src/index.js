import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Potraiture from './Components/Portraiture/Potraiture';
import Nature from './Components/Nature/Nature';
import Weddings from './Components/Weddings/Weddings';
import FineArt from './Components/FineArt/FineArt';
import Home from './Components/Home/Home';
import Test from './Components/Test/Test.tsx'
import "./index.scss"
import SimpleReactLightbox from 'simple-react-lightbox'
import ScrollToTop from "./Components/ScrollToTop.jsx";
import UploadPortraiture from "./Components/Admin/Portraiture/Upload/UploadPortraiture.jsx"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <SimpleReactLightbox>
  <Router>
    <ScrollToTop>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/portraiture" element={<Potraiture/>}/>
      <Route path="/nature" element={<Nature/>}/>
      <Route path="/weddings" element={<Weddings/>}/>
      <Route path="/fineart" element={<FineArt/>}/>
      <Route path="/admin/portraiture-upload" element={<UploadPortraiture/>}/>
    </Routes>
    </ScrollToTop>
    {/* <Footer/> */}
  </Router>
  </SimpleReactLightbox>
);
