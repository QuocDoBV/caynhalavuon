import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-primary">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="bg-cover bg-center h-[80vh]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Công Ty TNHH MTV Cây Nhà Lá Vườn</h1>
            <p className="text-xl md:text-2xl mb-8">Kết nối thiên nhiên với cuộc sống hiện đại.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent hover:bg-accent-dark text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={() => smoothScrollTo("about")}
              >
                Tìm Hiểu Thêm
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={() => smoothScrollTo("contact")}
              >
                Liên Hệ Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
