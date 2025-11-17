import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
        <div className="text-primary text-3xl mb-3">
          <FaQuoteLeft />
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">{testimonial}</p>

        <div className="border-t border-dashed mb-4"></div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-700">
            <img src={user_photoURL} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-teal-800">{userName}</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
