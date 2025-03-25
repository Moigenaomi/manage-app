"use client";
import {useMutation , useQuery} from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useState } from "react";
import AddGroceryForm from "./components/groceryform";
import GroceryList from "./components/grocerylist";


export default function Page() {
  const groceries = useQuery(api.groceries.getGroceries);
  const addGrocery = useMutation(api.groceries.addGrocery);
  const updateGrocery = useMutation(api.groceries.updateGroceries);
  const deleteGrocery = useMutation(api.groceries.deleteGroceries);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroceries = groceries?.filter((g: Grocery) =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = async () => {
    await addGrocery({ name: "Bananas", quantity: 3, category: "Fruits" });
  };
  const handleUpdate = async (id:Id<"groceries">) => {
    await updateGrocery({ id, quantity: 5 });
  };
  const handleDelete = async (id:Id<"groceries"> ) => {
    await deleteGrocery({ id });
  };
  type Grocery = {
    _id: Id<"groceries">;
    name: string;
    quantity: number;
    category: string;
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-4">Grocery List</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search groceries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      <AddGroceryForm />
      <GroceryList/>
      {/* Display filtered groceries */}
      {filteredGroceries && filteredGroceries.length > 0 ? (
        <ul className="space-y-2">
          {filteredGroceries.map((g: Grocery) => (
            <li
              key={g._id}
              className="p-2 border rounded flex justify-between items-center"
            >
              <span>
                {g.name} - {g.quantity} ({g.category})
              </span>
               </li>
          ))}
        </ul>
      ) : (
        <p>No groceries found!</p>
      )}
      <button onClick={handleAdd}>Add Banana</button>
      <ul>
        {groceries?.map((g:Grocery) => (
          <li key={g._id}>
            {g.name} - {g.quantity}
            <button onClick={() => handleUpdate(g._id)}>Update </button>
            <button onClick={() => handleDelete(g._id)}>Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



