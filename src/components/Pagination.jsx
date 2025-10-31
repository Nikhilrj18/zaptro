import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages; // ✅ return the pages array
};

const Pagination = ({ page, pageHandle, dynamicPage }) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 flex space-x-2 items-center justify-center">
      {/* Prev button */}
      <button
        onClick={() => pageHandle(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md text-white ${
          page === 1 ? "bg-red-400 cursor-not-allowed" : "bg-red-500"
        }`}
      >
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => pageHandle(p)}
            className={`px-3 py-1 rounded-md ${
              page === p ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next button */}
      <button
        onClick={() => pageHandle(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded-md text-white ${
          page === dynamicPage ? "bg-red-400 cursor-not-allowed" : "bg-red-500"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
