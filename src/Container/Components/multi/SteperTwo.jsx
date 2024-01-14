import React from "react";
import Form from "react-bootstrap/Form";
const SteperTwo = ({ handleInput }) => {
  return (
    <div className="profileform">
      <h3>Profile Information</h3>
      <Form.Group className="mb-3" controlId="formBasicProfile">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
          name="image"
          onChange={handleInput}
          type="file"
          placeholder="Choose Profile"
        />
      </Form.Group>
    </div>
  );
};

export default SteperTwo;
