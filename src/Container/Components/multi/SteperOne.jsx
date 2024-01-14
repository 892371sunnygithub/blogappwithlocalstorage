import React from "react";
import Form from "react-bootstrap/Form";

const SteperOne = ({ handleInput, formData, setFormData }) => {
  return (
    <div className="personelform">
      <h3>Personel Information</h3>
      <Form.Group className="mb-3" controlId="formBasicFname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="fname"
          value={formData.fname}
          onChange={handleInput}
          type="text"
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lname"
          value={formData.lname}
          onChange={handleInput}
          type="text"
          placeholder="Enter last name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleInput}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
    </div>
  );
};

export default SteperOne;
