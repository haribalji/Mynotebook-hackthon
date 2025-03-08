

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Mynotebook. All rights reserved.
        </p>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className="btn btn-primary"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: showScroll ? "block" : "none",
          borderRadius: "50%",
          padding: "10px 15px",
          zIndex: 1000,
        }}
        aria-label="Scroll to top"
      >
        &#8679;
      </button>
    </footer>
  );
};

export default Footer;
