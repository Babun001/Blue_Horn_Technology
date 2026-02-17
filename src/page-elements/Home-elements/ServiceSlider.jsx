// src/components/ServiceSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/img/service-2.jpg";
import img2 from "../../assets/img/service-3.jpg";
import img3 from "../../assets/img/service-4.jpg";
import img4 from "../../assets/img/service-5.jpg";
import {
  FaSolarPanel,
  FaLeaf,
  FaBolt,
  FaChargingStation,
} from "react-icons/fa";

const services = [
  {
    title: "Solar Solutions",
    desc: "Smart solar installations designed for homes and commercial spaces.",
    img: img1,
    icon: <FaBolt />,
  },
  {
    title: "Solar PV Systems",
    desc: "High-efficiency photovoltaic systems for reliable clean energy.",
    img: img2,
    icon: <FaSolarPanel />,
  },
  {
    title: "Hybrid Energy",
    desc: "Integrated hybrid power solutions combining solar and grid energy.",
    img: img3,
    icon: <FaLeaf />,
  },
  {
    title: "EV Charging",
    desc: "Fast and smart EV charging stations powered by renewable energy.",
    img: img4,
    icon: <FaChargingStation />,
  },
];

const ServiceSlider = () => {
  return (
    <section className="service-slider-wrapper">
      <div className="container">
        <h5 className="sub-txt text-center">Our services</h5>
        <h2 className="title text-animate text-center">
          Best Offer For <span>Renewable Energy</span>
        </h2>

        <p className="para fade-animate-up text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry’s standard dummy
          text.
        </p>
        <div className="service-sec">
          <Swiper
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img src={service.img} alt={service.title} />

                  <div className="icon">{service.icon}</div>

                  <div className="content">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
