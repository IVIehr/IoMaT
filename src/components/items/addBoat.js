import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AddBoat = ({ modal, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  const registerBoat = async (data) => {
    const boatData = { ...data, inTransit: false };
    try {
      await axios
        .post("http://77.237.82.37:4041/vessel/add", boatData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message, { position: "bottom-right" });
            handleClose();
          } else {
            toast.error(res.data.message, { position: "bottom-right" });
          }
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const onSubmit = (data) => {
    registerBoat(data);
    reset();
  };

  return (
    <>
      {modal && (
        <>
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
              <h5 className="login-header mb-4 text-center">افزودن کشتی</h5>
              <div className="modal-body ps-5 pe-5 pt-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 text-end">
                    <label htmlFor="vesselName" className="form-label">
                      نام کشتی
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
                      سریال کشتی
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
                      نوع کشتی
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vesselType"
                      {...register("vesselType")}
                    />
                  </div>
                  <div className="mb-3 text-end">
                    <label htmlFor="about" className="form-label">
                      درباره کشتی
                    </label>
                    <input
                      type="text"
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
          <ToastContainer rtl />
        </>
      )}
    </>
  );
};

export default AddBoat;
