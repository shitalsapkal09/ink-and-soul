import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import Footer from "./components/Footer";

import Poetry from "./pages/Poetry";
import Marathi from "./pages/Marathi";
import Hindi from "./pages/Hindi";
import English from "./pages/English";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import Writing from "./pages/Writing";
import StoryReading from "./pages/StoryReading";
import MyWorld from "./pages/MyWorld";
import Quotes from "./pages/Quotes";


/* ===========================
   HOME PAGE
=========================== */

function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <About />
    </>
  );
}


/* ===========================
   MAIN APP
=========================== */

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* All Routes */}
      <Routes>

        {/* ===========================
           HOME
        =========================== */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* ===========================
           MY WORLD
           URL:
           /my-world
        =========================== */}

        <Route
          path="/my-world"
          element={<MyWorld />}
        />


        {/* ===========================
           POETRY COLLECTION
        =========================== */}

        <Route
          path="/poetry"
          element={<Poetry />}
        />

        {/* Marathi Poetry */}

        <Route
          path="/poetry/marathi"
          element={<Marathi />}
        />

        {/* Hindi Poetry */}

        <Route
          path="/poetry/hindi"
          element={<Hindi />}
        />

        {/* English Poetry */}

        <Route
          path="/poetry/english"
          element={<English />}
        />


        {/* ===========================
           QUOTES & SHAYARI
        =========================== */}

        <Route
          path="/quotes"
          element={<Quotes />}
        />


        {/* ===========================
           STORIES COLLECTION
        =========================== */}

        <Route
          path="/stories"
          element={<Stories />}
        />


        {/* ===========================
           POETRY / QUOTE READING
        =========================== */}

        <Route
          path="/writing/:language/:id"
          element={<Writing />}
        />


        {/* ===========================
           STORY READING
        =========================== */}

        <Route
          path="/story/:id"
          element={<StoryReading />}
        />


        {/* ===========================
           ABOUT
        =========================== */}

        <Route
          path="/about"
          element={<AboutPage />}
        />


        {/* ===========================
           CONTACT
        =========================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;