import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Rsvp from "./components/pages/Rsvp";
import Venue from "./components/pages/Venue";
import History from "./components/pages/History";
import React, { Suspense, useState } from "react";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/diogoeraquele" Component={Home} />
            <Route path="/our-history" Component={History} />
            <Route path="/services" Component={Services} />
            <Route path="/products" Component={Venue} />
            <Route path="/rsvp" Component={Rsvp} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
