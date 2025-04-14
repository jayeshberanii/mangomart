import React from "react";

const Sorting = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="font-semibold">Sorting</div>
      <div className="flex flex-wrap gap-2">
        <select
          className="p-2 bg-brand-50 border-0 outline-0 rounded-md text-brand-500 font-semibold"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="createdAt">CreatedAt</option>
          <option value="availability">Availability</option>
        </select>

        <select
          className="p-2 bg-brand-50 border-0 outline-0 rounded-md text-brand-500 font-semibold"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
