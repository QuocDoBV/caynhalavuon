import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const { t} = useTranslation('testimonnialsSection');
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials/xxx'],
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">{t('testimonial_title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))
          ) : (
            // Fallback testimonials if API doesn't return data
            <>
              <TestimonialCard 
                name={t('users.name.1')}
                position={t('users.pos.1')}
                content={t('users.comment.1')}
                rating={5}
              />
              <TestimonialCard 
                name={t('users.name.2')}
                position={t('users.pos.2')}
                content={t('users.comment.2')}
                rating={5}
              />
              <TestimonialCard 
                name={t('users.name.3')}
                position={t('users.pos.3')}
                content={t('users.comment.3')}
                rating={4.5}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  rating: number;
}

function TestimonialCard({ name, position, content, rating }: TestimonialCardProps) {
  // Create star rating based on rating value
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="text-accent">
            {renderStars()}
          </div>
        </div>
        <p className="text-gray-600 mb-6 italic">
          "{content}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <i className="fas fa-user text-gray-500"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
