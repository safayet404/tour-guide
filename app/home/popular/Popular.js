import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@/app/home/home.module.css";
import p1 from "@/public/images/activities-1.jpg"
import p2 from "@/public/images/activities-2.jpg"
import p3 from "@/public/images/activities-3.jpg"
import p4 from "@/public/images/activities-4.jpg"
import p5 from "@/public/images/activities-5.jpg"

const popular_slider = [ 
  {
    price : "$ 125",
    activityTitle : "ATV",
    totalRating : 8.8,
    ratingLength : 321,
    star : 5,
    image : p1,
    description : "Where you will receive a safety briefing about how to operate your ATV and where frindly"

  },
  {
    price : "$ 125",
    activityTitle : "Yacth Excursion",
    totalRating : 8.8,
    ratingLength : 411,
    star : 4.8,
    image : p2,
    description : "Swim with manta rays and walk with Komodo dragons in the world-famous Komodo National Park"

  },
  {
    price : "$ 125",
    activityTitle : "Scuba Diving",
    totalRating : 8.8,
    ratingLength : 411,
    star : 3,
    image : p3,
    description : "We invite you dive the coastline first discovered by Columbus by Dressel Divers.You can't help feeling shipwreck."

  },
  {
    price : "$ 125",
    activityTitle : "Paragliding",
    totalRating : 8.8,
    ratingLength : 411,
    star : 4,
    image : p4,
    description : "Caribbean's highest mountain ranges,trucked in the heart of the country,where you'll find the lushest."

  },
  {
    price : "$ 125",
    activityTitle : "Horse Riding",
    totalRating : 8.8,
    ratingLength : 411,
    star : 5,
    image : p5,
    description : "Hop on a guided horseback ride around Constanza's gorgeous vallyes and villages.Routes offered include."

  },
]

const Popular = () => {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h1 className="destHeading">Popular Activities</h1>
      <p className="subHead">
        We offer you the most exciting activities so you can have the most
        unforgettable vacations.
      </p>
      <div className="container mx-auto px-5">
      <Slider {...settings}>
        {popular_slider.map((slide, index) => (
          <div key={index} className="popularSlide">
            <Image
              className="p-2"
              src={slide.image}
              alt="activity-img"
            />

            <p className="popularPrice">{slide.price}</p>

            <div className="popularCardOpacity">
              <div className="text-black">
                <h2 className="text-xl font-semibold">{slide.activityTitle}</h2>
                <div className="flex items-center mt-2">
                  <h1 className="popularRating">{slide.totalRating}</h1>
                  <div>
                    <h1 className="ml-1 ">
                      
                      <ReactStars
                        count={5}
                     
                        size={18}
                        activeColor="#ffd700"
                        value={slide.star}
                      />
                    </h1>
                    <span className="ml-1 text-black popularRatingLength">{slide.ratingLength}</span>
                  </div>
                </div>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </Slider>
    </div>
    </div>
  );
};

export default Popular;
