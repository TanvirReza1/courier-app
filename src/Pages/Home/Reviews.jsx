import React, { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviewData = use(reviewsPromise);
  console.log(reviewData);
  return (
    <div>
      <div>
        <h3 className="text-3xl text-center">Reviews</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          molestias earum omnis maiores quia, minima facere quis quisquam ipsa
          explicabo asperiores iste soluta adipisci laborum similique aliquam
          exercitationem porro tenetur.
        </p>
      </div>
      <>
        {" "}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
