import React from 'react'

const FeaturedProducts = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-100 h-48 rounded-lg"></div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default FeaturedProducts