import { useEffect, useState } from 'react';

interface InventoryItem{
    id: number;
    name: string;
    quantity: number;
}
const Inventory = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);

    useEffect(() => {
        const fetchInventory = async () => {
            const response = await fetch('/api/inventory');
            const data = await response.json();
            setInventory(data);
        };
        fetchInventory();
    }, []);

    return (
        <div>
            <h2>Inventory</h2>
            <ul>
                {inventory.map((item) => (
                    <li key={item.id}>{item.name}: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;