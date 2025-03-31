"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

const AddGroceryForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [text, setText]= useState ("");

  type Grocery ={
    _id: string;
    name: string;
    quantity: number;
    category?: string;
  }

  const addGrocery = useMutation(api.groceries.addGrocery);
  const groceries: Grocery[]|undefined = useQuery(api.groceries.getGroceries) ?? []; // ensures always in an array
  ;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && quantity && category) {
      await addGrocery({ name, quantity, category });
      setName("");
      setQuantity(1);
      setCategory("");
    }
  };

  return (
    <div>
        <div className="flex flex-col gap-4">
     {groceries?.map((grocery: Grocery)=>
      (
        <div key={grocery._id}>
        {grocery.name}- {grocery.quantity}
        </div>
     ))}
     </div>

      <form  onSubmit={handleSubmit} className="space-y-4 p-4">
      
        <input value={text} onChange = {(e)=> setText(e.target.value)} className="text-black" placeholder="Enter Grocery"/>
      
        <input
          type="text"
          placeholder="Grocery name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Grocery
        </button>
    </form>

      <ul>
        {groceries?.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity} ({item.category})
          </li>
        ))}
      </ul>
</div>

  );
};

export default AddGroceryForm;
