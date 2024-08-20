import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Rsvp from "./components/pages/Rsvp";
import History from "./components/pages/History";
import React, { Suspense, useState } from "react";
import Vacation from "./components/pages/Vacation";
import Arrival from "./components/pages/Arrival";
import Faq from "./components/pages/Faq";
import PasswordGate from "./components/PasswordGate";

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <PasswordGate>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/diogoeraquele" Component={Home} />
              <Route path="/arrival" Component={Arrival} />
              <Route path="/our-history" Component={History} />
              <Route path="/vacation" Component={Vacation} />
              <Route path="/faq" Component={Faq} />
              <Route path="/rsvp" Component={Rsvp} />
              <Route path="/" element={<Navigate to="/diogoeraquele" />} />
            </Routes>
          </Router>
        </PasswordGate>
      </Suspense>
    </>
  );
}

export default App;
