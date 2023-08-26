import React from "react";
import { useForm } from "react-hook-form";
import useEditPort from "../../../hooks/port/useEditPort";

const EditPort = ({ prevData, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useEditPort();

  const removeEmptyFields = (data) => {
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] == null) {
        delete data[key];
      }
    });
    return data;
  };

  const onSubmit = (data) => {
    const cleanData = removeEmptyFields(data);
    mutate({
      data: { ...cleanData, portId: prevData.portId },
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
        <h5 className="login-header mb-4 text-center">ویرایش بندر</h5>
        <div className="modal-body ps-5 pe-5 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-end">
              <label htmlFor="portName" className="form-label">
                نام
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portName"
                placeholder={prevData.portName}
                {...register("portName")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="portType" className="form-label">
                نوع
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portType"
                placeholder={prevData.portType}
                {...register("portType")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="portSerial" className="form-label">
                شماره سریال
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="portSerial"
                placeholder={prevData.portSerial}
                {...register("portSerial")}
              />
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="country" className="form-label">
                کشور
              </label>
              <input
                type="text"
                className="form-control text-secondary"
                id="country"
                placeholder={prevData.country}
                {...register("country")}
              />
            </div>
            <div className="mb-3 text-end">
              <label className="form-label">موقعیت جغرافیایی</label>
              <div className="d-flex justify-content-between gap-4">
                <input
                  type="text"
                  className="form-control text-secondary"
                  id="latitude"
                  placeholder={`latitude: ${prevData.latitude}`}
                  {...register("latitude")}
                />
                <input
                  type="text"
                  className="form-control text-secondary"
                  id="longitude"
                  placeholder={`longitude: ${prevData.longitude}`}
                  {...register("longitude")}
                />
              </div>
            </div>
            <div className="mb-3 text-end">
              <label htmlFor="about" className="form-label">
                درباره
              </label>
              <textarea
                type="text"
                rows={5}
                className="form-control text-secondary"
                id="about"
                placeholder={prevData.about}
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

export default EditPort;
