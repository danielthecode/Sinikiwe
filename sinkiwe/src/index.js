import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/header" element={<Header/>}/>
    </Routes>
    {/* <Footer/> */}
  </Router>
);
