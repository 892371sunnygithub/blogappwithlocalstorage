import React, { useEffect, useState } from "react";
import TableHead from "./tablehead";
import { useGlobalContext } from "../../../context";
import { Badge } from "react-bootstrap";
import { toast } from "react-toastify";
import "./index.css";
const UserListing = () => {
  const { getFormDataFromLocalStorage } = useGlobalContext();
  const [wholeData, setWholeData] = useState([]);
  const withoutadmindata = wholeData.filter(
    (curElm) => curElm.name !== "super admin"
  );

  const statusHandler = (id) => {
    if (window.confirm("are you sure to change this status")) {
      const updatedData = wholeData.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      );
      setWholeData(updatedData);
      localStorage.setItem("formDataArray", JSON.stringify(updatedData));
      const statusMessage =
        updatedData.find((user) => user.id === id).status === "active"
          ? true
          : false;
      if (statusMessage) {
        toast.success("user active successfull");
      } else {
        toast.error("user inactive successfull");
      }
    }
  };

  useEffect(() => {
    setWholeData(getFormDataFromLocalStorage());
  }, []);
  return (
    <div className="userlisting">
      <h4 className="mb-0">USER LISTING </h4>
      <div className="tabledata">
        <table className="table table-responsive">
          <thead>
            <tr>
              {TableHead.map((curElm, index) => (
                <th key={index}>{curElm} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {withoutadmindata && withoutadmindata.length > 0 ? (
              withoutadmindata.map((curElm, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{curElm.name}</td>
                  <td>{curElm.email}</td>
                  <td>{curElm.phone}</td>
                  <td>{curElm.address}</td>
                  <td>
                    <Badge
                      className="cursor w-100"
                      bg={curElm.status === "active" ? "success" : "danger"}
                      onClick={() => statusHandler(curElm.id)}
                    >
                      {curElm.status}
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={TableHead.length}>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListing;
