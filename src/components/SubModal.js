import React, {
  useState,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";

import { GlobalContext } from "../context/GlobalState";
import { Modal, Button, Form, Col, Alert } from "react-bootstrap";

export const SubModal = forwardRef(({ agebracket, handleParentClose }, ref) => {
  const { insertTeam } = useContext(GlobalContext);

  const initialState = {
    show: false,
    name: "",
    gender: "",
    ageRange: "",
    selectedCheckboxes: new Set(),
  };
  const [alertShow, setAlertShow] = useState(false);
  const [
    { show, name, gender, ageRange, selectedCheckboxes },
    setState,
  ] = useState(initialState);

  useImperativeHandle(ref, () => ({
    handleShow() {
      setState((prevState) => ({ ...prevState, show: true }));
    },
  }));

  const handleClose = () => {
    setState({ ...initialState });
  };

  let ageList = [],
    skillsList = [];
  if (agebracket === "adult") {
    ageList = ["26-U", "40", "50", "60", "70"];
    skillsList = ["A", "AA", "AAA", "Novice", "Masters"];
  } else {
    ageList = ["13-U", "14-U", "15-U", "16-U", "17-U"];
    skillsList = ["Bronze", "Silver", "Gold", "High School", "Club"];
  }

  const changeName = (e) =>
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  const changeGender = (e) =>
    setState((prevState) => ({ ...prevState, gender: e.target.value }));
  const changeAgeRange = (e) =>
    setState((prevState) => ({ ...prevState, ageRange: e.target.value }));

  const toggleCheckbox = (e) => {
    const s = selectedCheckboxes;
    if (s.has(e.target.value)) {
      s.delete(e.target.value);
    } else {
      s.add(e.target.value);
    }
    setState((prevState) => ({ ...prevState, selectedCheckboxes: s }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newTeam;
    if (agebracket === "adult") {
      newTeam = {
        id: Math.floor(Math.random() * 100000000),
        name,
        agebracket,
        gender,
        age_range: ageRange,
        skills: Array.from(selectedCheckboxes),
      };
    } else {
      newTeam = {
        id: Math.floor(Math.random() * 100000000),
        name,
        agebracket,
        age_range: ageRange,
        skills: Array.from(selectedCheckboxes),
      };
    }
    if (newTeam.skills.length === 0) {
      _setAlertShow(true);
      return;
    }
    insertTeam(newTeam);
    handleParentClose();
    handleClose();
  };
  const _setAlertShow = (bool) => {
    if (bool) {
      setAlertShow(true);
      setTimeout(() => {
        setAlertShow(false);
      }, 5000);
    } else {
      setAlertShow(false);
    }
  };

  const adult = (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Adult Sport Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <h2>What specific details are needed for this divison?</h2>
          <p>Make a selection based on the options given below!</p>
        </center>
        <hr />
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Name: </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Team Name"
                onChange={changeName}
                required
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Gender: </Form.Label>
            </Col>
            <Col>
              <Form.Group onChange={changeGender} value={gender} required>
                <Form.Check
                  inline
                  name="gender"
                  type="radio"
                  label="Men"
                  value="men"
                  required
                />
                <Form.Check
                  inline
                  name="gender"
                  type="radio"
                  label="Women"
                  value="women"
                />
                <Form.Check
                  inline
                  name="gender"
                  type="radio"
                  label="Coed"
                  value="coed"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Age Range: </Form.Label>
            </Col>
            <Col>
              <Form.Group onChange={changeAgeRange} value={ageRange}>
                {ageList.map((a) => (
                  <Form.Check
                    inline
                    name="agerange"
                    type="radio"
                    label={a}
                    value={a}
                    key={a}
                    required
                  />
                ))}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Skills: </Form.Label>
            </Col>
            <Col>
              <Form.Group>
                {skillsList.map((s, key = s) => (
                  <Form.Check
                    inline
                    name="skill"
                    type="checkbox"
                    label={s}
                    value={s}
                    onChange={toggleCheckbox}
                    key={s}
                  />
                ))}
              </Form.Group>
            </Col>
            <br />
          </Form.Row>
          <Alert
            show={alertShow}
            variant="danger"
            onClose={() => _setAlertShow(false)}
            dismissible
          >
            <Alert.Heading>Required Field - Skills</Alert.Heading>
            <p>Please choose atleast one skill!</p>
          </Alert>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Back
            </Button>
            <Button variant="warning" type="submit">
              Next
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );

  const junior = (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Junior Sport Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <h2>What specific details are needed for this divison?</h2>
          <p>Make a selection based on the options given below!</p>
        </center>
        <hr />
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Name: </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Team Name"
                onChange={changeName}
                required
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Age Range: </Form.Label>
            </Col>
            <Col>
              <Form.Group onChange={changeAgeRange} value={ageRange} required>
                {ageList.map((a, key = a) => (
                  <Form.Check
                    inline
                    name="agerange"
                    type="radio"
                    label={a}
                    value={a}
                    key={a}
                    required
                  />
                ))}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={2}>
              <Form.Label>Skills: </Form.Label>
            </Col>
            <Col>
              <Form.Group>
                {skillsList.map((s, key = s) => (
                  <Form.Check
                    inline
                    name="skill"
                    type="checkbox"
                    label={s}
                    value={s}
                    onChange={toggleCheckbox}
                    key={s}
                  />
                ))}
              </Form.Group>
            </Col>
            <br />
          </Form.Row>
          <Alert
            show={alertShow}
            variant="danger"
            onClose={() => _setAlertShow(false)}
            dismissible
          >
            <Alert.Heading>Required Field - Skills</Alert.Heading>
            <p>Please choose atleast one skill!</p>
          </Alert>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Back
            </Button>
            <Button variant="warning" type="submit">
              Next
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );

  return agebracket === "adult" ? adult : junior;
});
