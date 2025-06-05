import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly scrolls to the top
  }, [pathname]);

  return null; // renders nothing
};

export default ScrollToTopOnRouteChange;
