// import {react} from 'react';

const categories = [
    { name: "Fruit", icon: "🍊" },
    { name: "Vegetables", icon: "🥦" },
    { name: "Milk & Tea", icon: "🥛" },
    { name: "Meat", icon: "🍖" },
  ];
  
  const CategoryList = () => {
    return (
      <div className="flex justify-around p-4">
        <h2 className="text-primary font-bold">Shop by category</h2>
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl">{category.icon}</div>
            <p className="text-sm">{category.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryList;
  