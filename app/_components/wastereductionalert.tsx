import { useEffect, useState } from 'react';

interface Tip{
    id: number;
    description: string;
    importance: number;
    urgency: number;    
}
const WasteReductionAlert = () => {
    const [tips, setTips] = useState<Tip[]>([]);

    useEffect(() => {
        const fetchTips = async () => {
            const response = await fetch('/api/waste-reduction-tips');
            const data = await response.json();
            setTips(data);
        };
        fetchTips();
    }, []);

    return (
        <div>
            <h2>Waste Reduction Tips</h2>
            <ul>
                {tips.map((tip) => (
                    <li key={tip.id}>{tip.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default WasteReductionAlert;