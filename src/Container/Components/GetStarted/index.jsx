import React from "react";
import "./index.css";
import { CustomGetStartedData } from "./customgetstarteddata";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const startHandler = () => {
    navigate(`/user/blogs/${user?.id}`);
  };
  return (
    <div className="getstarted">
      <div className="innerdata">
        <div className="text-center">
          <h1 className="text-white">{CustomGetStartedData.heading} </h1>
          <p className="text-white">{CustomGetStartedData.paragraph}</p>
          <button className="btn btn-secondary" onClick={() => startHandler()}>
            Enter In The World
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
