import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { userState } from "../../../atom/user";
import SearchBox from "./searchBoxPort";
import AddPort from "./addPort";
import useGetAllPorts from "../../../hooks/port/useGetAllPorts";

function Ports() {
  const [ports, setports] = useState([]);
  const [filter, setFilter] = useState(ports);
  const [addPort, setAddPort] = useState(false);
  const human = useRecoilValue(userState);

  const { data, isLoading } = useGetAllPorts();

  useEffect(() => {
    if (data) {
      setports(data.data);
      setFilter(data.data);
    }
  }, [data]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const handleNewPort = () => {
    if (human) {
      setAddPort(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید");
    }
  };

  const filterPorts = (cat) => {
    const updatedList = ports.filter((x) => x.country === cat);
    setFilter(updatedList);
  };

  const searchPorts = (result) =>{
    if(result){
      setFilter(result);
    }
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="container buttons d-flex justify-content-center mb-5">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => setFilter(ports)}
              >
                همه
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterPorts("ایران")}
              >
                ایران
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterPorts("ترکیه")}
              >
                ترکیه
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterPorts("عراق")}
              >
                عراق
              </button>
            </div>
          </div>
        </div>
        {filter.length !== 0 ? (
          filter.map((port) => {
            return (
              <div key={port.portId} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={port.portId}>
                  <img
                    src="/assets/port.jpg"
                    alt={port.portName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{port.portName}</h5>
                    <p className="card-text lead fw-bold">{port.portSerial}</p>
                    <NavLink
                      to={`/ports/${port.portId}`}
                      className="btn btn-outline-dark"
                    >
                      اطلاعات بیشتر
                    </NavLink>
                    <button className="btn btn-outline-danger ms-2">
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-secondary">
            موردی برای نمایش وجود ندارد
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container main_container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h3 className="display-6 fw-bolder text-center dark-text">
            لیست بندر ها
          </h3>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between mt-4">
            <div>
              <SearchBox handleResult={searchPorts}/>
            </div>
            <button className="btn btn-dark" onClick={handleNewPort}>
              افزودن بندر جدید <AiOutlinePlus />
            </button>
            {addPort && <AddPort handleClose={() => setAddPort(false)} />}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {isLoading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Ports;
