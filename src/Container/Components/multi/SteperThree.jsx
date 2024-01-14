import React from "react";
import Form from "react-bootstrap/Form";
const SteperThree = ({ formData, setFormData, handleInput }) => {
  return (
    <div className="addressform">
      <h3>Address Information</h3>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          value={formData.address}
          onChange={handleInput}
          type="text"
          placeholder="Enter address"
        />
      </Form.Group>
    </div>
  );
};

export default SteperThree;
