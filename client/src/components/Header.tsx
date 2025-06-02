import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { smoothScrollTo } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import logo from "@/imgs/log.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const { t } = useTranslation('header');

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

  // const handleNavLinkClick = (id: string) => {
  //   setIsMobileMenuOpen(false);
  //   smoothScrollTo(id);
  // };
  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);

    // Đợi menu đóng (animation xong), rồi mới scroll
    setTimeout(() => {
      smoothScrollTo(id);
    }, 200); // số ms tương đương với thời gian transition trong menu mobile
  };

  const navLinks = [
    { name: "home", id: "home" },
    { name: "about", id: "about" },
    { name: "services", id: "services" },
    { name: "vision", id: "vision" },
    { name: "contact", id: "contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white transition-shadow duration-300",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center flex-col" >
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div>
              <h2><strong>CSF SOLUTION</strong></h2>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
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
                {t(link.name)}
              </a>
            ))}
            <LanguageSelector />
          </nav>

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
              {t(link.name)}
            </a>
          ))}
          <div className="px-3 pt-2">
            <div className="w-full max-w-[120px]">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}