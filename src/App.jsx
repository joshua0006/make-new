import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmenitiesPage from "./pages/AmenitiesPage";
import LocationPage from "./pages/LocationPage";
import RoomsPage from "./pages/RoomsPage";
import DiningPage from "./pages/DiningPage";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
