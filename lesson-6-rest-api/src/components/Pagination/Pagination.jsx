import React from "react";

const Pagination = ({
  pages = [],
  endPage,
  currentPage,
  prevPage,
  nextPage,
  goToPage,
}) => {
  return (
    <div className="container mt-3">
      <nav aria-label="Page navigation example">
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
            <li className="page-item" key={page}>
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

export default Pagination;
