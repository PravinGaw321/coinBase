import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Coindetails from "./component/Coindetails/Coindetails";
import './App.css';

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="coindetail/:coinid" element={<Coindetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
