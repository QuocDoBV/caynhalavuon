import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên").max(100),
  email: z.string().email("Vui lòng nhập email hợp lệ"),
  phone: z.string().min(10, "Vui lòng nhập số điện thoại hợp lệ"),
  subject: z.string().min(1, "Vui lòng chọn chủ đề"),
  message: z.string().min(10, "Nội dung quá ngắn").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Yêu cầu đã được gửi",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Có lỗi xảy ra",
        description: error.message || "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    contactMutation.mutate(data);
    setIsSubmitting(false);
  }

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Địa Chỉ",
      details: ["123 Đường Nông Nghiệp, Phường Tân Phú, Quận 9, TP. Hồ Chí Minh"]
    },
    {
      icon: "fas fa-phone-alt",
      title: "Điện Thoại",
      details: ["(+84) 28 1234 5678", "(+84) 90 1234 567"]
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: ["info@caynhilavuon.com", "support@caynhilavuon.com"]
    },
    {
      icon: "fas fa-clock",
      title: "Giờ Làm Việc",
      details: ["Thứ Hai - Thứ Sáu: 8:00 - 17:30", "Thứ Bảy: 8:00 - 12:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Liên Hệ Với Chúng Tôi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ về các sản phẩm, dịch vụ của Cây Nhà Lá Vườn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                        <i className={info.icon}></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Kết Nối Với Chúng Tôi</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">Gửi Yêu Cầu Tư Vấn</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ và Tên</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nhập họ và tên của bạn" 
                                {...field} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Nhập địa chỉ email của bạn" 
                                {...field}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số Điện Thoại</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Nhập số điện thoại của bạn" 
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Chủ Đề</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Chọn chủ đề" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product">Thông tin sản phẩm</SelectItem>
                              <SelectItem value="service">Dịch vụ tư vấn</SelectItem>
                              <SelectItem value="support">Hỗ trợ kỹ thuật</SelectItem>
                              <SelectItem value="other">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nội Dung</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5} 
                              placeholder="Nhập nội dung yêu cầu của bạn" 
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                      {isSubmitting ? "Đang gửi..." : "Gửi Yêu Cầu"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
