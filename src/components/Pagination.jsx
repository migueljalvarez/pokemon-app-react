import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({
  textButtonPrev,
  textButtonNext,
  prev,
  next,
  prevOnDisabled,
  nextOnDisabled,
}) => {
  return (
    <div className=" d-flex justify-content-center">
      <Button
        variant="danger"
        size="md"
        className="mx-2"
        onClick={prev}
        disabled={prevOnDisabled}
      >
        {textButtonPrev}
      </Button>
      <Button
        variant="danger"
        size="md"
        className="mx-2"
        onClick={next}
        disabled={nextOnDisabled}
      >
        {textButtonNext}
      </Button>
    </div>
  );
};

export default Pagination;
