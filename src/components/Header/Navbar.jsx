'use client';

import Image from 'next/image';
import React from 'react';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className='bg-black'>
            <div className="">
                {/* Top black bar */}
                <div className="bg-black w-2/3 mx-auto text-white flex justify-between items-center px-6 py-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src="/img/logo1.png" alt="logo" width={100} height={50} />
                    </div>

                    {/* Search Bar */}
                    <div className="flex-grow mx-6 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-white py-2 px-4 rounded-md text-black focus:outline-none"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
                        </div>
                    </div>

                    {/* Shopping Cart */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className="bg-[#2c2c2c] rounded-full p-3">
                            <FaShoppingCart size={18} />
                        </div>
                        <div className="leading-tight">
                            <p>Shopping Cart</p>
                            <p className="text-xs">0 item(s): ৳ 0</p>
                        </div>
                    </div>
                </div>

                {/* Bottom navbar menu */}
                <div className='bg-[#1e1e1e] '>
                    <div className="text-white w-2/3 mx-auto text-[13px] font-bold flex items-center px-6 justify-between">
                        {/* Categories */}
                        <div className="bg-[#2F3D4C] py-[12px] px-4 w-[250px] flex justify-between items-center gap-2 cursor-pointer rounded">
                            <span>CATEGORIES</span>
                            <FaBars size={16}/>
                        </div>

                        {/* Nav items */}
                        <div className="flex gap-6 px-6">
                            <span className="py-3 cursor-pointer hover:text-[#2FB261] transition">HOME</span>
                            <span className="py-3 cursor-pointer hover:text-[#2FB261] transition">BEST SELLING PRODUCTS</span>
                            <span className="py-3 cursor-pointer hover:text-[#2FB261] transition">TRENDING PRODUCTS</span>
                            <span className="py-3 cursor-pointer hover:text-[#2FB261] transition">NEW PRODUCTS</span>
                            <span className="py-3 cursor-pointer hover:text-[#2FB261] transition">OFFER PRODUCTS</span>
                        </div>

                        {/* Login/Register */}
                        <div className="py-3 cursor-pointer hover:text-[#2FB261] transition">
                            LOGIN / REGISTER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
