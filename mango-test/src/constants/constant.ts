export const BASE_URL = "http://localhost:5000/api/v1";

export const CUSTOMER_MESSAGES = {
  ACCESS_TOKEN: "Token Expired",
  REFRESH_TOKEN_EXPRIED: "Authentication expired",
  LOGOUT_SUCCESSFUL: "Signed out successfully",
  VERIFICATION_SUCCESSFULL: "Verification successful",
};

export const CLOTHINGS = [
  "T-shirt",
  "Jeans",
  "Sweater",
  "Jacket",
  "Shorts",
  "Dress",
  "Skirt",
  "Blouse",
  "Sweatshirt",
  "Cardigan",
  "Pants",
  "Leggings",
  "Shirt",
  "Coat",
  "Hoodie",
  "Suit",
  "Vest",
  "Camisole",
  "Tank top",
  "Blazer",
  "Scarf",
  "Gloves",
  "Hat",
  "Boots",
  "Sneakers",
  "Sandals",
  "Flip-flops",
  "Belt",
  "Tie",
  "Pajamas",
  "Lingerie",
  "Bikini",
  "Swimsuit",
  "Overalls",
  "Culottes",
  "Kimono",
];

export const getColor = (status: string) => {
  if (status === "Active") {
    return "success";
  }
  if (status === "Pending") {
    return "warning";
  }

  return "error";
};

export const CategoryHeaders = [
  "",
  "Product Name",
  "Description",
  "Price",
  "Created At",
  "Actions",
];

export const ADS = ["Ad1", "Ad2"];
