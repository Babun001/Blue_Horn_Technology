// src/hooks/useScrollReveal.js
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const revealItems = () => {
      const items = document.querySelectorAll(".reveal-left, .reveal-right");

      items.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealItems);
    revealItems();

    return () => window.removeEventListener("scroll", revealItems);
  }, []);
};

export default useScrollReveal;
