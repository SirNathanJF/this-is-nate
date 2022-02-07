// Node modules.
import React, { useState } from "react";
// Relative imports.
import About from "../../pages/About";
import Footer from "../Footer";
import Home from "../../pages/Home";
import Navigation from "../Navigation";
import Portfolio from "../../pages/Portfolio";
import { Wrapper } from "./styles";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check to see what page is current, and reader specific component based on which page is current.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Wrapper>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {/* Call our previously defined function for page rendering */}
      <main>{renderPage()}</main>

      <Footer />
    </Wrapper>
  );
}
