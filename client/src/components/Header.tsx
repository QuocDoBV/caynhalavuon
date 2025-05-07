import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { smoothScrollTo } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();

  // Handle scroll events to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    smoothScrollTo(id);
  };

  const navLinks = [
    { name: "Trang Chủ", id: "home" },
    { name: "Giới Thiệu", id: "about" },
    { name: "Dịch Vụ", id: "services" },
    { name: "Tầm Nhìn", id: "vision" },
    { name: "Liên Hệ", id: "contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white transition-shadow duration-300",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-2xl font-bold font-heading">Cây Nhà Lá Vườn</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.id);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white border-t border-gray-200 transition-all duration-300",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.id);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
