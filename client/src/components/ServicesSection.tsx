import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothScrollTo } from "@/lib/utils";
import consultantImg from "@/imgs/consultant2.jpg";
import teachTransfer from "@/imgs/teachTransfer.jpg";
import r_d from "@/imgs/R_D1.jpg";
import daoTaoWorkShop from "@/imgs/daoTaoWorkShop.jpg";
import companyIntroduce from "@/imgs/companyIntroduce.jpg";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t} = useTranslation('servicesSection');
  const { t : tCommon} = useTranslation('common');
  const services = [
    {
      title: "technical_consulting_title",
      description: "technical_consulting_desc",
      image: consultantImg
    },
    {
      title: "food_safety_consulting_title",
      description: "food_safety_consulting_desc",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "rd_title",
      description: "rd_desc",
      image: r_d
    },
    {
      title: "tech_transfer_title",
      description: "tech_transfer_desc",
      image: teachTransfer
    },
    {
      title: "training_title",
      description: "training_desc",
      image: daoTaoWorkShop
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">{t('our_services')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('our_services_desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(service.title)} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{t(service.title)}</h3>
                <p className="text-gray-600 mb-4">
                  {t(service.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            onClick={() => smoothScrollTo("contact")}
          >
            {tCommon('contactNow')}
          </Button>
        </div>
      </div>
    </section>
  );
}
