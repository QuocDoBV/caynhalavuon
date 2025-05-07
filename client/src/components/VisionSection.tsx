export default function VisionSection() {
  const visionPoints = [
    "Thúc đẩy nông nghiệp bền vững",
    "Ứng dụng công nghệ cao vào sản xuất",
    "Mở rộng thị trường trong và ngoài nước",
    "Hỗ trợ phát triển nông thôn bền vững"
  ];

  return (
    <section id="vision" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Tầm Nhìn</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6">Hướng Tới Tương Lai</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Cây Nhà Lá Vườn hướng tới việc trở thành doanh nghiệp dẫn đầu trong lĩnh vực nông nghiệp bền vững tại Việt Nam, tạo ra các giá trị đích thực cho khách hàng, cộng đồng và môi trường.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Chúng tôi cam kết không ngừng đổi mới, áp dụng công nghệ tiên tiến vào sản xuất để tạo ra các sản phẩm nông nghiệp chất lượng cao, an toàn và thân thiện với môi trường.
            </p>
            
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-accent">
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="ml-4">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Tầm nhìn Cây Nhà Lá Vườn" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
