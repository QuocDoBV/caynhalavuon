import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useTranslation } from "react-i18next";



export default function ContactSection() {
  const { t } = useTranslation('contactSection');
  const contactFormSchema = z.object({
  name: z.string().min(2, t('error_full_name_required')).max(100),
  email: z.string().email(t('error_invalid_email')),
  phone: z.string().min(10, t('error_invalid_phone')),
  subject: z.string().min(1, t('error_subject_required')),
  message: z.string().min(10, t('error_message_too_short')).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
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

  async function onSubmit(data: ContactFormValues) {
  setIsSubmitting(true);

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("subject", data.subject);
  formData.append("message", data.message);

  try {
    const res = await fetch("https://formsubmit.co/ajax/thanhduydang97@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await res.json();

    if (res.ok) {
      toast({
        title: t('request_sent'),
        description: t('we_will_contact'),
        variant: "default",
      });
      form.reset();
    } else {
      throw new Error(result.message || t('error_occurred'));
    }
  } catch (error: any) {
    toast({
      title: t('error_occurred'),
      description: error.message || t('please_try_again'),
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
}


  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "address",
      details: [t('address_detail')]
    },
    {
      icon: "fas fa-phone-alt",
      title: "phone",
      details: ["0395782954"]
    },
    {
      icon: "fas fa-envelope",
      title: "email",
      details: ["thanhduydang97@gmail.com"]
    },
    {
      icon: "fas fa-clock",
      title: "working_hours",
      details: [t('working_hours_weekdays'), t('working_hours_saturday')]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">{t('contact_us')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('contact_us_desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">{t('contact_info')}</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                        <i className={info.icon}></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">{t(info.title)}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('connect_with_us')}</h4>
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
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">{t('send_consulting_request')}</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('full_name')}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={t('enter_full_name')}
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
                                placeholder={t('enter_email')}
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
                          <FormLabel>{t('phone_number')}</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder={t('enter_phone')}
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
                          <FormLabel>{t('subject')}</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                                <SelectValue placeholder={t('select_subject')}/>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product">{t('product_info')}</SelectItem>
                              <SelectItem value="service">{t('consulting_service')}</SelectItem>
                              <SelectItem value="support">{t('technical_support')}</SelectItem>
                              <SelectItem value="other">{t('other')}</SelectItem>
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
                          <FormLabel>{t('content')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5} 
                              placeholder={t('enter_message')}
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
                      {isSubmitting ? t('send_request_small') : t('send_request')}
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
