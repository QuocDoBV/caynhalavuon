export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Về Chúng Tôi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">Công ty TNHH MTV Cây Nhà Lá Vườn là doanh nghiệp chuyên cung cấp các sản phẩm và dịch vụ liên quan đến nông nghiệp và cây trồng.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Cây Nhà Lá Vườn Farm" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Thông Tin Cơ Bản</h3>
            <p className="text-gray-600 mb-6">Được thành lập vào năm 2015, Cây Nhà Lá Vườn đã không ngừng phát triển và khẳng định vị thế trong lĩnh vực cung cấp giải pháp nông nghiệp bền vững tại Việt Nam.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Chất Lượng</h4>
                  <p className="text-gray-600">Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Bền Vững</h4>
                  <p className="text-gray-600">Áp dụng các phương pháp canh tác bền vững và thân thiện với môi trường.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Đối Tác Tin Cậy</h4>
                  <p className="text-gray-600">Xây dựng mối quan hệ lâu dài với khách hàng và đối tác.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
