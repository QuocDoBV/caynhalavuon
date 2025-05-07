import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Starting to seed database...");

    // Seed services
    const services = [
      {
        title: "Cung Cấp Giống Cây Trồng",
        description: "Cung cấp các loại giống cây trồng chất lượng cao, đảm bảo năng suất và khả năng chống chịu với điều kiện thời tiết khắc nghiệt.",
        imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      },
      {
        title: "Tư Vấn Kỹ Thuật",
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
        name: "Nguyễn Văn A",
        position: "Chủ trang trại tại Lâm Đồng",
        content: "Tôi đã sử dụng dịch vụ tư vấn kỹ thuật của Cây Nhà Lá Vườn cho trang trại của mình. Các chuyên gia rất nhiệt tình và giàu kinh nghiệm, giúp năng suất của trang trại tăng đáng kể.",
        rating: 5
      },
      {
        name: "Trần Thị B",
        position: "Khách hàng tại TP.HCM",
        content: "Các sản phẩm nông sản của Cây Nhà Lá Vườn luôn tươi ngon và an toàn. Gia đình tôi rất an tâm khi sử dụng và sẽ tiếp tục ủng hộ công ty trong tương lai.",
        rating: 5
      },
      {
        name: "Lê Văn C",
        position: "Hợp tác xã Nông nghiệp Sạch",
        content: "Giống cây trồng của Cây Nhà Lá Vườn có tỷ lệ nảy mầm cao và sinh trưởng tốt. Đội ngũ hỗ trợ kỹ thuật luôn sẵn sàng giải đáp mọi thắc mắc của chúng tôi.",
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
