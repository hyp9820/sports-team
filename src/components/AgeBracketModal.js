import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { SubModal } from "./SubModal";

import { Modal, Button, Form, Alert } from "react-bootstrap";

export const AgeBracketModal = forwardRef((props, ref) => {
  const modalRef = useRef();

  const [show, setShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [agebracket, setAgebracket] = useState("");
  useImperativeHandle(ref, () => ({
    handleShow() {
      setShow(true);
    },
  }));

  const handleClose = () => {
    setShow(false);
    setAgebracket("");
  };
  const handleNext = () => {
    if (agebracket === "adult" || agebracket === "junior") {
      modalRef.current.handleShow();
    } else {
      setAlertShow(true);
    }
  };

  const changeAgeBracket = (e) => setAgebracket(e.target.value);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sport Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <h2>What type of age bracket is needed?</h2>
            <p>Make a selection based on the desired age group!</p>
          </center>
          <hr />
          <Form>
            <Form.Group controlId="agebracket">
              <Form.Control
                as="select"
                onChange={changeAgeBracket}
                value={agebracket}
                required
              >
                <option value={null}>Choose Age Bracket</option>
                <option value="adult">Adult</option>
                <option value="junior">Junior</option>
              </Form.Control>
              <br />
              <Alert
                show={alertShow}
                variant="danger"
                onClose={() => setAlertShow(false)}
                dismissible
              >
                <Alert.Heading>Required Field</Alert.Heading>
                <p>Please choose a valid option!</p>
              </Alert>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleNext}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <SubModal
        ref={modalRef}
        agebracket={agebracket}
        handleParentClose={handleClose}
      />
    </>
  );
});
