"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from 'react';
import { Id } from "../../convex/_generated/dataModel";

type GroceryItem={
    _id: string,
    name: string,
    category: string,
    quantity: number,
}
const GroceryList = () => {
    const groceries = useQuery(api.groceries.getGroceries) ?? [];
    const deleteGroceries = useMutation(api.groceries.deleteGroceries);
    
    // const groupedGroceries = groceries.reduce((acc, item) => {
    //     const category = item.category || "Other";
    //     if (!acc[category]) acc[category] = [];
    //     acc[category].push(item);
    //     return acc;
    //   }, {});

    const [items, setItems] = useState<GroceryItem[]>([]);
    const [newItem, setNewItem] = useState('');
    

    const addItem = () => {
        const newGrocery :GroceryItem = {
            _id :crypto.randomUUID(),
            name: newItem,
            category: "Uncategorized",
            quantity:1
        };  
        setItems([...items, newGrocery]);
        setNewItem('');
    };
    const handleDelete = (id: string) => {
        deleteGroceries({ id: id as Id<"groceries"> });
        setItems(items.filter((g) => g._id!== id));
    };
    return (
        <div>
            <h2>Grocery List</h2>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add new item" />
            <button onClick={addItem}>Add</button>
            {/* {Object.entries(groupedGroceries).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h2 className="text-xl font-bold text-blue-600 mb-2">{category}</h2>
        </div> */}
            <ul>
                {groceries.map((grocery: GroceryItem) => (
                    <li key={grocery._id}>
                        {grocery.name} - {grocery.quantity} ({grocery.category})
                        <button onClick={() => handleDelete(grocery._id)}>Delete</button>
                 </li> 
                ))}
            </ul>
            </div>
)};

export default GroceryList;