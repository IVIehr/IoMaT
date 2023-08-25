import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import SearchBox from "../../searchBox";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import AddPort from "./addPort";
import axios from "axios";

function Ports() {
  const [ports, setports] = useState([]);
  const [filter, setFilter] = useState(ports);
  const [loading, setLoading] = useState(false);
  const [addPort, setAddPort] = useState(false);
  const userState = useSelector((userState) => userState.handleUser);
  let componentMouted = true;

  useEffect(() => {
    const getPorts = async () => {
      setLoading(true);
      const response = await axios.get("http://77.237.82.37:4041/port/get");
      if (componentMouted === true) {
        setports(response.data.data);
        setFilter(response.data.data);
        setLoading(false);
      }
      return () => {
        componentMouted = false;
      };
    };

    getPorts();
  }, []);

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
    if (userState !== null) {
      setAddPort(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید", { position: "bottom-right" });
    }
  };

  const filterProduct = (cat) => {
    const updatedList = ports.filter((x) => x.portType === cat);
    setFilter(updatedList);
  };

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
                onClick={() => filterProduct("men's clothing")}
              >
                دریای خزر
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("women's clothing")}
              >
                خلیج فارس
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("jewelery")}
              >
                دریای عمان
              </button>
            </div>
          </div>
        </div>
        {filter.map((port) => {
          return (
            <div key={port.portId} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={port.portId}>
                <img
                  src="/assets/port.jpg"
                  alt={port.portName}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {port.portName}
                  </h5>
                  <p className="card-text lead fw-bold">{port.portSerial}</p>
                  <NavLink
                    to={`/ports/${port.portId}`}
                    className="btn btn-outline-dark"
                  >
                    اطلاعات بیشتر
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h3 className="display-6 fw-bolder text-center dark-text">
            لیست بندر ها
          </h3>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between mt-4">
            <div>
              <SearchBox itemToSearch="بندر" />
            </div>
            <button className="btn btn-dark" onClick={handleNewPort}>
              افزودن بندر جدید <AiOutlinePlus />
            </button>
            {addPort && <AddPort handleClose={() => setAddPort(false)} />}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
      <ToastContainer rtl />
    </div>
  );
}

export default Ports;
