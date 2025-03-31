import Link from 'next/link';
import { useUser  } from '@clerk/nextjs';

const Dashboard = () => {
    const { user } = useUser ();

    return (
        <div>
            <h1>Welcome, {user?.firstName || "Guest"}!</h1>  { /*first time user access*/}
            <nav>
                <ul>
                    <li><Link href="/grocery-search">Search Groceries</Link></li>
                    <li><Link href="/shopping-list">Shopping List</Link></li>
                    <li><Link href="/inventory">Check Inventory</Link></li>
                    <li><Link href="/recipe-suggestions">Recipe Suggestions</Link></li>
                    <li><Link href="/expense-tracking">Expense Tracking</Link></li>
                    <li><Link href="/discount-alert">Discount Alert</Link></li>
                    <li><Link href="/waste-reduction-alert">Waste Reduction Alert</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;