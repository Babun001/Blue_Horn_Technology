import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-2.jpg";
// import "./about.css";

const AboutSection = () => {
  return (
    <section className="about-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="about-images">
              <img src={img1} className="about-img-main reveal-left" alt="" />
              <img src={img2} className="about-img-small reveal-left" alt="" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <span className="sub-txt">ABOUT US</span>
            <h2 className="title text-animate">
              About Green <span className="highlight">Energy Solar</span>
            </h2>

            <p className="para fade-animate-up">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="about-list">
              <p>
                <FaCheckCircle /> Solar Inverter Setup
              </p>
              <p>
                <FaCheckCircle /> Battery Storage Solutions
              </p>
              <p>
                <FaCheckCircle /> Solar Material Financing
              </p>
              <p>
                <FaCheckCircle /> 24×7 Call & Chat Support
              </p>
            </div>

            <button class="animated-button fade-animate-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Read More </span>
              <span class="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
