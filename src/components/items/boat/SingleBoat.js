import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaPencilAlt, FaSailboat } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { IoMdLocate } from "react-icons/io";
import { GiFishingBoat } from "react-icons/gi";
import EditBoat from "./editBoat";
import useGetBoat from "../../../hooks/boat/useGetBoat";
import AlertToBoat from "./alertToBoat";

function Boat() {
  const { id } = useParams();
  const [boat, setBoat] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const userState = useSelector((userState) => userState.handleUser);
  const { data, isLoading } = useGetBoat({ vesselId: id });

  useEffect(() => {
    if (data) {
      setBoat(data.data);
    }
  }, [data]);

  // State of not loading the data => show the skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={300} />
          <Skeleton height={400} width={400} />
          <Skeleton height={80} width={250} />
          <Skeleton height={80} width={250} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={150} />
        </div>
      </>
    );
  };

  const handleEditBoat = () => {
    if (userState !== null) {
      // && access == "owner"
      setEditModal(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید");
    }
  };

  const handleSendAlert = () => {
    if (userState !== null) {
      // && access == "owner"
      setAlert(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید");
    }
  };

  const ShowBoat = () => {
    return (
      <>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {boat.vesselType}</h4>
          <h1 className="display-5">{boat.vesselName}</h1>
          <img
            src="/assets/vessel.jpg"
            alt={boat.vesselName}
            height="400px"
            width="400px"
          />
          <h5 className="mt-5">توضیحات تکمیلی</h5>
          <p className="lead">{boat.about}</p>
          <h5 className="mt-5">مشخصات ایجاد کننده</h5>
          <p className="lead">{boat.ownerEmail}</p>
        </div>
        <div className="col-md-6">
          <div className="border border-1 p-4">
            <h3 className="my-5 text-center">سریال کشتی:{boat.vesselSerial}</h3>
            <div className="d-flex flex-row justify-content-center">
              <button className="btn btn-dark mx-2" onClick={handleEditBoat}>
                ویرایش جزئیات <FaPencilAlt />
              </button>
              {editModal && (
                <EditBoat
                  prevData={boat}
                  handleClose={() => setEditModal(false)}
                />
              )}
              <button
                className="btn btn-warning mx-2"
                onClick={handleSendAlert}
              >
                ارسال هشدار <AiFillAlert />
              </button>
              {alert && (
                <AlertToBoat
                  handleClose={() => {
                    setAlert(false);
                  }}
                />
              )}
            </div>
            <div
              className="d-flex justify-content-between text-primary"
              style={{ marginTop: "4em" }}
            >
              <TiLocation />
              <div className="d-flex">
                <div class="separator"></div>
                <GiFishingBoat className="blink_me fs-3" />
                <div class="separator"></div>
              </div>
              <IoMdLocate />
            </div>
            <div className="d-flex justify-content-between text-primary">
              <span style={{ fontSize: "9pt", marginTop: "10px" }}>
                تاریخ رسیدن
              </span>
              <span style={{ fontSize: "9pt", marginTop: "10px" }}>
                تاریخ حرکت
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">{isLoading ? <Loading /> : <ShowBoat />}</div>
      </div>
    </div>
  );
}

export default Boat;
