import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';


ReactDOM.render(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/header" element={<Header/>}/>
    </Routes>
    {/* <Footer/> */}
  </Router>,
  document.getElementById('root')
);
