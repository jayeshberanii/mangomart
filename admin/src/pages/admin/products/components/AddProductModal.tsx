import { useEffect } from "react";
import { ProductType } from "../../../../types/product";
import { Modal } from "../../../../ui/modal";
import { useForm } from "react-hook-form";


interface AddProductModalProps {
  isEditModal: boolean;
  isOpen: boolean;
  closeModal: () => void;
  product: ProductType | null;
  onSubmitProductHandler: (data: ProductType) => void;
}

const AddProductModal = ({
  isEditModal,
  isOpen,
  closeModal,
  product,
  onSubmitProductHandler
}: AddProductModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductType>({
    defaultValues: product || {}, // Pre-fill the form if editing
  });
  useEffect(() => {
    if (product) {
      reset(product); // Reset form when product changes
    }
  }, [product, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => { closeModal(); reset() }}
      className="max-w-[700px] p-6 lg:p-10"
    >
      <form onSubmit={handleSubmit(onSubmitProductHandler)}>
        <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
          <div>
            <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
              {isEditModal ? "Edit Product" : "Add New Product"}
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Product Name
                </label>
                <input
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  type="text"
                  className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.name ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="imageUrl" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Image Url
                  </label>
                  <input
                    {...register("imageUrl")}
                    type="text"
                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.imageUrl ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                  />
                </div>
                </div>
                <div>
                  <label htmlFor="brand" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.description ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                  />
                </div>
                <div>
                  <label htmlFor="mrp" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Price
                  </label>
                  <input
                    {...register("price", { required: "Price is required" })}
                    type="text"
                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.price ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
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
                {isEditModal ? "Update Changes" : "Add Product"}
              </button>
            </div>
          </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;
