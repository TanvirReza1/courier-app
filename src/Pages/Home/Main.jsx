import React from "react";
import bus from "../../assets/Delivery Tracking.png";
const Main = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-8  max-w-7xl mx-auto">
      <div className="card w-[300px] h-[250px] bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <img src={bus} alt="" className="w-10 h-10" />
          <h2 className="card-title">Booking Pick & Drop</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <img src={bus} alt="" className="w-10 h-10" />
          <h2 className="card-title">Cash On Delivery</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <img src={bus} alt="" className="w-10 h-10" />
          <h2 className="card-title">Delivery Hub</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <img src={bus} alt="" className="w-10 h-10" />
          <h2 className="card-title">Booking SME & Corporate</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
