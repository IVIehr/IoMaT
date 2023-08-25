import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import EditBoat from "./editBoat";

function Boat() {
  const { id } = useParams();
  const [boat, setBoat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const userState = useSelector((userState) => userState.handleUser);
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  // Fetch data from API
  useEffect(() => {
    const getBoat = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://77.237.82.37:4041/vessel/get?vesselId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBoat(response.data.data);
      setLoading(false);
    };
    getBoat();
  }, []);

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
            <div className="d-flex flex-column align-items-center">
              <h3 className="my-5 text-center">
                سریال کشتی:{boat.vesselSerial}
              </h3>
              <button className="btn btn-dark" onClick={handleEditBoat}>
                ویرایش جزئیات <FaPencilAlt />
              </button>
              {editModal && (
                <EditBoat
                  prevData={boat}
                  handleClose={() => setEditModal(false)}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">{loading ? <Loading /> : <ShowBoat />}</div>
      </div>
    </div>
  );
}

export default Boat;
