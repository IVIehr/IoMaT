import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPencilAlt } from "react-icons/fa";
import EditPort from "./editPort";
import useGetPort from "../../../hooks/port/useGetPort";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atom/user";

function Port() {
  const { id } = useParams();
  const [port, setPort] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const human = useRecoilValue(userState);

  const { data, isLoading } = useGetPort({ portId: id });

  useEffect(() => {
    if (data) {
      setPort(data.data);
    }
  }, [data]);

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
    if (human) {
      // && access == "owner"
      setEditModal(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید");
    }
  };

  const ShowPort = () => {
    return (
      <>
        <div className="col-md-6">
          <h2>{port.portName}</h2>
          <h5 className="text-uppercase text-black-50">نوع :{port.portType}</h5>
          <h5 className="text-black-50">کشور :{port.country}</h5>
          <img
            src="/assets/port.jpg"
            alt={port.portName}
            height="400px"
            width="400px"
          />
          <h5 className="mt-5 text-black-50"> درباره بندر</h5>
          <p>{port.about}</p>
        </div>
        <div className="col-md-6">
          <div className="border border-1 p-4">
            <div className="d-flex flex-column align-items-center">
              <h3 className="my-5 text-center">
                سریال بندر: {port.portSerial}
              </h3>
              <button className="btn btn-dark" onClick={handleEditPort}>
                ویرایش جزئیات <FaPencilAlt />
              </button>
              {editModal && (
                <EditPort
                  prevData={port}
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
        <div className="row py-5">{isLoading ? <Loading /> : <ShowPort />}</div>
      </div>
    </div>
  );
}

export default Port;
