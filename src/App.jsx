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

function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <About />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* My World */}

        <Route
          path="/my-world"
          element={<MyWorld />}
        />


        {/* Poetry */}

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


        {/* Quotes & Shayari */}

        <Route
          path="/quotes"
          element={<Quotes />}
        />


        {/* Stories Collection */}

        <Route
          path="/stories"
          element={<Stories />}
        />


        {/* Poetry Reading Template */}

        <Route
          path="/writing/:language/:id"
          element={<Writing />}
        />


        {/* Story Reading Template */}

        <Route
          path="/story/:id"
          element={<StoryReading />}
        />


        {/* About */}

        <Route
          path="/about"
          element={<AboutPage />}
        />


        {/* Contact */}

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