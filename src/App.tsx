import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Rsvp from "./components/pages/Rsvp";
import Venue from "./components/pages/Venue";
import History from "./components/pages/History";
import React, { Suspense, useState } from "react";
import Services from "./components/pages/Services";
import Arrival from "./components/pages/Arrival";

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/diogoeraquele" Component={Home} />
            <Route path="/arrival" Component={Arrival} />
            <Route path="/our-history" Component={History} />
            <Route path="/services" Component={Services} />
            <Route path="/products" Component={Venue} />
            <Route path="/rsvp" Component={Rsvp} />
            <Route path="/" element={<Navigate to="/diogoeraquele" />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
