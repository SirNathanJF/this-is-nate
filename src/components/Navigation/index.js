// Node modules.
import React from "react";
// Relative imports.
import { Wrapper } from "./styles";

// object destructure the function so we can pass in our specific props
function Navigation({ currentPage, handlePageChange }) {
  return (
    <Wrapper>
      <h2 onClick={() => handlePageChange("Home")}>Nathan Flessner</h2>

      <ul>
        <li>
          <button
            className={currentPage === "About" ? "active" : ""}
            onClick={() => handlePageChange("About")}
            type="button"
          >
            About
          </button>
        </li>
        <li>
          <button
            className={currentPage === "Portfolio" ? "active" : ""}
            onClick={() => handlePageChange("Portfolio")}
            type="button"
          >
            Portfolio
          </button>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1KoXk_cldRrMcJQxdgn5SK9qlKjHy0kJ4/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}
export default Navigation;
