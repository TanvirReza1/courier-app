import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const SendParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const centers = useLoaderData();
  const regionsDuplicate = centers.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo,usecallback

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const filteredRegion = centers.filter((c) => c.region === region);
    const districts = filteredRegion.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    const isDocument = data.parcelType === "Document";

    const parcelWeight = parseFloat(data.parcelWeight);
    console.log(isSameDistrict);
    console.log(isDocument);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Are you agree with the cost?",
      text: `You wil be charged ${cost} tk `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post("/parcels", data)
          .then((res) => console.log("after saving parcel", res.data));

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="text-black mt-12 p-4"
      >
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              value="Document"
              className="radio"
              {...register("parcelType")}
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="Non-Document"
              {...register("parcelType")}
              className="radio"
            />
            Non-Document
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="parcel weight"
            />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* sender details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="sender name"
            />
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="sender email"
            />

            <label className="label">Sender Region</label>
            <select
              {...register("senderRegion")}
              defaultValue="Pick a region"
              className="select"
            >
              <option value="">Pick a region</option>

              {regions.map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="label">Sender district</label>
            <select
              {...register("senderDistrict")}
              defaultValue="Pick a district"
              className="select"
            >
              <option value="">Pick a district</option>

              {districtsByRegion(senderRegion).map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="sender Address"
            />

            <label className="label mt-4">Sender Phone No</label>
            <input
              type="text"
              {...register("senderPhoneNO")}
              className="input w-full"
              placeholder="sender Phoen No"
            />
            <label className="label mt-4"> Pickup Instruction</label>
            <textarea
              rows={10}
              {...register("pickUpInstruction")}
              className="textarea textarea-bordered input w-full  "
              placeholder="pickup instruction"
            ></textarea>
          </fieldset>

          {/* receiver details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="receiver name"
            />
            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver email"
            />

            <label className="label">Receiver Region</label>
            <select
              {...register("receiverRegion")}
              defaultValue="Pick a region"
              className="select"
            >
              <option value="">Pick a region</option>

              {regions.map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="label">Receiver District</label>
            <select
              {...register("receiverDistrict")}
              defaultValue="Pick a region"
              className="select"
            >
              <option value="">Pick a District</option>

              {districtsByRegion(receiverRegion).map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="receiver Address"
            />

            <label className="label mt-4">Receiver Phone No</label>
            <input
              type="text"
              {...register("receiverPhoneNO")}
              className="input w-full"
              placeholder="receiver Phoen No"
            />
            <label className="label mt-4"> Pickup Instruction</label>
            <textarea
              rows={10}
              {...register("pickUpInstruction")}
              className="textarea textarea-bordered input w-full  "
              placeholder="pickup instruction"
            ></textarea>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn btn-primary  text-black"
          value="Send-Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
