import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import doc2 from "../assets/img/doc2.jpg";

const Doctors = () => {
  const data = [
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },

    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-5xl font-bold text-center lg:text-center mb-4">
            الممرضة عُلا
          </h1>
          <p className="text-xl text-center lg:text-center max-w-3xl mx-auto">
            عُلا هي ممرضة متفانية في عملها، تتمتع بمهارات عالية في تقديم الرعاية
            الصحية. تسعى دائمًا لضمان راحة مرضاها وتقديم الدعم النفسي والمهني
            لهم. إليك بعض من الخدمات التي تقدمها:
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-4">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
