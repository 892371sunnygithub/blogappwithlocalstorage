import React, { useState } from "react";
import SteperOne from "../../Components/multi/SteperOne";
import SteperTwo from "../../Components/multi/SteperTwo";
import SteperThree from "../../Components/multi/SteperThree";
import "./index.css";
import SteperFifth from "../../Components/multi/SteperFifth";
import SteperFourth from "../../Components/multi/SteperFourth";
const MultiSteperForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    image: null,
    address: "",
    education: "",
    verified: false,
  });
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // New state

  const markStepAsCompleted = (step) => {
    setCompletedSteps([...completedSteps, step]);
  };

  const nextStepHandler = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const renderData = (
    step,
    handleInput,
    formData,
    handleImage,
    setFormData
  ) => {
    if (step === 1) {
      return (
        <SteperOne
          handleInput={handleInput}
          formData={formData}
          setFormData={setFormData}
          markAsCompleted={() => markStepAsCompleted(1)}
        />
      );
    } else if (step === 2) {
      return (
        <SteperTwo
          handleInput={handleImage}
          formData={formData}
          setFormData={setFormData}
          markAsCompleted={() => markStepAsCompleted(2)}
        />
      );
    } else if (step === 3) {
      return (
        <SteperThree
          handleInput={handleInput}
          formData={formData}
          setFormData={setFormData}
          markAsCompleted={() => markStepAsCompleted(3)}
        />
      );
    } else if (step === 4) {
      return (
        <SteperFourth
          handleInput={handleInput}
          formData={formData}
          setFormData={setFormData}
          markAsCompleted={() => markStepAsCompleted(4)}
        />
      );
    } else if (step === 5) {
      return (
        <SteperFifth
          handleInput={handleInput}
          formData={formData}
          setFormData={setFormData}
          markAsCompleted={() => markStepAsCompleted(5)}
        />
      );
    }
  };

  const backStepHandler = () => {
    if (step > 1) {
      setStep(step - 1);
      setCompletedSteps(
        completedSteps.filter((completedStep) => completedStep !== step)
      );
    }
  };
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleImage = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 5) {
      console.log(formData);
      setIsFormSubmitted(true);
      // Perform any other actions you want to take upon form submission
    }
  };

  const steperData = [
    "Personal",
    "Image",
    "Address",
    "Education",
    "Successful",
  ];

  return (
    <div className="multistepdata">
      <div className="container">
        <div className="row pt-4">
          <h4 className="text-center">Multi Step Form </h4>
          <div className="col-12 mx-auto">
            <div className="inner_data">
              <div className="stepnotify">
                <div className="d-flex">
                  {steperData.map((curElm, index) => (
                    <div className="" key={index}>
                      <div className="d-flex align-items-center">
                        <span
                          className={`span_number ${
                            completedSteps.includes(index + 1)
                              ? "bg-success text-white"
                              : ""
                          }`}
                        >
                          {index + 1}
                        </span>
                        {index < steperData.length - 1 && ( // Check if the current index is not the last index
                          <span
                            className={`span_line ${
                              completedSteps.includes(index + 1)
                                ? "bg-success text-white"
                                : ""
                            }`}
                          ></span>
                        )}
                      </div>
                      {
                        <h6
                          className={`${
                            completedSteps.includes(index + 1)
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {curElm}
                        </h6>
                      }
                    </div>
                  ))}
                </div>
              </div>

              <div className="formcontainer pt-3 pb-3">
                {isFormSubmitted ? (
                  <h1 className="text-success text-center mt-4">
                    Congratulations, you've done it!
                  </h1>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {renderData(
                      step,
                      handleInput,
                      formData,
                      handleImage,
                      setFormData
                    )}
                    {step > 1 && (
                      <button
                        className="btn btn-dark btn-sm me-2"
                        onClick={() => backStepHandler()}
                      >
                        Back
                      </button>
                    )}

                    {step === 5 && (
                      <button
                        type="submit"
                        className="btn btn-success btn-sm text-white"
                        onClick={() => markStepAsCompleted(step)}
                      >
                        Submit
                      </button>
                    )}
                    {step < 5 && (
                      <button
                        className="btn btn-info btn-sm text-white"
                        onClick={() => {
                          nextStepHandler();
                          markStepAsCompleted(step);
                        }}
                      >
                        Next
                      </button>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSteperForm;
