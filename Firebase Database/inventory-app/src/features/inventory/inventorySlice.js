import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductsAPI,
  addProductAPI,
  updateProductAPI,
  deleteProductAPI,
} from "./inventoryAPI";


export const fetchProducts = createAsyncThunk(
  "inventory/fetchProducts",
  async () => {
    return await fetchProductsAPI();
  }
);

export const addProduct = createAsyncThunk(
  "inventory/addProduct",
  async (product, { dispatch }) => {
    await addProductAPI(product);
    dispatch(fetchProducts()); // refresh list
  }
);

export const updateProduct = createAsyncThunk(
  "inventory/updateProduct",
  async ({ id, product }, { dispatch }) => {
    await updateProductAPI(id, product);
    dispatch(fetchProducts());
  }
);

export const deleteProduct = createAsyncThunk(
  "inventory/deleteProduct",
  async (id, { dispatch }) => {
    await deleteProductAPI(id);
    dispatch(fetchProducts());
  }
);

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default inventorySlice.reducer;