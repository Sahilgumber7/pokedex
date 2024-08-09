import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = () => {
    const range = 3; // Number of pages to show before and after the current page
    let start = Math.max(1, currentPage - range);
    let end = Math.min(totalPages, currentPage + range);

    if (currentPage <= range) {
      end = Math.min(totalPages, range * 2 + 1);
    }

    if (currentPage > totalPages - range) {
      start = Math.max(1, totalPages - range * 2);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pages = visiblePages();

  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`mx-1 px-3 py-1 rounded-lg text-sm ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {page}
          </button>
        ))}
        {totalPages > pages.length && (
          <span className="mx-1 text-gray-600">...</span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
