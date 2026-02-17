// src/components/WhyChooseUs.jsx

import { FaHome, FaCertificate, FaThumbsUp, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Efficiency & Power",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: <FaHome />,
  },
  {
    title: "Trust & Warranty",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: <FaCertificate />,
  },
  {
    title: "High Quality Work",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: <FaThumbsUp />,
  },
  {
    title: "24*7 Support",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: <FaHeadset />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        {/* <span className="small-title">⚡ WHY CHOOSE US</span>
        <h2>Providing Solar Energy Solutions</h2> */}
        <h5 className="sub-txt text-center">Why Choose Us</h5>
        <h2 className="title text-animate text-center">
          Providing Solar Energy <span>Solutions</span>
        </h2>

        <p className="para fade-animate-up text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry’s standard dummy
          text.
        </p>

        <div className="why-grid">
          {features.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
