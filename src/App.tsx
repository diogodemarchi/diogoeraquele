import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import "./App.css";
import React, { Suspense } from "react";
import i18n from "./i18n";

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/diogoeraquele" Component={Home} />
            <Route path="/services" Component={Services} />
            <Route path="/products" Component={Products} />
            <Route path="/sign-up" Component={SignUp} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
