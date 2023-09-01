import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import SearchBox from "./searchBoxBoat";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import AddBoat from "./addBoat";
import useGetAllBoats from "../../../hooks/boat/useGetAllBoats";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atom/user";

function Boats() {
  const [boat, setBoat] = useState([]);
  const [filter, setFilter] = useState(boat);
  const [addBoat, setAddBoat] = useState(false);
  const human = useRecoilValue(userState);

  const { data, isLoading } = useGetAllBoats();

  useEffect(() => {
    if (data) {
      setBoat(data.data);
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

  const filterBoat = (cat) => {
    const updatedList = boat.filter((x) => x.vesselType === cat);
    setFilter(updatedList);
  };

  const searchBoats = (result) => {
    if (result) {
      setFilter(result);
    }
  };

  const handleNewBoat = () => {
    if (human) {
      setAddBoat(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید");
    }
  };

  const ShowBoats = () => {
    return (
      <>
        <div className="container buttons d-flex justify-content-center mb-5">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => setFilter(boat)}
              >
                همه
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterBoat("باری")}
              >
                ناوبر باری
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterBoat("ship")}
              >
                ناوبر نفتی
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterBoat("jewelery")}
              >
                ناوبر تفریحی
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterBoat("electronics")}
              >
                ناوبر آب و هوا
              </button>
            </div>
          </div>
        </div>
        {filter.length !== 0 ? (
          filter.map((vessel) => {
            return (
              <div key={vessel.vesselId} className="col-md-3 mb-4">
                <div
                  className="card h-100 text-center p-4"
                  key={vessel.vesselId}
                >
                  <img
                    src="/assets/vessel.jpg"
                    alt={vessel.vesselName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{vessel.vesselName}</h5>
                    <p className="card-text lead fw-bold">
                      {vessel.vesselSerial}
                    </p>
                    <NavLink
                      to={`/boats/${vessel.vesselId}`}
                      className="btn btn-outline-dark"
                    >
                      اطلاعات بیشتر
                    </NavLink>
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
            لیست کشتی ها
          </h3>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between mt-4">
            <div>
              <SearchBox handleResult={searchBoats} />
            </div>
            <button className="btn btn-dark" onClick={handleNewBoat}>
              افزودن کشتی جدید <AiOutlinePlus />
            </button>
            {addBoat && <AddBoat handleClose={() => setAddBoat(false)} />}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {isLoading ? <Loading /> : <ShowBoats />}
      </div>
    </div>
  );
}

export default Boats;
