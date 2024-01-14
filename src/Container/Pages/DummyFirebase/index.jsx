import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
const DummyFirebase = () => {
  const [formData, setFormData] = useState({
    uname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const { uname, email, address, password, phone } = formData;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "users"), formData)
      .then((res) => {
        console.log("done", res);
      })
      .catch((err) => {
        console.log(err, "error");
      });
    console.log(formData);
  };
  return (
    <div className="firebase">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUname">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  name="uname"
                  value={uname}
                  onChange={handleInput}
                  type="text"
                  placeholder="Enter user name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleInput}
                  placeholder="Enter address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={handleInput}
                  placeholder="Enter phone"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyFirebase;
