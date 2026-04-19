import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/inventory/inventorySlice";

export default function AddProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  return (
    <div className="card">
      <h2 >Add Product</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            required
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Stock Quantity"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
            required
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}