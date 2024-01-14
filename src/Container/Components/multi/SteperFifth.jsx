import React from "react";
import { Form } from "react-bootstrap";

const SteperFifth = ({ formData, setFormData, handleInput }) => {
  return (
    <div className="successfulform">
      <h3>Verified Data</h3>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="verified"
          onChange={handleInput}
          checked={formData.verified}
          label="Verified"
        />
      </Form.Group>
    </div>
  );
};

export default SteperFifth;
