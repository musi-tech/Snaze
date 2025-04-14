import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl uppercase mb-6">SNAZE</h3>
            <p className="opacity-70 mb-6">
              Modern streetwear with a minimalist aesthetic for the design-conscious urbanite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Instagram />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Twitter />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Facebook />
              </a>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-sm font-medium mb-4">Shop</h4>
            <ul className="space-y-2 opacity-70">
              <li><Link href="/category/new"><a className="hover:text-[#FF3366] transition-colors duration-300">New Arrivals</a></Link></li>
              <li><Link href="/category/bestsellers"><a className="hover:text-[#FF3366] transition-colors duration-300">Bestsellers</a></Link></li>
              <li><Link href="/category/streetwear"><a className="hover:text-[#FF3366] transition-colors duration-300">Streetwear</a></Link></li>
              <li><Link href="/category/minimalist"><a className="hover:text-[#FF3366] transition-colors duration-300">Minimalist</a></Link></li>
              <li><Link href="/category/accessories"><a className="hover:text-[#FF3366] transition-colors duration-300">Accessories</a></Link></li>
              <li><Link href="/category/sale"><a className="hover:text-[#FF3366] transition-colors duration-300">Sale</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-sm font-medium mb-4">Information</h4>
            <ul className="space-y-2 opacity-70">
              <li><Link href="/about"><a className="hover:text-[#FF3366] transition-colors duration-300">About Us</a></Link></li>
              <li><Link href="/sustainability"><a className="hover:text-[#FF3366] transition-colors duration-300">Sustainability</a></Link></li>
              <li><Link href="/stores"><a className="hover:text-[#FF3366] transition-colors duration-300">Store Locations</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-[#FF3366] transition-colors duration-300">Careers</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-[#FF3366] transition-colors duration-300">Blog</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-sm font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 opacity-70">
              <li><Link href="/contact"><a className="hover:text-[#FF3366] transition-colors duration-300">Contact Us</a></Link></li>
              <li><Link href="/shipping"><a className="hover:text-[#FF3366] transition-colors duration-300">Shipping & Returns</a></Link></li>
              <li><Link href="/faqs"><a className="hover:text-[#FF3366] transition-colors duration-300">FAQs</a></Link></li>
              <li><Link href="/size-guide"><a className="hover:text-[#FF3366] transition-colors duration-300">Size Guide</a></Link></li>
              <li><Link href="/order-tracking"><a className="hover:text-[#FF3366] transition-colors duration-300">Track Your Order</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            &copy; 2023 SNAZE. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm opacity-70">
            <Link href="/privacy"><a className="hover:text-[#FF3366] transition-colors duration-300">Privacy Policy</a></Link>
            <Link href="/terms"><a className="hover:text-[#FF3366] transition-colors duration-300">Terms of Service</a></Link>
            <Link href="/accessibility"><a className="hover:text-[#FF3366] transition-colors duration-300">Accessibility</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
