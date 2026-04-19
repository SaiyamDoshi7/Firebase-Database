import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
} from "../features/inventory/inventorySlice";
import EditProduct from "./EditProduct";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.inventory);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="card">
      {/* Title */}
      <h2>Product Inventory</h2>

      {/* Table */}
      <div>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>

                {/* Stock */}
                <td className="">
                  {p.stock < 5
                    ? `Low Stock (${p.stock})`
                    : `In Stock (${p.stock})`}  
                </td>

                {/* Actions */}
                <td>
                  <button className="edit-btn" onClick={() => setEditItem(p)}>
                    Edit
                  </button>

                  <button className="delete-btn"
                    onClick={() => dispatch(deleteProduct(p.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <p>No products added yet</p>
      )}

      {/* Edit Modal */}
      {editItem && (
        <EditProduct
          product={editItem}
          close={() => setEditItem(null)}
        />
      )}
    </div>
  );
}