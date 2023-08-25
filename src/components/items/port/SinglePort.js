import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

function Port() {
  const { id } = useParams();
  const [port, setPort] = useState([]);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((userState) => userState.handleUser);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const getPort = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://77.237.82.37:4041/port/get/id?portId=${id}`
      );
      setPort(response.data.data[0]);
      setLoading(false);
    };
    getPort();
  }, []);

  // State of not loading the data => show the skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={100} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={150} />
        </div>
      </>
    );
  };

  const handleEditPort = () => {
    if (userState !== null) {
      navigate("/cooperation");
    } else {
      toast.info("لطفا ابتدا وارد شوید", { position: "bottom-right" });
    }
  };

  const ShowPort = () => {
    return (
      <>
        <div className="col-md-6">
          <h5 className="text-uppercase text-black-50">نوع :{port.portType}</h5>
          <h1 className="display-5">{port.portName}</h1>
          <img
            src="/assets/port.jpg"
            alt={port.portName}
            height="400px"
            width="400px"
          />
          <h5 className="mt-5"> درباره بندر</h5>
          <p className="lead">{port.about}</p>
        </div>
        <div className="col-md-6">
          <div className="border border-1 p-4">
            <div className="d-flex flex-column align-items-center">
              <h3 className="my-5 text-center">
                سریال بندر: {port.portSerial}
              </h3>
              <button className="btn btn-dark" onClick={handleEditPort}>
                ویرایش جزئیات <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">{loading ? <Loading /> : <ShowPort />}</div>
      </div>
      <ToastContainer rtl />
    </div>
  );
}

export default Port;
