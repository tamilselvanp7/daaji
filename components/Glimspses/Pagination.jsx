/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage, onPageClick }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    onPageClick(currentPage + 1);
  };
  const prevPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    onPageClick(currentPage - 1);
  };

  return (
    <nav>
      {nPages > 7 ? (
        <ul className="pagination justify-content-center">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <button className="page-link" onClick={prevPage}>
              &#171;
            </button>
          </li>

          <li className={`page-item ${currentPage === 1 ? "active" : ""} `}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setCurrentPage(1);
                onPageClick(1);
              }}
              className="page-link"
            >
              1
            </button>
          </li>
          <li className={`page-item ${currentPage === 2 ? "active" : ""} `}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setCurrentPage(2);
                onPageClick(2);
              }}
              className="page-link"
            >
              2
            </button>
          </li>
          {!(currentPage <= 4) && (
            <li className="page-item">
              <button disabled className="page-link">
                ...
              </button>
            </li>
          )}
          {/* mapping between pages */}

          {currentPage > 3 && currentPage < nPages - 3
            ? pageNumbers
                .slice(currentPage - 2, currentPage + 1)
                .map((pgNumber) => (
                  <li
                    key={pgNumber}
                    className={`page-item ${
                      currentPage === pgNumber ? "active" : ""
                    } `}
                  >
                    <button
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        setCurrentPage(pgNumber);
                        onPageClick(pgNumber);
                      }}
                      className="page-link"
                    >
                      {pgNumber}
                    </button>
                  </li>
                ))
            : currentPage <= 3
            ? pageNumbers.slice(2, 5).map((pgNumber) => (
                <li
                  key={pgNumber}
                  className={`page-item ${
                    currentPage === pgNumber ? "active" : ""
                  } `}
                >
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      setCurrentPage(pgNumber);
                      onPageClick(pgNumber);
                    }}
                    className="page-link"
                  >
                    {pgNumber}
                  </button>
                </li>
              ))
            : pageNumbers.slice(-5, -2).map((pgNumber) => (
                <li
                  key={pgNumber}
                  className={`page-item ${
                    currentPage === pgNumber ? "active" : ""
                  } `}
                >
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      setCurrentPage(pgNumber);
                      onPageClick(pgNumber);
                    }}
                    className="page-link"
                  >
                    {pgNumber}
                  </button>
                </li>
              ))}

          {/* mappeing between pages */}
          {!(currentPage >= nPages - 3) && (
            <li className="page-item">
              <button disabled className="page-link">
                ...
              </button>
            </li>
          )}

          <li
            className={`page-item ${
              currentPage === nPages - 1 ? "active" : ""
            } `}
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setCurrentPage(nPages - 1);
                onPageClick(nPages - 1);
              }}
              className="page-link"
            >
              {nPages - 1}
            </button>
          </li>
          <li
            className={`page-item ${currentPage === nPages ? "active" : ""} `}
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setCurrentPage(nPages);
                onPageClick(nPages);
              }}
              className="page-link"
            >
              {nPages}
            </button>
          </li>

          <li
            className={
              currentPage === nPages ? "page-item disabled" : "page-item"
            }
          >
            <button className="page-link" onClick={nextPage}>
              &#187;
            </button>
          </li>
        </ul>
      ) : (
        <ul className="pagination justify-content-center">
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage === pgNumber ? "active" : ""
              } `}
            >
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setCurrentPage(pgNumber);
                  onPageClick(pgNumber);
                }}
                className="page-link"
              >
                {pgNumber}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Pagination;
