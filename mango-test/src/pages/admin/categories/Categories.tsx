import { useCallback, useEffect, useState } from "react";
import PageBreadcrumb from "../../../components/global/PageBreadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import ComponentCard from "../../../components/global/ComponentCard";
import { useModal } from "../../../hooks/useModal";
import { CategoryType } from "../../../types/product";
import { createCategoryApi, deleteCategoryApi, fetchCategoriesApi, updateCategoryApi } from "../../../services/category.service";
import ConfirmationModal from "../../../components/global/ConfirmationModal";
import AddCategoryModal from "./components/AddCategoryModal";
import { PencilIcon, TrashBinIcon } from "../../../icons";
import { showToast } from "../../../lib/toast";
import Sorting from "../Sorting";
import Pagination from "../Pagination";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 5; // Items per page
  const [totalCategories, setTotalCategories] = useState<number>(0);
  const [deletingCategory, setDeletingCategory] = useState<string>("");
  const { isOpen, openModal, closeModal } = useModal();
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();
  const [isEditModal, setIsEditModal] = useState(false);
  const [editCategory, setEditCategory] = useState<CategoryType | null>(null);

  // Search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  // Sorting
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<string>("desc");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500); // Adjust delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const getCategories = useCallback(async () => {
    const offset = (currentPage - 1) * limit;
    const filters = {
    };

    const sorting = {
      sortBy,
      sortOrder,
    };

    const response = await fetchCategoriesApi(
      limit,
      offset,
      debouncedSearch,
      filters,
      sorting
    );
    setCategories(response.categories);
    setTotalCategories(response.total); // Assuming API returns total count
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTrigger, currentPage, debouncedSearch, sortBy, sortOrder, limit])

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const totalPages = Math.ceil(totalCategories / limit);

  const onEditButtonHandler = (product: CategoryType) => {
    setEditCategory(product);
    setIsEditModal(true);
    openModal();
  };

  const onDeleteButtonHandler = (categoryId: string) => {
    setDeletingCategory(categoryId);
    openDeleteModal();
  };

  const closeDeleteModalHandler = () => {
    closeDeleteModal();
    setDeletingCategory("");
  };

  const onCloseModal = () => {
    setIsEditModal(false);
    setEditCategory(null);
    closeModal();
  };

  const deleteCategoryHandler = async () => {
    try {
      await deleteCategoryApi(deletingCategory);
      showToast("Category deleted successfully", "success");
      setCurrentPage(1);
      setFetchTrigger((prev) => prev + 1); // ✅ Forces re-fetch
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast("Error while deleting category", "error");
    }
    closeDeleteModalHandler();
  };

  const onSubmitCategoryHandler = async (data: CategoryType) => {
    if (data._id) {
      console.log("Edit Category Successfully :::", data);
      try {
        await updateCategoryApi(data._id, data);
        showToast("Category updated successfully", "success");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        showToast("Error updating category", "error");
      }
    } else {
      try {
        console.log("Add Category Successfully :::", data);
        await createCategoryApi(data);
        showToast("Category added successfully", "success");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        showToast("Error adding category", "error");
      }
    }
    setFetchTrigger((prev) => prev + 1);
    onCloseModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Categories" />
      <div className="space-y-6">
        <div className="w-full flex justify-end gap-2">
          <button
            onClick={() => {
              setIsEditModal(false);
              openModal();
            }}
            className={`flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-500 px-6 py-2 rounded-md text-brand-500 hover:text-white hover:scale-100 font-semibold transition-all ease-in-out duration-300`}
          >
            {/* <PlusIcon className="h-5 w-5" /> */}
            <span className="text-sm">Add New Category</span>
          </button>
        </div>
        <ComponentCard
          search={searchQuery}
          setSearch={setSearchQuery}
          title="Categories"
        >
          {/* Sorting */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Sorting
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </div>
          <div className="overflow-hidden rounded-xl bproduct bproduct-gray-200 bg-white dark:bproduct-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[1102px]">
                <Table>
                  {/* Table Header */}
                  <TableHeader className="bproduct-b bproduct-gray-100 dark:bproduct-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Name
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Description
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Created At
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHeader>

                  {/* Table Body */}
                  <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {categories?.map((category) => (
                      <TableRow key={category._id}>
                        <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                          <div className="flex overflow-hidden items-center gap-3">
                            <div>
                              <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {category?.name?.length > 60
                                  ? category?.name?.slice(0, 60) + "..."
                                  : category?.name}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                          <div className="flex overflow-hidden items-center gap-3">
                            <div>
                              <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {category?.description?.length > 60
                                  ? category?.description?.slice(0, 60) + "..."
                                  : category?.description}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                          {category?.createdAt
                            ? new Date(category?.createdAt).toLocaleString()
                            : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 font-bold text-start text-theme-sm dark:text-gray-400">
                          <div className="flex gap-2 items-center justify-start ">
                            <button
                              onClick={() => onEditButtonHandler(category)}
                              className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full hover:bg-blue-50"
                            >
                              <PencilIcon className="w-5 h-5 text-blue-500" />
                            </button>
                            <button
                              onClick={() =>
                                onDeleteButtonHandler(category?._id ?? "")
                              }
                              className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full hover:bg-red-50"
                            >
                              <TrashBinIcon className="w-5 h-5 text-red-500" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              totalItems={totalCategories}
            />
          </div>
        </ComponentCard>
        {
          isOpen &&
          <AddCategoryModal
            isEditModal={isEditModal}
            isOpen={isOpen}
            closeModal={onCloseModal}
            category={editCategory}
            onSubmitCategoryHandler={onSubmitCategoryHandler}
          />
        }

        <ConfirmationModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModalHandler}
          onSubmit={deleteCategoryHandler}
          title="Delete Category"
          message="Are you sure you want to delete this category?"
          btnText="Delete"
        />
      </div>
    </>
  );
};

export default Categories;
