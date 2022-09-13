import * as React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
