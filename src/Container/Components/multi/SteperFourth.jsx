import React from "react";
import Form from "react-bootstrap/Form";

const SteperFourth = ({ formData, setFormData, handleInput }) => {
  return (
    <div className="educationform">
      <h3>Education Information</h3>
      <Form.Group className="mb-3" controlId="formBasicEducation">
        <Form.Label>Education</Form.Label>
        <Form.Control
          name="education"
          value={formData.education}
          onChange={handleInput}
          type="text"
          placeholder="Enter education"
        />
      </Form.Group>
    </div>
  );
};

export default SteperFourth;
