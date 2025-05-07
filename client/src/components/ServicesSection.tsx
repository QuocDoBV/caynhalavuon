import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothScrollTo } from "@/lib/utils";

export default function ServicesSection() {
  const services = [
    {
      title: "Cung Cấp Giống Cây Trồng",
      description: "Cung cấp các loại giống cây trồng chất lượng cao, đảm bảo năng suất và khả năng chống chịu với điều kiện thời tiết khắc nghiệt.",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Tư Vấn Kỹ Thuật",
      description: "Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi sẽ tư vấn, hỗ trợ kỹ thuật trong suốt quá trình canh tác.",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Cung Cấp Nông Sản",
      description: "Sản xuất và phân phối các loại nông sản sạch, an toàn theo tiêu chuẩn VietGAP và hữu cơ.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Chúng tôi cung cấp đa dạng các sản phẩm và dịch vụ liên quan đến nông nghiệp, từ cung cấp giống cây trồng đến tư vấn kỹ thuật.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                  Tìm hiểu thêm
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            onClick={() => smoothScrollTo("contact")}
          >
            Liên Hệ Tư Vấn
          </Button>
        </div>
      </div>
    </section>
  );
}
