import { db } from "../../firebase/firebaseConfig";
import { ref, push, get, update, remove } from "firebase/database";

export const fetchProductsAPI = async () => {
  const snapshot = await get(ref(db, "products/"));
  const data = snapshot.val() || {};

  return Object.keys(data).map((id) => ({
    id,
    ...data[id],
  }));
};

export const addProductAPI = async (product) => {
  const productsRef = ref(db, "products/");
  await push(productsRef, product);
};

export const updateProductAPI = async (id, product) => {
  await update(ref(db, `products/${id}`), product);
};

export const deleteProductAPI = async (id) => {
  await remove(ref(db, `products/${id}`));
};