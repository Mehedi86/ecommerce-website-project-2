import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ProductCard({ product }) {
    const { id, name, category, image, price, discountedPrice, offer, rating, stock } = product;

    return (
        <div className="w-[220px] border border-gray-300 rounded-lg p-3 relative">
            {/* Discount badge */}
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-[2px] rounded-full">
                {offer}% off
            </span>

            {/* New badge */}
            {offer < 12 && (<span className="absolute top-9 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-[2px] rounded-full">
                New
            </span>)}

            {/* Product Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-36 object-contain my-4"
            />

            {/* Product Name */}
            <h2 className="text-sm font-semibold text-center mt-2">
                {name}
            </h2>

            {/* Rating Stars */}
            <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        size={12}
                        className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
                    />
                ))}
            </div>

            {/* Price Section */}
            <div className="text-center mt-2">
                <p className="text-red-600 text-lg font-bold">৳ {discountedPrice.toLocaleString()}</p>
                <p className="line-through text-gray-400 text-sm">৳ {price.toLocaleString()}</p>
            </div>
        </div>
    );
}
