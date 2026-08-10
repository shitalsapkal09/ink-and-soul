import "./App.css";

import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

// Pages
import Poetry from "./pages/Poetry";
import Marathi from "./pages/Marathi";
import Hindi from "./pages/Hindi";
import English from "./pages/English";
import Quotes from "./pages/Quotes";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Writing from "./pages/Writing";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/my-world"
          element={
            <>
              <Hero />
              <Quote />
            </>
          }
        />

        {/* ROOT → HOME */}

        <Route
          path="/"
          element={
            <Navigate
              to="/my-world"
              replace
            />
          }
        />

        {/* =========================
            POETRY
        ========================= */}

        <Route
          path="/poetry"
          element={<Poetry />}
        />

        {/* MARATHI */}

        <Route
          path="/poetry/marathi"
          element={<Marathi />}
        />

        {/* HINDI */}

        <Route
          path="/poetry/hindi"
          element={<Hindi />}
        />

        {/* ENGLISH */}

        <Route
          path="/poetry/english"
          element={<English />}
        />

        {/* =========================
            STORIES
        ========================= */}

        <Route
          path="/stories"
          element={<Stories />}
        />

        {/* =========================
            QUOTES & SHAYARI
        ========================= */}

        <Route
          path="/quotes"
          element={<Quotes />}
        />

        {/* =========================
            INDIVIDUAL WRITING
        ========================= */}

        <Route
          path="/writing/:language/:id"
          element={<Writing />}
        />

        {/* =========================
            ABOUT
        ========================= */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
    </>
  );
}

export default App;