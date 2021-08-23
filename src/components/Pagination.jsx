import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

const Pagination = ({
  pageSize,
  limit,
  pageNeighbours,
  previousText,
  nextText,
  onChange,
  current,
}) => {
  const pageLimit = typeof limit === "number" ? limit : 30;
  const totalItems = Math.ceil(pageSize / pageLimit);
  const [currentPage, setCurrentPage] = useState(current);

  localStorage.setItem("page", current);
  useEffect(() => {}, []);

  

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = 5;
    const totalBlocks = totalNumbers + 2;

    if (totalItems > totalBlocks) {

      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalItems, currentPage + 1);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 1;
      const hasRightSpill = totalItems - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [...extraPages, ...pages];
      }
      if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages];
      }
      if (hasLeftSpill && hasRightSpill) {
        pages = [...range(startPage, endPage)];
      }
      return [...pages];
    }

    return range(1, totalItems);
  };

  const pages = fetchPageNumbers();

  const goToPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, pageSize));
    const paginationData = {
      currentPage,
      pageLimit,
    };
    setCurrentPage(currentPage);
    onChange(paginationData);
  };

  const handleMoveLeft = (e) => {
    e.preventDefault();
    goToPage(currentPage - 1);
  };

  const handleMoveRight = (e) => {
    e.preventDefault();
    goToPage(currentPage + 1);
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    goToPage(page);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn page-link page-item"
          disabled={currentPage < 2}
          onClick={(e) => handleMoveLeft(e)}
        >
          {previousText}
        </button>

        {pages.map((page, index) => (
          <button
            id={index}
            key={index}
            className="page-link page-item"
            onClick={(e) => handleClick(e, page)}
          >
            {page}
          </button>
        ))}
        <button
          className="btn page-link page-item"
          disabled={currentPage === totalItems}
          onClick={(e) => handleMoveRight(e)}
        >
          {nextText}
        </button>
      </div>
    </>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
};
export default Pagination;
