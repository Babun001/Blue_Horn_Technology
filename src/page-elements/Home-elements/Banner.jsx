import Slider from "react-slick";
import { Link } from "react-router-dom";
import banner1 from "../../assets/img/hero.jpg";
// import banner2 from "../../assets/img/banner2.jpg";
// import banner3 from "../../assets/img/banner3.jpg";

function Banner() {
  const carouselData = [
    {
      id: 1,
      subtitle: "Welcome to solor",
      title: "Powering the Future With Renewable.",
      description:
        "Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit, eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.",
      image: banner1,
      link: "/contact",
    },
    {
      id: 2,
      subtitle: "Welcome to solor",
      title: "Powering the Future With Renewable.",
      description:
        "Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit, eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.",
      image: banner1,
      link: "/about",
    },
    {
      id: 3,
      subtitle: "Welcome to solor",
      title: "Powering the Future With Renewable.",
      description:
        "Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit, eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.",
      image: banner1,
      link: "/product",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="ban">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div className="item" key={item.id}>
            <div className="ban-sec">
              <img src={item.image} className="bg-zoom" alt={item.title} />
              <div className="container">
                <div className=" ban-sec-txt  text-white">
                  <h5 className="sub-txt text-white">{item.subtitle}</h5>
                  <h2 className="hero-h1 text-animate ">{item.title}</h2>
                  <p className="h1-para fade-animate-up">{item.description}</p>

                  <div className="hero-btns mt-4">
                    <Link to={item.link}>
                      <button className="animated-button me-3">
                        Explore More
                      </button>
                    </Link>

                    <Link to="/about">
                      <button className="animated-button outline-btn">
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Banner;
