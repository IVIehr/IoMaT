import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditBoat = ({ prevData, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  const editBoatService = async (data) => {
    const boatData = { ...data, inTransit: false };
    try {
      await axios
        .post("http://77.237.82.37:4041/vessel/add", boatData, {
          // required patch service to update vessel
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            handleClose();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const onSubmit = (data) => {
    // editBoatService(data);
    reset();
  };

  return (
    <div className="modal d-block">
      <section className="modal-main p-4 rounded-3 w-50 overflow-auto h-75">
        <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
          <button
            type="button"
            className="btn-close"
            onClick={(e) => {
              handleClose();
              reset();
            }}
          ></button>
        </div>
        <h5 className="login-header mb-4 text-center">ویرایش کشتی</h5>
        <div className="modal-body ps-5 pe-5 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-end">
              <label htmlFor="vesselName" className="form-label">
                نام کشتی
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="vesselName"
                value={prevData.vesselName}
                required
                {...register("vesselName")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="vesselSerial" className="form-label">
                سریال کشتی
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="vesselSerial"
                value={prevData.vesselSerial}
                required
                {...register("vesselSerial")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="vesselType" className="form-label">
                نوع کشتی
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="vesselType"
                value={prevData.vesselType}
                {...register("vesselType")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="about" className="form-label">
                درباره کشتی
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="about"
                value={prevData.about}
                {...register("about")}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 my-4">
              تایید
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditBoat;
