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
import {
  addProductApi,
  deleteProductApi,
  editProductApi,
  fetchProductsApi,
} from "../../../services/product.service";
import { ProductType } from "../../../types/product";
import AddProductModal from "./components/AddProductModal";
import { useModal } from "../../../hooks/useModal";
import { PencilIcon, TrashBinIcon } from "../../../icons";
import ConfirmationModal from "../../../components/global/ConfirmationModal";
import { CategoryHeaders } from "../../../constants/constant";
import Pagination from "../Pagination";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 5; // Items per page
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();
  const [isEditModal, setIsEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState<ProductType | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<string>("");
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const onCloseModal = () => {
    setIsEditModal(false);
    setEditProduct(null);
    closeModal();
  };
  const getProducts = useCallback(async () => {
    const response = await fetchProductsApi();
    setProducts(response || []);
    setTotalProducts(response?.total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fetchTrigger,
    currentPage,
    limit,
  ]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);


  const totalPages = Math.ceil(totalProducts / limit);

  const onEditButtonHandler = (product: ProductType) => {
    setEditProduct(product);
    setIsEditModal(true);
    openModal();
  };

  const onDeleteButtonHandler = (productId: string) => {
    setDeletingProduct(productId);
    openDeleteModal();
  };

  const closeDeleteModalHandler = () => {
    closeDeleteModal();
    setDeletingProduct("");
  };

  const deleteProductHandler = async () => {
    await deleteProductApi(deletingProduct);
    setCurrentPage(1);
    setFetchTrigger((prev) => prev + 1); // ✅ Forces re-fetch
    closeDeleteModalHandler();
  };
  const onSubmitProductHandler = async (data: ProductType) => {
    if (data._id) await editProductApi(data._id, data);
    else await addProductApi(data);
    setCurrentPage(1);
    setFetchTrigger((prev) => prev + 1); // ✅ Forces re-fetch
    closeModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Products" />
      <div className="space-y-6">
        <div className="w-full flex justify-end gap-2">
          <button
            onClick={() => {
              setIsEditModal(false);
              openModal();
            }}
            className={`flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-500 px-6 py-2 rounded-md text-brand-500 hover:text-white hover:scale-100 font-semibold transition-all ease-in-out duration-300`}
          >
            <span className="text-sm">Add New Product</span>
          </button>
        </div>
        <ComponentCard
          title="Products"
        >
          <div className="overflow-hidden rounded-xl bproduct bproduct-gray-200 bg-white dark:bproduct-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[1102px]">
                <Table>
                  {/* Table Header */}
                  <TableHeader className="bproduct-b bproduct-gray-100 dark:bproduct-white/[0.05]">
                    <TableRow>
                      {CategoryHeaders.map((header, index) => (
                        <TableCell
                          isHeader
                          key={index + 1}
                          className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHeader>

                  {/* Table Body */}
                  <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {products?.length > 0 && products?.map((product) => (
                      <TableRow key={product?._id}>
                        <TableCell className="py-4 sm:px-6">
                          <div className="w-10 h-10 overflow-hidden">
                            <img
                              width={40}
                              height={40}
                              src={product?.imageUrl}
                              alt={"Product?"}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                          <div className="flex overflow-hidden items-center gap-3">
                            <div>
                              <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {product?.name?.length > 60
                                  ? product?.name?.slice(0, 60) + "..."
                                  : product?.name}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="px-5 py-4 max-w-[300px] sm:px-6 text-start">
                          <div className="flex overflow-hidden items-center gap-3">
                            <div>
                              <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {product?.description?.length > 60
                                  ? product?.description?.slice(0, 60) + "..."
                                  : product?.description}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-red-500 font-bold text-start text-theme-sm dark:text-gray-400">
                          ₹{product?.price}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {product?.createdAt
                            ? new Date(product?.createdAt).toLocaleString()
                            : ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 font-bold text-start text-theme-sm dark:text-gray-400">
                          <div className="flex gap-2 items-center justify-center ">
                            <button
                              onClick={() => onEditButtonHandler(product)}
                              className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full hover:bg-blue-50"
                            >
                              <PencilIcon className="w-5 h-5 text-blue-500" />
                            </button>
                            <button
                              onClick={() =>
                                onDeleteButtonHandler(product?._id ?? "")
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
              totalItems={totalProducts}
            />
          </div>
        </ComponentCard>
        {
          isOpen &&
          <AddProductModal
            isEditModal={isEditModal}
            isOpen={isOpen}
            closeModal={onCloseModal}
            product={editProduct}
            onSubmitProductHandler={onSubmitProductHandler}
          />
        }

        <ConfirmationModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModalHandler}
          onSubmit={deleteProductHandler}
          title="Delete Product"
          message="Are you sure you want to delete this product?"
          btnText="Delete"
        />
      </div>
    </>
  );
};

export default Products;
