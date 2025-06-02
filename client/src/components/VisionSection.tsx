import suMenh from "@/imgs/suMenh.jpg";
import { useTranslation } from "react-i18next";
export default function VisionSection() {
  const visionPoints = [
    "goal_1",
    "goal_2",
    "goal_3",
    "goal_4"
  ];
  const { t} = useTranslation('visionSection');

  return (
    <section id="vision" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t('vision')}</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6">{t('future_heading')}</h3>
            <p className="text-lg mb-6 leading-relaxed">
              {t('future_desc1')}
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              {t('future_desc2')}
            </p>
            
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-accent">
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="ml-4">{t(point)}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src= {suMenh}
              alt="Tầm nhìn Cây Nhà Lá Vườn" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
