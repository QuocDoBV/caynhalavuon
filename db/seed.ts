import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Starting to seed database...");

    // Seed services
    const services = [
      {
        title: "Tư vấn Kỹ thuật và Quy trình Sản xuất",
        description: "Cung cấp các loại giống cây trồng chất lượng cao, đảm bảo năng suất và khả năng chống chịu với điều kiện thời tiết khắc nghiệt.",
        imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      },
      {
        title: "Tư vấn An toàn Thực phẩm và Hệ thống Quản lý Chất lượng",
        description: "Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi sẽ tư vấn, hỗ trợ kỹ thuật trong suốt quá trình canh tác.",
        imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      },
      {
        title: "Cung Cấp Nông Sản",
        description: "Sản xuất và phân phối các loại nông sản sạch, an toàn theo tiêu chuẩn VietGAP và hữu cơ.",
        imageUrl: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      }
    ];

    // Check if services already exist
    const existingServices = await db.query.services.findMany();
    
    if (existingServices.length === 0) {
      console.log("Seeding services...");
      
      for (const service of services) {
        const validatedService = schema.servicesInsertSchema.parse(service);
        await db.insert(schema.services).values(validatedService);
      }
      
      console.log("Services seeded successfully!");
    } else {
      console.log("Services already exist, skipping seed...");
    }

    // Seed testimonials
    const testimonials = [
      {
        name: "Nguyễn Văn Vĩnh",
        position: "Chủ hộ kinh doanh bánh tráng phơi sương",
        content: "Tôi đã sử dụng dịch vụ tư vấn kỹ thuật và chuyển giao công nghệ của CSF cho cơ sở sản xuất thực phẩm của mình. Đội ngũ chuyên gia rất chuyên nghiệp và tận tâm, giúp quy trình sản xuất được tối ưu hóa rõ rệt, chất lượng sản phẩm cũng được nâng cao đáng kể.",
        rating: 5
      },
      {
        name: "Trần Thị Mậu Thanh",
        position: "Chủ Doanh nghiệp Sản Xuất Hạt điều",
        content: "Tôi đã sử dụng dịch vụ tư vấn và chuyển giao công nghệ của CSF cho doanh nghiệp sản xuất thực phẩm của mình. Đội ngũ chuyên gia rất chuyên nghiệp và am hiểu sâu sắc, giúp chúng tôi tối ưu hóa quy trình và nâng cao chất lượng sản phẩm. Sản phẩm sau khi áp dụng công nghệ mới đã được thị trường đón nhận rất tích cực.",
        rating: 5
      },
      {
        name: "Lê Văn Quý",
        position: "Hợp tác xã Nông nghiệp Sạch",
        content: "Công ty CSF đã giúp chúng tôi phát triển sản phẩm thực phẩm mới, từ việc nghiên cứu công thức đến thử nghiệm sản xuất. Chúng tôi rất ấn tượng với sự tận tâm và kinh nghiệm của đội ngũ chuyên gia. Đây là đối tác chiến lược quan trọng cho sự phát triển của chúng tôi.",
        rating: 4
      }
    ];

    // Check if testimonials already exist
    const existingTestimonials = await db.query.testimonials.findMany();
    
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      
      for (const testimonial of testimonials) {
        const validatedTestimonial = schema.testimonialsInsertSchema.parse(testimonial);
        await db.insert(schema.testimonials).values(validatedTestimonial);
      }
      
      console.log("Testimonials seeded successfully!");
    } else {
      console.log("Testimonials already exist, skipping seed...");
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
