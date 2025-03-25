import { useEffect, useState } from 'react';

interface Discount{
    id: number;
    description: string;
    percentage: number;
}
const DiscountAlert = () => {
    const [discounts, setDiscounts] = useState<Discount[]>([]);

    useEffect(() => {
        const fetchDiscounts = async () => {
            const response = await fetch('/api/discounts');
            const data = await response.json();
            setDiscounts(data);
        };
        fetchDiscounts();
    }, []);

    return (
        <div>
            <h2>Discount Alerts</h2>
            <ul>
                {discounts.map((discount) => (
                    <li key={discount.id}>{discount.description}: {discount.percentage}% off</li>
                ))}
            </ul>
        </div>
    );
};

export default DiscountAlert;