import { Link } from "wouter";
import { smoothScrollTo } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo(id);
  };
  const { t } = useTranslation('footerSection');

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">{t('about_csf')}</h3>
            <p className="text-gray-400 mb-6">
              {t('about_csf_desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">{t('quick_links')}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("home", e)}
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("about", e)}
                >
                  {t('about_us')}
                </a>
              </li>
              <li>
                <a 
                  href="#mission" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("mission", e)}
                >
                  {t('mission')}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("services", e)}
                >
                  {t('services')}
                </a>
              </li>
              <li>
                <a 
                  href="#vision" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("vision", e)}
                >
                  {t('vision')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("contact", e)}
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">{t('technical_consulting')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">{t('food_safety_consulting')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">{t('product_rd')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">{t('technology_transfer')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">{t('training_workshop')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">{t('phone')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">{t('email')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">{t('working_hours')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>{t('company_name')}</p>
        </div>
      </div>
    </footer>
  );
}
