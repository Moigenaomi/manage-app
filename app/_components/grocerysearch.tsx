import { useState } from 'react';
 
interface GroceryItem{
    id: number;
    name: string;
}
const GrocerySearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<GroceryItem[]>([]);

    const handleSearch = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Replace with your actual search logic
        const response = await fetch(`/api/groceries?query=${query}`);
        const data = await response.json();
        setResults(data);
    }; // e as a form submission event 

    return (
        <div>
            <h2>Search Groceries</h2>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for groceries..." onChange={(e) => setQuery(e.target.value)} required />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GrocerySearch;