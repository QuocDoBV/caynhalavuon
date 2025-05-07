import { Link } from "wouter";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Về Cây Nhà Lá Vườn</h3>
            <p className="text-gray-400 mb-6">
              Công ty TNHH MTV Cây Nhà Lá Vườn chuyên cung cấp các sản phẩm và dịch vụ nông nghiệp bền vững, góp phần bảo vệ môi trường và nâng cao chất lượng cuộc sống.
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
            <h3 className="text-xl font-bold font-heading mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("home", e)}
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("about", e)}
                >
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a 
                  href="#mission" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("mission", e)}
                >
                  Sứ Mệnh
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("services", e)}
                >
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a 
                  href="#vision" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("vision", e)}
                >
                  Tầm Nhìn
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleLinkClick("contact", e)}
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Cung Cấp Giống Cây Trồng</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Tư Vấn Kỹ Thuật</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Cung Cấp Nông Sản</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Thiết Kế Vườn</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Đào Tạo Nông Nghiệp</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">123 Đường Nông Nghiệp, Phường Tân Phú, Quận 9, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">(+84) 28 1234 5678</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">info@caynhilavuon.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">Thứ Hai - Thứ Sáu: 8:00 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Công Ty TNHH MTV Cây Nhà Lá Vườn. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
