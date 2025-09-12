// src/layout/Layout.js
import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

function Layout({ children }) {
  return (
    <div>
      {/* Accessibility link */}
      <a href="#main-content" className="visually-hidden-focusable">
        Skip to main content
      </a>
      <TopBar />
      <NavBar />

      {/* Page-specific content */}
      <main id="main-content" className="container-fluid p-0">
        {children}
      </main>
    </div>
  );
}

export default Layout;
