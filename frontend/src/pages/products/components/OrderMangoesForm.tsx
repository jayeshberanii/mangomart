import React from "react";
import { useForm } from "react-hook-form";
import { ProductType } from "../../../types/product";
import { orderService } from "../../../services/product.service";

interface ProductModalProps {
  product?: ProductType
  isOpen: boolean;
  onClose: () => void;
}

const OrderMangoesForm: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await orderService.create({...data, product});
      onClose();
      alert("Order created successfully!");
    } catch (error) {
      // console.log("Error creating order:", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Modal Content */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "left",
          width: "600px",
          position: "relative",
          display: "flex",
        }}
      >
        {/* Product Image */}
        <div style={{ flex: "40%", paddingRight: "10px" }}>
          <img
            src={product?.imageUrl}
            alt="Organic Mango"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>

        {/* Product Details */}
        <div style={{ flex: "60%" }}>
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "18px",
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#7a5c43",
            }}
          >
            ✖
          </button>

          {/* Title */}
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "5px" }}>
            {product?.name}
          </h2>

          <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "5px" }}>Name:</label>
              <input
                type="text"
                {...register("customerName", { required: "Name is required" })}
                style={{ padding: "8px", borderRadius: "4px", border: errors.customerName ? "1px solid red" : "1px solid #ccc" }}
              />
              {/* {errors.name && <span style={{ color: "red" }}>{errors.name?.message?.toString()}</span>} */}

              <label style={{ marginBottom: "5px" }}>Mobile:</label>
              <input
                type="number"
                {...register("phone", { required: "Phone is required", minLength: 10 })}
                style={{ padding: "8px", borderRadius: "4px", border: errors.phone ? "1px solid red" : "1px solid #ccc" }}
              />
              {/* {errors.email?.message && <span style={{ color: "red" }}>{errors?.email?.message?.toString()}</span>} */}

              <label style={{ marginBottom: "5px" }}>Email:</label>
              <input
                type="text"
                {...register("email")}
                style={{ padding: "8px", borderRadius: "4px", border: errors.email ? "1px solid red" : "1px solid #ccc" }}
              />

              <label style={{ marginBottom: "5px" }}>Quantity (Box):</label>
              <input
                type="number"
                {...register("quantity", { required: "Quantity is required", min: 1, max: 100 })}
                style={{ padding: "8px", borderRadius: "4px", border: errors.quantity ? "1px solid red" : "1px solid #ccc" }}
              />
              {/* {errors.quantity && <span style={{ color: "red" }}>{errors.quantity.message?.toString()}</span>} */}

              <label style={{ marginBottom: "5px" }}>Address:</label>
              <textarea
                {...register("address", { required: "Address is required" })}
                style={{ padding: "8px", borderRadius: "4px", border: errors.address ? "1px solid red" : "1px solid #ccc" }}
              ></textarea>
              {/* {errors.address && <span style={{ color: "red" }}>{errors.address?.message?.toString()}</span>} */}

              <button
                type="submit"
                style={{
                  backgroundColor: "orange",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "16px",
                  width: "100%",
                  marginTop: "10px"
                }}
              >
                Buy Now
              </button>
            </form>
          </div>

          {/* Buy Now Button */}
        </div>
      </div>
    </div>
  );
};

export default OrderMangoesForm;
