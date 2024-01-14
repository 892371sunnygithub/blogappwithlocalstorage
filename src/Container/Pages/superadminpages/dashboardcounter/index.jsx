import React, { useEffect, useState } from "react";
import { CiCircleList } from "react-icons/ci";
import FirstChart from "../charts/FirstChart";
import SecondChart from "../charts/SecondChart";
import "./index.css";
import { useGlobalContext } from "../../../context";
import { NavLink } from "react-router-dom";
const DashboardCounter = () => {
  const [usersData, setUsersData] = useState([]);
  const {
    blogs,
    setBlogs,
    getFormDataFromLocalStorage,
    getBlogsDataFromLocalStorage,
  } = useGlobalContext();
  const wholeData = usersData.filter((curElm) => curElm.name !== "super admin");
  const uniquebloger = Array.from(
    new Set(blogs.map((item) => item.userid))
  ).map((userid) => {
    const blog = blogs.find((item) => item.userid === userid);
    return {
      userid: blog.userid,
      username: blog.username,
      category: blog.blogtitle,
    };
  });
  useEffect(() => {
    setUsersData(getFormDataFromLocalStorage());
    setBlogs(getBlogsDataFromLocalStorage());
  }, []);
  return (
    <div className="dashCounterWrapper">
      <h4 className="mb-0">DASHBOARD COUNTER</h4>
      <div className="row">
        <div className="col-md-6">
          <NavLink className={"nav-link"} to={"/admin/users"}>
            <div className="counterCard">
              <div className="cardLeftData">
                <h5>Total Users</h5>
                <h4>
                  {wholeData && wholeData.length > 0 ? wholeData.length : ""}
                </h4>
              </div>
              <div className="cardRightData">
                <span>
                  <CiCircleList />
                </span>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col-md-6">
          <NavLink className={"nav-link"} to="/admin/bloger/list">
            <div className="counterCard">
              <div className="cardLeftData">
                <h5>Blogers</h5>
                <h4>
                  {uniquebloger && uniquebloger.length > 0
                    ? uniquebloger.length
                    : ""}
                </h4>
              </div>
              <div className="cardRightData">
                <span>
                  <CiCircleList />
                </span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="row pt-5 pb-5 d-none">
          <div className="col-12">
            <h4>Pie Chart </h4>
            <SecondChart />
          </div>
        </div>
        <div className="row d-none">
          <div className="col-12">
            <h4>Bar Chart </h4>
            <FirstChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCounter;
