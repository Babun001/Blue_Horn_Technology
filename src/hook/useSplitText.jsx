import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSplitText = () => {
  useEffect(() => {
    const splitElements = document.querySelectorAll(".text-animate");

    splitElements.forEach((el) => {
      if (el.dataset.gsapSplit) return;

      // Save original HTML (important)
      const originalHTML = el.innerHTML;
      el.innerHTML = "";

      // Temporary div to parse HTML
      const temp = document.createElement("div");
      temp.innerHTML = originalHTML;

      const walkNodes = (node) => {
        if (node.nodeType === 3) {
          // TEXT NODE
          node.textContent.split(" ").forEach((word, i, arr) => {
            const wordSpan = document.createElement("span");
            wordSpan.classList.add("word");

            word.split("").forEach((char) => {
              const charSpan = document.createElement("span");
              charSpan.classList.add("char");
              charSpan.textContent = char;
              wordSpan.appendChild(charSpan);
            });

            el.appendChild(wordSpan);

            if (i < arr.length - 1) {
              el.appendChild(document.createTextNode(" "));
            }
          });
        } else if (node.nodeType === 1) {
          // ELEMENT NODE (like your span highlight)
          const cloned = node.cloneNode(false);
          el.appendChild(cloned);
          [...node.childNodes].forEach((child) => walkNodes(child));
        }
      };

      [...temp.childNodes].forEach((n) => walkNodes(n));

      el.dataset.gsapSplit = "true";

      gsap.fromTo(
        el.querySelectorAll(".char"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        },
      );
    });
  }, []);
};
