import React from "react";
import { useForm } from "react-hook-form";

const AlertToBoat = ({ handleClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
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
        <h5 className="login-header mb-4 text-center">ارسال هشدار به شناور</h5>
        <div className="modal-body ps-5 pe-5 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-end">
              <label htmlFor="vesselName" className="form-label">
                متن پیام{" "}
              </label>
              <textarea
                rows={9}
                className="form-control"
                id="vesselName"
                required
                {...register("vesselName")}
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

export default AlertToBoat;
