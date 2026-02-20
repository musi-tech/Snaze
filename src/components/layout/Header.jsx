import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag, X, Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleMenuEnter = (menuName) => setActiveMenu(menuName);
  const handleMenuLeave = () => setActiveMenu(null);

  const menCategories = [
    { label: "Shirts", href: "/men#shirts" },
    { label: "Jackets", href: "/men#jackets" },
    { label: "Trousers", href: "/men#trousers" },
    { label: "Sneakers", href: "/men#sneakers" },
    { label: "Accessories", href: "/men#accessories" },
  ];

  const womenCategories = [
    { label: "Dresses", href: "/ladies#dresses" },
    { label: "Tops", href: "/ladies#tops" },
    { label: "Skirts", href: "/ladies#skirts" },
    { label: "Bags", href: "/ladies#bags" },
    { label: "Accessories", href: "/ladies#accessories" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#F7F3EE] shadow-sm border-b border-[#E8E0D5]"
          : "bg-transparent"
        }`}
    >
      {/* Announcement bar */}
      <div className="bg-[#2D4A3E] text-[#C8B89A] text-center py-2 text-xs tracking-[0.2em] uppercase font-medium">
        Free Shipping on all orders over ₹999 &nbsp;|&nbsp; Sustainable, Ethically Made
      </div>

      {/* Main navigation */}
      <nav className="flex justify-between items-center py-4 px-6 lg:px-10 relative">
        {/* Mobile menu button */}
        <button
          className={`focus:outline-none lg:hidden transition-colors duration-300 ${isScrolled ? "text-[#1C1C1A]" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-black tracking-[0.25em] text-2xl lg:text-3xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-colors duration-300 ${isScrolled ? "text-[#1C1C1A]" : "text-white"
            }`}
        >
          SNAZE
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex space-x-8 text-xs items-center">
          {/* MEN dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuEnter("men")}
            onMouseLeave={handleMenuLeave}
          >
            <Link
              to="/men"
              className={`flex items-center gap-1 transition-colors duration-300 uppercase tracking-[0.15em] font-semibold pb-1 ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"
                } ${location.pathname === "/men" ? "border-b border-current" : ""}`}
            >
              Men <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "men" ? "rotate-180" : ""}`} />
            </Link>
            {activeMenu === "men" && (
              <div className="absolute left-0 top-full mt-2 bg-[#F7F3EE] border border-[#E8E0D5] shadow-xl py-3 w-44 z-50">
                {menCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    to={cat.href}
                    className="block px-5 py-2.5 text-xs text-[#3A3A38] hover:bg-[#EDE7DD] hover:text-[#2D4A3E] transition-colors duration-200 tracking-wider uppercase"
                  >
                    {cat.label}
                  </Link>
                ))}
                <div className="border-t border-[#E8E0D5] mt-2 pt-2 px-5">
                  <Link to="/men" className="text-xs font-semibold text-[#2D4A3E] hover:underline tracking-wider uppercase">
                    View All →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* WOMEN dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuEnter("women")}
            onMouseLeave={handleMenuLeave}
          >
            <Link
              to="/ladies"
              className={`flex items-center gap-1 transition-colors duration-300 uppercase tracking-[0.15em] font-semibold pb-1 ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"
                } ${location.pathname === "/ladies" ? "border-b border-current" : ""}`}
            >
              Women <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "women" ? "rotate-180" : ""}`} />
            </Link>
            {activeMenu === "women" && (
              <div className="absolute left-0 top-full mt-2 bg-[#F7F3EE] border border-[#E8E0D5] shadow-xl py-3 w-44 z-50">
                {womenCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    to={cat.href}
                    className="block px-5 py-2.5 text-xs text-[#3A3A38] hover:bg-[#EDE7DD] hover:text-[#2D4A3E] transition-colors duration-200 tracking-wider uppercase"
                  >
                    {cat.label}
                  </Link>
                ))}
                <div className="border-t border-[#E8E0D5] mt-2 pt-2 px-5">
                  <Link to="/ladies" className="text-xs font-semibold text-[#2D4A3E] hover:underline tracking-wider uppercase">
                    View All →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/"
            className={`transition-colors duration-300 uppercase tracking-[0.15em] font-medium ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"
              }`}
          >
            Collections
          </Link>

          <Link
            to="/"
            className={`transition-colors duration-300 uppercase tracking-[0.15em] font-medium ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"
              }`}
          >
            About
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex space-x-4 items-center">
          <button className={`transition-colors duration-300 ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"}`}>
            <Search size={18} />
          </button>
          <button className={`transition-colors duration-300 ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"}`}>
            <User size={18} />
          </button>
          <button className={`transition-colors duration-300 relative ${isScrolled ? "text-[#1C1C1A] hover:text-[#2D4A3E]" : "text-white hover:text-[#C8B89A]"}`}>
            <ShoppingBag size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#F7F3EE] ${mobileMenuOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="py-4 space-y-1 px-6 border-t border-[#E8E0D5]">
          <Link to="/men" className="block py-3 font-semibold uppercase tracking-widest text-sm text-[#1C1C1A] border-b border-[#E8E0D5]">
            Men
          </Link>
          <div className="pl-4 space-y-1 pb-2 border-b border-[#E8E0D5]">
            {menCategories.map((cat) => (
              <Link key={cat.label} to={cat.href} className="block py-1.5 text-xs text-[#5A5A58] hover:text-[#2D4A3E] tracking-wider uppercase">
                {cat.label}
              </Link>
            ))}
          </div>
          <Link to="/ladies" className="block py-3 font-semibold uppercase tracking-widest text-sm text-[#1C1C1A] border-b border-[#E8E0D5]">
            Women
          </Link>
          <div className="pl-4 space-y-1 pb-2 border-b border-[#E8E0D5]">
            {womenCategories.map((cat) => (
              <Link key={cat.label} to={cat.href} className="block py-1.5 text-xs text-[#5A5A58] hover:text-[#2D4A3E] tracking-wider uppercase">
                {cat.label}
              </Link>
            ))}
          </div>
          <Link to="/" className="block py-3 font-medium uppercase tracking-widest text-sm text-[#1C1C1A] border-b border-[#E8E0D5]">
            Collections
          </Link>
          <Link to="/" className="block py-3 font-medium uppercase tracking-widest text-sm text-[#1C1C1A]">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
