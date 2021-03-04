import React, { memo } from "react";
import classnames from "classnames";

const Pagination = ({
  pages = [],
  endPage,
  currentPage,
  prevPage,
  nextPage,
  goToPage,
}) => {
  return (
    <div className="container mt-5 mb-4">
      <nav
        className="d-flex justify-content-center"
        aria-label="Products page navigation"
      >
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={classnames("page-item", {
                active: currentPage === page,
              })}
            >
              <button className="page-link" data-page={page} onClick={goToPage}>
                {page}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={nextPage}
              disabled={endPage === currentPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(Pagination);
