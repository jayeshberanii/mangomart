import { useEffect } from "react";
import { Modal } from "../../../../ui/modal";
import { useForm } from "react-hook-form";
import { CategoryType } from "../../../../types/product";

interface AddCategoryModalProps {
  isEditModal: boolean;
  isOpen: boolean;
  closeModal: () => void;
  category: CategoryType | null;
  onSubmitCategoryHandler: (data: CategoryType) => void;
}

const AddCategoryModal = ({
  isEditModal,
  isOpen,
  closeModal,
  category,
  onSubmitCategoryHandler
}: AddCategoryModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryType>({
    defaultValues: category || {}, // Pre-fill the form if editing
  });
  useEffect(() => {
    if (category) {
      reset(category); // Reset form when Category changes
    }
  }, [category, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-[700px] p-6 lg:p-10"
    >
      <form onSubmit={handleSubmit(onSubmitCategoryHandler)}>
        <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
          <div>
            <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
              {isEditModal ? "Edit Category" : "Add New Category"}
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Category Name
                </label>
                <input
                  {...register("name", {
                    required: "Category name is required",
                  })}
                  type="text"
                  className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.name ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                />
              </div>
              <div>
                <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Description
                </label>
                <input
                  {...register("description")}
                  type="text"
                  className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.description ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                />
              </div>

            </div>
          </div>
          <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
            <button
              onClick={closeModal}
              type="button"
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
            >
              {isEditModal ? "Update Changes" : "Add Category"}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddCategoryModal;
