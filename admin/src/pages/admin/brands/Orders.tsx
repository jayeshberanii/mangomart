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
import { OrderType } from "../../../types/product";
import ConfirmationModal from "../../../components/global/ConfirmationModal";
import { PencilIcon, TrashBinIcon } from "../../../icons";
import { showToast } from "../../../lib/toast";
import { createOrderApi, deleteOrderApi, getOrdersApi, updateOrderApi } from "../../../services/order.service";
import AddOrderModal from "./components/AddOrderModal";
import { fetchProductsApi } from "../../../services/product.service";

const Orders = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 5; // Items per page
    const [totalOrders, setTotalOrders] = useState<number>(0);
    const [deletingOrder, setDeletingOrder] = useState<string>("");
    const { isOpen, openModal, closeModal } = useModal();
    const [fetchTrigger, setFetchTrigger] = useState(0);
    const {
        isOpen: isDeleteOpen,
        openModal: openDeleteModal,
        closeModal: closeDeleteModal,
    } = useModal();
    const [isEditModal, setIsEditModal] = useState(false);
    const [editOrder, setEditOrder] = useState<OrderType | null>(null);
    const [products, setProducts] = useState([]);


    const getCategories = useCallback(async () => {
        const offset = (currentPage - 1) * limit;
        const filters = {
        };

        const sorting = {

        };

        const response = await getOrdersApi(
            limit,
            offset,
            "",
            filters,
            sorting
        );
        setOrders(response);
        setTotalOrders(response.total); // Assuming API returns total count
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchTrigger, currentPage, limit])

    useEffect(() => {
        getCategories();
        fetchProductsApi().then((res) => setProducts(res));
    }, [getCategories]);

    const totalPages = Math.ceil(totalOrders / limit);

    const onEditButtonHandler = (product: OrderType) => {
        setEditOrder(product);
        setIsEditModal(true);
        openModal();
    };

    const onDeleteButtonHandler = (brandId: string) => {
        setDeletingOrder(brandId);
        openDeleteModal();
    };

    const closeDeleteModalHandler = () => {
        closeDeleteModal();
        setDeletingOrder("");
    };

    const onCloseModal = () => {
        setIsEditModal(false);
        setEditOrder(null);
        closeModal();
    };

    const deleteOrderHandler = async () => {
        try {
            await deleteOrderApi(deletingOrder);
            showToast("Order deleted successfully", "success");
            setCurrentPage(1);
            setFetchTrigger((prev) => prev + 1); // ✅ Forces re-fetch
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            showToast("Error while deleting brand", "error");
        }
        closeDeleteModalHandler();
    };

    const onSubmitOrderHandler = async (data: OrderType) => {
        if (data?._id) {
            try {
                await updateOrderApi(data._id, data);
                showToast("Order updated successfully", "success");
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                showToast("Error updating Order", "error");
            }
        } else {
            try {
                await createOrderApi(data);
                showToast("Order added successfully", "success");
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                showToast("Error adding order", "error");
            }
        }
        setFetchTrigger((prev) => prev + 1);
        onCloseModal();
    };

    return (
        <>
            <PageBreadcrumb pageTitle="Orders " />
            <div className="space-y-6">
                <div className="w-full flex justify-end gap-2">
                    <button
                        onClick={() => {
                            setIsEditModal(false);
                            openModal();
                        }}
                        className={`flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-500 px-6 py-2 rounded-md text-brand-500 hover:text-white hover:scale-100 font-semibold transition-all ease-in-out duration-300`}
                    >
                        <span className="text-sm">Add New Order</span>
                    </button>
                </div>
                <ComponentCard
                    title="Orders"
                >
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
                                                OrderId
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Product Name
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Quantity
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Phone
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Email
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Address
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Status
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
                                        {orders?.map((order) => (
                                            <TableRow key={order._id}>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?._id}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.product?.name}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.quantity}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.phone}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.email}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.address}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.status}
                                                </TableCell>
                                                <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                                                    {order?.createdAt ? new Date(order?.createdAt).toLocaleString() : ""}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 font-bold text-start text-theme-sm dark:text-gray-400">
                                                    <div className="flex gap-2 items-center justify-start ">
                                                        <div
                                                            onClick={() => onEditButtonHandler(order)}
                                                            className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full hover:bg-blue-50"
                                                        >
                                                            <PencilIcon className="w-5 h-5 text-blue-500" />
                                                        </div>
                                                        <div
                                                            onClick={() =>
                                                                onDeleteButtonHandler(order?._id ?? "")
                                                            }
                                                            className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full hover:bg-red-50"
                                                        >
                                                            <TrashBinIcon className="w-5 h-5 text-red-500" />
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        {/* Pagination Controls */}
                        <div className="flex justify-between items-center pt-3 border-t">
                            {
                                totalOrders === 0 ?
                                    <div className="text-gray-600 dark:text-gray-300">
                                        No Orders Found
                                    </div>
                                    :
                                    <div className="text-gray-600 dark:text-gray-300">
                                        Showing {(currentPage - 1) * 10 + 1} to{" "}
                                        {Math.min(currentPage * 10, totalOrders)} of {totalOrders}{" "}
                                        results
                                    </div>
                            }

                            <div className="flex gap-2">
                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                                    }
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                    }
                                    disabled={currentPage === totalPages || totalOrders === 0}
                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </ComponentCard>
                {
                    isOpen &&
                    <AddOrderModal
                        products={products}
                        isEditModal={isEditModal}
                        isOpen={isOpen}
                        closeModal={onCloseModal}
                        order={editOrder}
                        onSubmitOrderHandler={onSubmitOrderHandler}
                    />
                }

                <ConfirmationModal
                    isOpen={isDeleteOpen}
                    closeModal={closeDeleteModalHandler}
                    onSubmit={deleteOrderHandler}
                    title="Delete Order"
                    message="Are you sure you want to delete this order?"
                    btnText="Delete"
                />
            </div>
        </>
    );
};

export default Orders;
