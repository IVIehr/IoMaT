import React from "react";
import { useForm } from "react-hook-form";
import useAddBoat from "../../../hooks/boat/useAddBoat";

const AddBoat = ({ handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useAddBoat();

  const onSubmit = (data) => {
    mutate({
      data,
      successCallBack: () => {
        handleClose();
      },
    });
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
        <h5 className="login-header mb-4 text-center">افزودن شناور</h5>
        <div className="modal-body ps-5 pe-5 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-end">
              <label htmlFor="vesselName" className="form-label">
                نام
              </label>
              <input
                type="text"
                className="form-control"
                id="vesselName"
                required
                {...register("vesselName")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="vesselSerial" className="form-label">
                شماره سریال
              </label>
              <input
                type="text"
                className="form-control"
                id="vesselSerial"
                required
                {...register("vesselSerial")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="vesselType" className="form-label">
                نوع
              </label>
              <input
                type="text"
                className="form-control"
                id="vesselType"
                {...register("vesselType")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="vesselSize" className="form-label">
                ابعاد
              </label>
              <input
                type="text"
                className="form-control"
                id="vesselSize"
                {...register("vesselSize")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="flag" className="form-label">
                کشور
              </label>
              <input
                type="text"
                className="form-control"
                id="flag"
                {...register("flag")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="about" className="form-label">
                درباره
              </label>
              <textarea
                type="text"
                rows={5}
                className="form-control"
                id="about"
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

export default AddBoat;
