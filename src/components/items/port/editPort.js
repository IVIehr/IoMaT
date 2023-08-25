import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditPort = ({ prevData, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  const editPortService = async (data) => {
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
    // editPortService(data);
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
        <h5 className="login-header mb-4 text-center">ویرایش بندر</h5>
        <div className="modal-body ps-5 pe-5 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-end">
              <label htmlFor="portName" className="form-label">
                نام بندر
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portName"
                value={prevData.portName}
                required
                {...register("portName")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="portSerial" className="form-label">
                سریال بندر
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portSerial"
                value={prevData.portSerial}
                required
                {...register("portSerial")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="portType" className="form-label">
                نوع بندر
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portType"
                value={prevData.portType}
                {...register("portType")}
              />
            </div>
            <div className="mb-3 text-end">
              <label className="form-label">موقعیت جغرافیایی</label>
              <div className="d-flex justify-content-between gap-4">
                <input
                  type="text"
                  className="form-control text-secondary"
                  id="latitude"
                  placeholder="latitude"
                  value={prevData.latitude}
                  {...register("latitude")}
                />
                <input
                  type="text"
                  className="form-control text-secondary"
                  id="longitude"
                  placeholder="longitude"
                  value={prevData.longitude}
                  {...register("longitude")}
                />
              </div>
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

export default EditPort;