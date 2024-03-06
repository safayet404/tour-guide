"use client";
import React from "react";

import styles from "@/app/home/home.module.css";
import SB1 from "@/public/images/hero-image.jpg"
import SB2 from "@/public/images/slider-bg-2.jpg"
import SB3 from "@/public/images/slider-bg-3.jpg"
import SB4 from "@/public/images/slider-bg-4.jpg"
import act1 from "@/public/images/sd.png";
import act2 from "@/public/images/pd.png";
import act3 from "@/public/images/bicycle.png";
import act4 from "@/public/images/atv.png";

import ImageSlider from "@/app/home/slider/ImageSlider";
import Activities from "@/app/home/activities/Activities";
import Destination from "./home/destination/Destination";
import DS1 from "@/public/images/destination-1.jpg"
import DS2 from "@/public/images/destination-2.jpg"
import DS3 from "@/public/images/destination-3.jpg"
import DS4 from "@/public/images/destination-4.jpg"
import DS5 from "@/public/images/destination-5.jpg"
import DS6 from "@/public/images/destination-6.jpg"
import Popular from "./home/popular/Popular";
import Video from "./home/video/Video";

const slides = [
  {
    image: SB1, 
    text: "Explore the world",
    desc: "A more rewarding way to travel",
  },
  {
    image: SB2,
    text: "Find your passion",
    desc: "escape life for a little while",
  },
  {
    image: SB2,
    text: "commit to travel",
    desc: "The real adventure is out there",
  },
  {
    image: SB4,
    text: "Be an adventurer",
    desc: "collecting memories every time",
  },
  // Add more slides as needed
];

const cardData = [
  {
    image : act1,
    title : "Scuba Diving",
    description : "Drenaline-pumping excursions for the experienced"
  },
  {
    image : act4,
    title : "ATV",
    description : "Start your engines and get ready for an adventure"
  },
  {
    image : act2,
    title : "Paragliding",
    description : "Wild landscapes and rough rivers and you will rafting."
  },
  {
    image : act3,
    title : "Cycling",
    description : "Thrilling off-road experience public roads maximum security."
  },
]

const destinationData = [
  {
    image : DS1,
    title : "New York",
    rating : 5,
  },
  {
    image : DS2,
    title : "Rome",
    rating : 5,
  },
  {
    image : DS3,
    title : "Machu Pichu",
    rating : 5,
  },
  {
    image : DS4,
    title : "Hawaii",
    rating : 5,
  },
  {
    image : DS5,
    title : "Canada",
    rating : 5,
  },
  {
    image : DS6,
    title : "Greece"
  },
]
const TopBanner = () => {
  return (
    <div>
      <ImageSlider slides={slides} />
      <Activities actCard={cardData} />
      <Destination dstCard={destinationData}/>
      <Popular />
      <Video />
    </div>
  );
};

export default TopBanner;
