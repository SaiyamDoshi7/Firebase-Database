import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/inventory/inventorySlice";

export default function EditProduct({ product, close }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(product);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, product: form }));
    close();
  };

  return (
    <div>
      {/* Modal */}
      <div>

        {/* Close Button */}
        <button onClick={close}>
          ✖
        </button>

        {/* Title */}
        <h2>Edit Product</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label>Product Name</label>
            <input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />
          </div>

          {/* Category */}
          <div>
            <label>Category</label>
            <input
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              required
            />
          </div>

          {/* Price */}
          <div>
            <label>Price (₹)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label>Stock Quantity</label>
            <input
              type="number"
              value={form.stock}
              onChange={(e) =>
                setForm({ ...form, stock: e.target.value })
              }
              required
            />
          </div>

          {/* Buttons */}
          <div>
            <button type="submit">Update</button>
            <button type="button" onClick={close}>
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}