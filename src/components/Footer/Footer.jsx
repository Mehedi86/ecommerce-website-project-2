"use client";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white px-6 py-10">
      <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="space-y-4">
          <Image src="/img/logo1.png" alt="logo" width={150} height={80} className="mx-auto"/>
          <p className="text-sm text-[#ccc]">
            BRAND NEW CAMERA , LENSE & ACCESSORIES SHOP OF RENOWNED BRAND LIKE DJI, SONY, CANON,<br/>
            GODOX, VILTROX, TEMRON ETC #DJI OFFICIAL ,<br/> DILLER# #LEXAR OFFICIAL DILLER#
          </p>
        </div>

        {/* Column 2 - Information */}
        <div>
          <h3 className="text-white font-bold uppercase text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">About Us</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Terms & Conditions</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Privacy Policy</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Delivery Policy</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Return Policy</Link></li>
          </ul>
        </div>

        {/* Column 3 - Useful Link */}
        <div>
          <h3 className="text-white font-bold uppercase text-lg mb-4">Usefull Link</h3>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Contact Us</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Login</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Register</Link></li>
            <li className="flex items-center gap-2"><BsChevronRight /> <Link href="/">Shopping Cart</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase text-lg mb-4">Contact Info</h3>
          <div className="flex items-start gap-3 text-sm text-[#ccc]">
            <span className="p-2 rounded-full bg-white text-black flex items-center justify-center mt-1"><SlLocationPin /></span>
            <span>Dhaka, Baitul Mukarram, New Super Market, Block:C, Shop:8/Ka</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#ccc]">
            <span className="p-2 rounded-full bg-white text-black flex items-center justify-center"><MdOutlineEmail /></span>
            <span>camerapark65@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#ccc]">
            <span className="p-2 rounded-full bg-white text-black flex items-center justify-center"><LuPhoneCall /></span>
            <span>01928989209 / 01842188242</span>
          </div>

          <div className="flex gap-3 pt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <span key={i} className="w-8 h-8 flex items-center justify-center bg-[#222224] hover:bg-[#2FB261] text-white rounded-full transition">
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
