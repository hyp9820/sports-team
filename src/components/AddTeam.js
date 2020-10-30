import React, { useRef } from "react";
import { AgeBracketModal } from "./AgeBracketModal";

import { Button } from "react-bootstrap";

function AddTeam() {
  const childRef = useRef();
  return (
    <>
      <Button
        variant="warning"
        size="lg"
        block
        onClick={() => childRef.current.handleShow()}
      >
        Add a new team!
      </Button>

      <AgeBracketModal ref={childRef} />
    </>
  );
}

export default AddTeam;
