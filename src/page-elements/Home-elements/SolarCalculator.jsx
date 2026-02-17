// src/components/SolarCalculator.jsx

import { useState } from "react";

export default function SolarCalculator() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    bill: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Calculation Submitted 🚀");
  };

  return (
    <section className="solar-section">
      <div className="container ">
        <div className="solar-box">
          {/* LEFT */}
          <div className="solar-left">
            <span className="sub-txt">SOLAR CALCULATOR</span>
            <h2 className="title text-animate">
              Your Solar Savings <span>Calculator</span>
            </h2>
            <p className="para fade-animate-up pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="solar-form" onSubmit={handleSubmit}>
            <select name="type" onChange={handleChange}>
              <option value="">—Please choose an option—</option>
              <option value="home">Home</option>
              <option value="business">Business</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Our Average Monthly Bill?"
              name="bill"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Required Solar Plant Capacity (in kW)"
              name="capacity"
              onChange={handleChange}
            />

            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </section>
  );
}
