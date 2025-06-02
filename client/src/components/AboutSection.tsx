import companyIntroduce from "@/imgs/companyIntroduce.jpg";
import { useTranslation } from "react-i18next";
export default function AboutSection() {
  const { t: tAbout} = useTranslation('aboutSection');
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">{tAbout('aboutUs')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{tAbout('company_description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              // src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              src={companyIntroduce}
              alt="Cây Nhà Lá Vườn Farm" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">{tAbout('basic_information')}</h3>
            <p className="text-gray-600 mb-6">{tAbout('company_info')}</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{tAbout('quality')}</h4>
                  <p className="text-gray-600">{tAbout('quality_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{tAbout('sustainability')}</h4>
                  <p className="text-gray-600">{tAbout('sustainability_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{tAbout('trusted_partner')}</h4>
                  <p className="text-gray-600">{tAbout('trusted_partner_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
