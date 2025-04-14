import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleMenuToggle = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="mx-auto">
        {/* Announcement bar */}
        <div className="bg-black text-white text-center py-2 text-xs">
          <p>FREE SHIPPING ON ALL ORDERS OVER $150</p>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4 px-4 relative">
          {/* Mobile menu button */}
          <button 
            className="text-black focus:outline-none lg:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="font-bold tracking-wider text-center text-2xl lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            SNAZE
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-6 text-sm">
            <Link 
              href="/category/new" 
              className={`hover:text-[#FF3366] transition-colors duration-300 uppercase tracking-wider ${location === '/category/new' ? 'text-[#FF3366]' : ''}`}
              onMouseEnter={() => handleMenuToggle('new')}
            >
              NEW
            </Link>
            <Link 
              href="/category/collections" 
              className={`hover:text-[#FF3366] transition-colors duration-300 uppercase tracking-wider ${location === '/category/collections' ? 'text-[#FF3366]' : ''}`}
              onMouseEnter={() => handleMenuToggle('collections')}
            >
              COLLECTIONS
            </Link>
            <Link 
              href="/category/streetwear" 
              className={`hover:text-[#FF3366] transition-colors duration-300 uppercase tracking-wider ${location === '/category/streetwear' ? 'text-[#FF3366]' : ''}`}
              onMouseEnter={() => handleMenuToggle('streetwear')}
            >
              STREETWEAR
            </Link>
            <Link 
              href="/category/minimalist" 
              className={`hover:text-[#FF3366] transition-colors duration-300 uppercase tracking-wider ${location === '/category/minimalist' ? 'text-[#FF3366]' : ''}`}
              onMouseEnter={() => handleMenuToggle('minimalist')}
            >
              MINIMALIST
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex space-x-4 items-center">
            <button className="hover:text-[#FF3366] transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="hover:text-[#FF3366] transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="hover:text-[#FF3366] transition-colors duration-300 relative">
              <ShoppingBag size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile navigation menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="py-4 space-y-4 px-6">
            <Link href="/category/new" className="block py-2 font-medium uppercase tracking-wider">
              NEW
            </Link>
            <Link href="/category/collections" className="block py-2 font-medium uppercase tracking-wider">
              COLLECTIONS
            </Link>
            <Link href="/category/streetwear" className="block py-2 font-medium uppercase tracking-wider">
              STREETWEAR
            </Link>
            <Link href="/category/minimalist" className="block py-2 font-medium uppercase tracking-wider">
              MINIMALIST
            </Link>
            <Link href="/account" className="block py-2 font-medium uppercase tracking-wider">
              ACCOUNT
            </Link>
            <Link href="/search" className="block py-2 font-medium uppercase tracking-wider">
              SEARCH
            </Link>
          </div>
        </div>

        {/* Megamenu container for Collections */}
        {activeMenu === 'collections' && (
          <div 
            className="absolute left-0 right-0 bg-white border-t border-gray-100 p-8 shadow-md hidden lg:block"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg mb-4 uppercase">Featured</h3>
                <ul className="space-y-2">
                  <li><Link href="/category/new" className="hover:text-[#FF3366] transition-colors duration-300">New Arrivals</Link></li>
                  <li><Link href="/category/bestsellers" className="hover:text-[#FF3366] transition-colors duration-300">Best Sellers</Link></li>
                  <li><Link href="/category/fall-2023" className="hover:text-[#FF3366] transition-colors duration-300">Snaze 2025</Link></li>
                  <li><Link href="/category/exclusives" className="hover:text-[#FF3366] transition-colors duration-300">Exclusives</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-4 uppercase">Categories</h3>
                <ul className="space-y-2">
                  <li><Link href="/category/outerwear" className="hover:text-[#FF3366] transition-colors duration-300">Outerwear</Link></li>
                  <li><Link href="/category/tops" className="hover:text-[#FF3366] transition-colors duration-300">Tops</Link></li>
                  <li><Link href="/category/bottoms" className="hover:text-[#FF3366] transition-colors duration-300">Bottoms</Link></li>
                  <li><Link href="/category/accessories" className="hover:text-[#FF3366] transition-colors duration-300">Accessories</Link></li>
                </ul>
              </div>
              <div className="col-span-2">
                <div className="group overflow-hidden rounded-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80" 
                    alt="Fall Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-2 uppercase text-sm">SNAZE 2025 LOOKBOOK</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
