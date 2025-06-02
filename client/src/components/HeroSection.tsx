import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import companyIntroduce from "@/imgs/companyIntroduce.jpg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t: tHero } = useTranslation('heroSection');
  const { t: tCommon } = useTranslation('common');
  return (
    <section id="home" className="relative bg-primary">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="bg-cover bg-center h-[80vh]" 
        style={{ backgroundImage: `url(${companyIntroduce})` }}
      >
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">{tHero('company_full_name')}</h1>
            {/* <p className="text-xl md:text-2xl mb-8">Chuyển giao công nghệ - Nâng tầm chất lượng.</p> */}
            <p className="text-xl md:text-2xl mb-8">{tHero('tagline')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent hover:bg-accent-dark text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={() => smoothScrollTo("about")}
              >
                {tCommon('learnMore')}
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={() => smoothScrollTo("contact")}
              >
                {tCommon('contactNow')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
