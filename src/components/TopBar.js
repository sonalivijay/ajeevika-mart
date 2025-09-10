import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

function TopBar() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  // Language change handler
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="bg-dark text-light py-1 px-3 d-flex justify-content-between align-items-center">
      {/* Left Side */}
      <div className="d-flex align-items-center">
        <a
          href="https://www.india.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-light d-flex align-items-center"
        >
          <img
            src="/assets/images/India_flag_300.png"
            alt="India Flag"
            style={{ width: "30px", marginRight: "8px" }}
          />
          <span>{i18n.t("government")}</span>
        </a>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center">
        {/* Font size controls */}
        <button className="btn btn-sm btn-outline-light me-2">A+</button>
        <button className="btn btn-sm btn-outline-light me-2">A-</button>
        <button className="btn btn-sm btn-outline-light me-2">A</button>

        {/* Language */}
        <select
          className="form-select form-select-sm d-inline-block w-auto me-2"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>

        {/* Theme toggle */}
        <button
          className="btn btn-sm btn-outline-light me-2"
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* More dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="outline-light"
            size="sm"
            id="dropdown-more"
          >
            More
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#main-content">
              Skip to Main Content
            </Dropdown.Item>
            <Dropdown.Item href="/accessibility">
              Accessibility Help
            </Dropdown.Item>
            <Dropdown.Item href="/feedback">Feedback</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopBar;
