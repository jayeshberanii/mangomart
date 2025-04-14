import { useEffect } from "react";
import { Modal } from "../../../../ui/modal";
import { useForm } from "react-hook-form";
import { OrderType, ProductType } from "../../../../types/product";

interface AddOrderModalProps {
    products: ProductType[];
    isEditModal: boolean;
    isOpen: boolean;
    closeModal: () => void;
    order: OrderType | null;
    onSubmitOrderHandler: (data: OrderType) => void;
}

const AddOrderModal = ({
    products,
    isEditModal,
    isOpen,
    closeModal,
    order,
    onSubmitOrderHandler
}: AddOrderModalProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<OrderType>({
        defaultValues: order || {}, // Pre-fill the form if editing
    });
    useEffect(() => {
        if (order) {
            reset(order); // Reset form when Order changes
        }
    }, [order, reset]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className="max-w-[700px] p-6 lg:p-10"
        >
            <form onSubmit={handleSubmit(onSubmitOrderHandler)}>
                <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                    <div>
                        <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                            {isEditModal ? "Edit Order" : "Add New Order"}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col gap-2">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Order Id
                                </label>
                                <input
                                    disabled
                                    {...register("_id")}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 `}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Customer Name
                                </label>
                                <input
                                    {...register("customerName" , {required: "Customer Name is required"} )}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.customerName ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Product Name
                                </label>
                                <select
                                    {...register("product._id", {required: "Product Name is required"})}

                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.address ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                >
                                    {
                                        products?.map((product)=>(
                                            <option value={product._id}>{product.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Quantity
                                </label>
                                <input
                                    {...register("quantity", {required: "Quantity is required"})}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.quantity ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Phone
                                </label>
                                <input
                                    {...register("phone", {required: "Phone is required"})}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.phone ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Email
                                </label>
                                <input
                                    {...register("email")}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.email ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Address
                                </label>
                                <input
                                    {...register("address", {required: "Address is required"})}
                                    type="text"
                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.address ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Status
                                </label>
                                <select
                                    {...register("status")}

                                    className={`dark:bg-dark-900 h-11 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 ${errors.address ? "border-red-500 focus:border-red-300 focus:ring-red-500/10" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 "} focus:outline-hidden focus:ring-3`}
                                >
                                    <option value={"Pending"}>Pending</option>
                                    <option value={"Confirmed"}>Confirmed</option>
                                    <option value={"Delivered"}>Delivered</option>
                                    <option value={"Cancelled"}>Cancelled</option>
                                    <option value={"Shipped"}>Shipped</option>
                                </select>
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
                            {isEditModal ? "Update Changes" : "Add Order"}
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddOrderModal;
