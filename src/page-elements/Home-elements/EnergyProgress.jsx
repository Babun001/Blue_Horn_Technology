import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
// import img from "../../assets/img/solar-worker.jpg";
import img from "../../assets/img/cta-image.jpg";

const skillsData = [
  { title: "Solar Panels", value: 95 },
  { title: "Hybrid Energy", value: 80 },
  { title: "Marketing", value: 70 },
];

export default function EnergyProgress() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [skills, setSkills] = useState(
    skillsData.map((s) => ({ ...s, current: 0 })),
  );

  // Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Number animation
  useEffect(() => {
    if (!animate) return;

    skillsData.forEach((skill, i) => {
      let count = 0;

      const interval = setInterval(() => {
        count++;
        setSkills((prev) =>
          prev.map((s, idx) => (idx === i ? { ...s, current: count } : s)),
        );

        if (count >= skill.value) clearInterval(interval);
      }, 15);
    });
  }, [animate]);

  return (
    <section className="energy-progress" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {/* LEFT */}
          <div className="col-md-6">
            <span className="sub-txt"> ENERGY PROGRESS</span>
            <h2 className="title text-animate">
              Best Solution For Your Solar Energy
            </h2>
            <p className="para fade-animate-up">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-md-6">
            {skills.map((item, i) => (
              <div className="progress-item" key={i}>
                <div className="progress-head">
                  <span>{item.title}</span>
                  <span>{item.current}%</span>
                </div>

                <div className="progress-track">
                  <span
                    style={{
                      width: animate ? `${item.current}%` : "0%",
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <img src={img} alt="" />

          <div className="cta-content">
            <div className="cta-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>
                Have Questions? <span>Call Us</span> 800-001-658
              </h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
