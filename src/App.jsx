import "./App.css";

import {
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

// Pages
import MyWorld from "./pages/MyWorld";
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
      <Navbar />

      <Routes>

        {/* =========================
            MAIN HOME PAGE
        ========================= */}

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Quote />
            </>
          }
        />

        {/* =========================
            MY WORLD
        ========================= */}

        <Route
          path="/my-world"
          element={<MyWorld />}
        />

        {/* =========================
            POETRY
        ========================= */}

        <Route
          path="/poetry"
          element={<Poetry />}
        />

        <Route
          path="/poetry/marathi"
          element={<Marathi />}
        />

        <Route
          path="/poetry/hindi"
          element={<Hindi />}
        />

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

      <Footer />
    </>
  );
}

export default App;