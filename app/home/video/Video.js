
import Image from "next/image";
import React, { useState } from "react";
import bg from "@/public/images/video-bg.jpg";
import {FaPlay  } from "react-icons/fa";

import "@/app/home/home.module.css";
import CustomModal from "../modal/CustomModal";
const Video = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container px-4 mt-10">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="videoHead">Video Tour</p>
            <p className="videoSubHead">Adventure is out there</p>
          </div>
          <div>
            <p className="videoDesc">
              We offer our clients the most complete and unique open air
              adventure thrills they have ever experienced complete with
              unforgettable moments. Your safety is our most important mission
              and for this reason.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="videoContainer">
          <Image className="videoBackground" src={bg} alt="video-bg" />
          <button onClick={handleShow} className="videoIcons">
            <FaPlay />
          </button>
           <CustomModal show={show} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};


export default Video;
