import React from "react";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalItems: number;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
}: Props) => {
  return (
    <div className="flex justify-between items-center pt-3 border-t">
      <div className="text-gray-600 dark:text-gray-300">
        Showing {(currentPage - 1) * 10 + 1} to
        {Math.min(currentPage * 10, totalItems)} of {totalItems}
        results
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
