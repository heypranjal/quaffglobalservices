import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "rgba(0, 123, 255, 0.7)", // semi-transparent blue
        color: "white",
        cursor: "pointer",
        fontSize: "20px",
        lineHeight: "40px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 9999,
        opacity: 0.7,
        transition: "opacity 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
