import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "../home.module.css";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
const ImageSlider = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <p className={styles.slideText}>{slide.text}</p>
            <h1 className={styles.slideDesc}>{slide.desc}</h1>
            <Image
              className={styles.slideImage}
              src={slide.image}
              alt="banner-im"
            />

            <div className={styles.socialIcons}>
              <ul>
                <li>
                  <CiFacebook />
                </li>
                <li>
                  <CiTwitter />
                </li>
                <li>
                  <CiInstagram />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
