import React from "react";
import useGetUnverifiedUsers from "../../hooks/users/useGetUnverifiedUsers";

function Users() {
  //  The iot admin token -_-
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg5NDg3MTMsImVtYWlsIjoiYWRtaW5AaW9tYXQuY29tIiwiaWF0IjoxNjk4OTEyNzEzfQ.DZKEDxD13-3Xfzr4A1oPIXpxt4eHmFXvjzMpOR1VZNE";
  const { data: unverifiedUsers } = useGetUnverifiedUsers({ token });
  return (
    <div className="container main_container my-5 py-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h3 className="fw-bolder text-center dark-text">
            کاربران تایید نشده
          </h3>
          <hr />
        </div>
      </div>
      {unverifiedUsers ? (
        <ul className="list-unstyled mx-auto">
          {unverifiedUsers.data?.map((user) => (
            <li className="my-4 d-flex justify-content-around">
              <img
                src="../../assets/user-avatar.svg"
                width="25px"
                height="25px"
              />
              <div style={{ width: "100px" }}>{user.firstName}</div>
              <div
                className="bg-secondary text-white rounded p-1 text-center"
                style={{ fontSize: "13px", width: "150px" }}
              >
                {user.email}
              </div>
              <div>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>سطح کاربری مورد نظر را انتخاب کنید</option>
                  <option value="CUSTOMER">کاربر عادی</option>
                  <option value="EXPERT">کارشناس</option>
                  <option value="ADMIN">مدیر</option>
                </select>
              </div>
              <div>
                <button className="btn btn-outline-success btn-sm ms-3">
                  تایید
                </button>
                <button className="btn btn-outline-danger btn-sm">حذف</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "کاربری یافت نشد"
      )}
    </div>
  );
}

export default Users;
