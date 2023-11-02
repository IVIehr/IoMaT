import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atom/user";

const UserInfo = () => {
  const human = useRecoilValue(userState);

  return (
    <>
      {human && human.info && (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <img width="50px" height="50px" src="../assets/user-avatar.svg" />
          <div className="mt-2">{human.info.data.firstName}</div>
          <div className="mt-1 text-secondary" style={{fontSize: "13px"}}>سطح کاربری: {human.info.data.role === "CUSTOMER" ? "کاربر عادی" : human.info.data.role === "EXPERT" ? "کارشناس" : "مدیر" }</div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
