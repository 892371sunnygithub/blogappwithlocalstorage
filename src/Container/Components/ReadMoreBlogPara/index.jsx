import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ReadMoreBlogPara = ({ show, hide, paragraph }) => {
  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Continue Reading... </Modal.Title>
      </Modal.Header>
      <Modal.Body>{paragraph} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReadMoreBlogPara;
