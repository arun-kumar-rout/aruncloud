import React, { useContext, useEffect } from "react";
import { ShowToastContext } from "../../context/ShowToastContext";

const Toast = ({msg}) => {
  // crearing toast message after 3 sec
  const {toastMsg, setToastMsg} = useContext(ShowToastContext);
  useEffect(() => {
    setInterval(() => {
      setToastMsg(null)
    }, 3000)
  },[toastMsg, setToastMsg])
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default Toast;
