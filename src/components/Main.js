import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Footer from "./views/Footer"


export default function Main() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check to see what page is current, and reader specific component based on which page is current.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call our previously defined function for page rendering */}
      <div className="home-page">{renderPage()}</div>
      <Footer />
    </div>
  );
}
