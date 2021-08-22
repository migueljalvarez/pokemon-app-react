import React from "react";

const Pagination = ({ increment, decrement, previousPage, nextPage }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger"
          disabled={!previousPage}
          onClick={decrement}
        >
          Previous
        </button>
        
        <button
          className="btn btn-danger"
          disabled={!nextPage}
          onClick={increment}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
