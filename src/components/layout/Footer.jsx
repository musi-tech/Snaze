import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={16} className="text-[#2D4A3E]" />
              <h3 className="text-2xl font-black tracking-[0.25em] uppercase text-[#F7F3EE]">SNAZE</h3>
            </div>
            <p className="text-[#8A8A88] mb-6 text-sm leading-relaxed max-w-xs">
              Premium fashion rooted in nature. Sustainable collections for Men & Women — crafted with conscience, worn with pride.
            </p>

            {/* Social icons */}
            <div className="flex space-x-3 mb-7">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2D4A3E] hover:border-[#2D4A3E] transition-all duration-300"
                >
                  <Icon size={15} className="text-[#C8B89A]" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2.5 text-sm text-[#8A8A88]">
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-[#2D4A3E]" />
                <span>support@snaze.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-[#2D4A3E]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-[#2D4A3E]" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Men's links */}
          <div>
            <h4 className="uppercase text-xs font-bold mb-5 tracking-[0.2em] text-[#C8B89A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full"></span>
              Men's
            </h4>
            <ul className="space-y-3 text-[#8A8A88] text-sm">
              {["All Men's:::/men", "Shirts:::/men#shirts", "Jackets:::/men#jackets", "Trousers:::/men#trousers", "Sneakers:::/men#sneakers", "Accessories:::/men#accessories"].map((item) => {
                const [label, href] = item.split(":::");
                return (
                  <li key={label}>
                    <Link to={href} className="hover:text-[#C8B89A] hover:pl-1 transition-all duration-200">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Women's links */}
          <div>
            <h4 className="uppercase text-xs font-bold mb-5 tracking-[0.2em] text-[#C8B89A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full"></span>
              Women's
            </h4>
            <ul className="space-y-3 text-[#8A8A88] text-sm">
              {["All Women's:::/ladies", "Dresses:::/ladies#dresses", "Tops & Blouses:::/ladies#tops", "Skirts:::/ladies#skirts", "Bags & Purses:::/ladies#bags", "Accessories:::/ladies#accessories"].map((item) => {
                const [label, href] = item.split(":::");
                return (
                  <li key={label}>
                    <Link to={href} className="hover:text-[#C8B89A] hover:pl-1 transition-all duration-200">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="uppercase text-xs font-bold mb-5 tracking-[0.2em] text-[#C8B89A]">
              Help & Info
            </h4>
            <ul className="space-y-3 text-[#8A8A88] text-sm">
              {[
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
                ["Shipping & Returns", "/shipping"],
                ["FAQs", "/faqs"],
                ["Size Guide", "/size-guide"],
                ["Track Your Order", "/order-tracking"],
                ["Terms & Conditions", "/terms-and-conditions"],
                ["Privacy Policy", "/privacy-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-[#C8B89A] hover:pl-1 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5A5A58] tracking-wide">
            © 2025 SNAZE. All rights reserved. Made with <span className="text-[#2D4A3E]">♥</span> in India.
          </p>
          <div className="flex items-center gap-2.5">
            {["VISA", "MC", "UPI", "GPay", "COD"].map((pm) => (
              <span
                key={pm}
                className="bg-white/5 border border-white/10 text-[#8A8A88] text-[10px] px-2.5 py-1 font-semibold tracking-widest"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
