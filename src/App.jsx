import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./commerce/About";
import Contact from "./commerce/Contact";
import Header from "./commerce/Header";
import Home from "./commerce/Home";
import Hat from "./commerce/Hat";
import Footer from "./commerce/Footer";
import Jacket from "./commerce/Jacket";
import Sneakers from "./commerce/Sneakers";
import Sunglass from "./commerce/Sunglass";
import Trousers from "./commerce/Trousers";
import Watch from "./commerce/Watch";
import ScrollToTop from "./commerce/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/hat" element={<Hat />} />
          <Route path="/jacket" element={<Jacket />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/sunglass" element={<Sunglass />} />
          <Route path="/trousers" element={<Trousers />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
