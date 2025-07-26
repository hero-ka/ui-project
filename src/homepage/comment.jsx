import '../csshomepage/comment.css';
import Iccon from '../Icon/Icon';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Comment() {
  const comments = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co."
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co."
    },
    {
      name: "James L.",
      text: "The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
      name: "Nina R.",
      text: "Shop.co has completely changed the way I shop for clothes. Their quality and design are unmatched."
    },
    {
      name: "Daniel B.",
      text: "Excellent customer service and fantastic product quality. Shop.co never disappoints!"
    }
  ];

  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <h1 className="commenth1">OUR HAPPY CUSTOMERS</h1>
        <div className="arrows">
          <div className="swiper-button-prev-custom"><FaArrowLeft size={24} /></div>
          <div className="swiper-button-next-custom"><FaArrowRight size={24} /></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.5}
        navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {comments.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="comment-card">
              <div className="stars">
                {[...Array(4)].map((_, i) => <Iccon key={i} icon="littlestar" />)}
              </div>
              <div className="name-tick">
                <h2 className="commenth2">{item.name}</h2>
                <Iccon icon="tick" />
              </div>
              <p className="comment-text">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comment;