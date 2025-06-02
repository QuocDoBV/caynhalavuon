import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function MissionSection() {
  const { t} = useTranslation('missonSection');
  const missionPoints = [
    {
      icon: "fas fa-seedling",
      title: "sustainable_development",
      description: "sustainable_development_desc"
    },
    {
      icon: "fas fa-users",
      title: "community_development",
      description: "community_development_desc"
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "quality_products",
      description: "quality_products_desc"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">{t('our_mission')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-l-4 border-primary">
            <CardContent className="p-0">
              <div className="text-5xl text-primary mb-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                {t('our_mission_desc')}
              </p>
              {/* <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                Sứ mệnh của CSF là cung cấp các giải pháp công nghệ thực phẩm thiết thực, hiệu quả và dễ tiếp cận, giúp các doanh nghiệp và hộ kinh doanh nâng cao chất lượng sản phẩm, tối ưu hóa quy trình sản xuất và đáp ứng các tiêu chuẩn ngày càng cao trong ngành thực phẩm.
              </p> */}
              <div className="flex justify-end">
                <div className="text-5xl text-primary">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <Card key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className={`${point.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-center mb-4">{t(point.title)}</h3>
                  <p className="text-gray-600 text-center">
                    {t(point.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
