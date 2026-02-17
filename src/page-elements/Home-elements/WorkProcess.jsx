// src/components/WorkProcess.jsx

import { FaDraftingCompass, FaSearch, FaSolarPanel } from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Project Planning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaDraftingCompass />,
  },
  {
    id: "02",
    title: "Research & Analysis",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSearch />,
  },
  {
    id: "03",
    title: "Solar Installation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSolarPanel />,
  },
];

export default function WorkProcess() {
  return (
    <section className="work-process">
      <div className="container">
        <p className="sub-txt">OUR LATEST PROCESS</p>
        <h2 className="title text-animate">
          Our Work <span>Process</span>
        </h2>

        <div className="process-row">
          {steps.map((item, i) => (
            <div className="process-item" key={i}>
              <div className="icon-box">
                {item.icon}
                <span className="step">{item.id}</span>
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              {i !== steps.length - 1 && <span className="arrow"></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
