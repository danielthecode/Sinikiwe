import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Header from './Components/Header/Header';
import Potraiture from './Components/Portraiture/Potraiture';
import Nature from './Components/Nature/Nature';
import Weddings from './Components/Weddings/Weddings';
import FineArt from './Components/FineArt/FineArt';
import "./index.scss"
import SimpleReactLightbox from 'simple-react-lightbox'
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Login from "./Components/Admin/Authentication/Login"
import {AuthContext} from './contexts/AuthContext'
import UploadPortraiture from "./Components/Admin/Portraiture/Upload/UploadPortraiture.jsx"
import ViewUploadedPortraiture from "./Components/Admin/Portraiture/View/ViewUploadedPortriature.jsx"
import UploadNature from "./Components/Admin/Nature/Upload/UploadNature.jsx"
import ViewUploadedNature from "./Components/Admin/Nature/View/ViewUploadedNature.jsx"
import UploadWeddings from "./Components/Admin/Weddings/Upload/UploadWeddings.jsx"
import ViewUploadedWeddings from "./Components/Admin/Weddings/View/ViewUploadedWeddings.jsx"
import UploadFineArt from "./Components/Admin/FineArt/Upload/UploadFineArt.jsx"
import ViewUploadedFineArt from "./Components/Admin/FineArt/View/ViewUploadedFineArt.jsx"

function App() {


  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {

    return currentUser ? children : <Navigate to="/admin/login"/>;
}

const LoggedIn = ({children}) => {
    return currentUser ? <Navigate to="/admin/portraiture-upload"/> : children;
}



  console.log(currentUser);

  return (
    <>
      <SimpleReactLightbox>
    <Router>
    <ScrollToTop>
    <Header/>
    <Routes>
    
    <Route path = "/" element = { <Home/> }/>
    <Route index element = { <Home/> }/>
    <Route path = "portraiture" element = { <Potraiture/> }/> 
    <Route path = "nature" element = { <Nature/> }/>
    <Route path = "weddings" element = { < Weddings/> }/>
    <Route path = "fineart" element = { <FineArt/> }/>
    <Route path = "admin/login"element = { <LoggedIn><Login/></LoggedIn>}/>
    <Route path = "admin/portraiture-upload" element = {<RequireAuth><UploadPortraiture/></RequireAuth> }/>
    <Route path = "admin/view-portraiture" element = {<RequireAuth><ViewUploadedPortraiture/></RequireAuth> }/>
    <Route path = "admin/nature-upload" element = {<RequireAuth><UploadNature/></RequireAuth> }/>
    <Route path = "admin/view-nature" element = {<RequireAuth><ViewUploadedNature/></RequireAuth> }/>
    <Route path = "admin/weddings-upload" element = {<RequireAuth><UploadWeddings/></RequireAuth> }/>
    <Route path = "admin/view-weddings" element = {<RequireAuth><ViewUploadedWeddings/></RequireAuth> }/>
    <Route path = "admin/fineart-upload" element = {<RequireAuth><UploadFineArt/></RequireAuth> }/>
    <Route path = "admin/view-fineart" element = {<RequireAuth><ViewUploadedFineArt/></RequireAuth> }/>

    
    </Routes> 
    </ScrollToTop>
    { /* <Footer/> */ }
    </Router>
    </SimpleReactLightbox>
    </>
  );
}

export default App;
