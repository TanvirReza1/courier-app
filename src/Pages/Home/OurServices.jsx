import React from "react";
import image from "../../assets/heart.png";

const OurServices = () => {
  return (
    <div className="bg-secondary max-w-7xl mx-auto px-6 py-16 rounded-2xl">
      <div className="text-center mb-17">
        <h2 className="font-semibold text-white">Our Services</h2>
        <p className="text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels nationwide with home delivery in every
              district, ensuring your products reach customers within 48–72
              hours.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We also offer customized service with inventory management
              support, online order processing, packaging, and after sales
              support.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              100% cash on delivery anywhere in Bangladesh with guaranteed
              safety of your product.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              Through our reverse logistics facility we allow end customers to
              return or exchange their products with online business merchants.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We also offer customized service with inventory management
              support, online order processing, packaging, and after sales
              support.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm hover:bg-primary">
          <figure className="px-10 pt-10 ">
            <img src={image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
