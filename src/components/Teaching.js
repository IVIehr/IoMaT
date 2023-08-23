import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Teaching() {
  const userState = useSelector((userState) => userState.handleUser);
  const navigate = useNavigate();

  const proceedTeaching = () => {
    if (userState !== null) {
      navigate("/cooperation");
    } else {
      toast.warning("لطفا ابتدا وارد شوید", { position: "bottom-right"});
    }
  };
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/teach.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold mb-4 dark-text">فرادرس</h1>
            <h5>تدریس و عضویت در هیات علمی بزرگترین دانشگاه کشور بر بستر وب</h5>
            <p className="lead mb-4">
            تدریس در فرادرس به دانش و تخصص شما دایره اثری به وسعت کل کشور می‌بخشد. دانش و تجربه‌ای که تاکنون محدود به زمان و جغرافیا بود، در فرادرس اوج گرفته و فارغ از هر گونه مرزی می‌شود. تدریس در فرادرس، تدریس برای آرمان «دانش بدون مرز» است.
            </p>
            <button
            onClick={proceedTeaching}
            className="btn btn-dark mt-4 mx-auto"
          >
            انتشار آموزش را شروع کنید
          </button>
          <ToastContainer rtl/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teaching;
