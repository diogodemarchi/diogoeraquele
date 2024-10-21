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
import { Suspense } from "react";
import Vacation from "./components/pages/Vacation";
import Arrival from "./components/pages/Arrival";
import Faq from "./components/pages/Faq";
import Gate from "./components/Gate";
import Wedding from "./components/pages/Wedding";

function App() {
  return (
    <>
      <Suspense fallback="loading">
        {/* <Gate> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/diogoeraquele" Component={Home} />
            <Route path="/arrival" Component={Arrival} />
            <Route path="/our-history" Component={History} />
            <Route path="/wedding" Component={Wedding} />
            <Route path="/vacation" Component={Vacation} />
            <Route path="/faq" Component={Faq} />
            <Route path="/rsvp" Component={Rsvp} />
            <Route path="/" element={<Navigate to="/diogoeraquele" />} />
          </Routes>
        </Router>
        {/* </Gate> */}
      </Suspense>
    </>
  );
}

export default App;
