// import BrandFilter from "../filters/BranchFilter";
// import CategoryFilter from "../filters/CategoryFilter";
import FilterComponent from "../filters/FilterComponent";

const UserSidebar = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <FilterComponent />
      {/* <CategoryFilter />
      <BrandFilter /> */}
    </div>
  );
};

export default UserSidebar;
