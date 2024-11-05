import React, { useState } from 'react'

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
  const totalProducts = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
        <div className="pagination">
              <button
                className="page-button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="page-button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
    </div>
  )
}

export default Pagination