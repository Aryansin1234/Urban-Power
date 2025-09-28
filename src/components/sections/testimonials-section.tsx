"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials as allTestimonials, type Testimonial } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TestimonialsSection() {
  const isMobile = useIsMobile();
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-16 sm:py-20 md:py-28 bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight font-headline">What Our Customers Say</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied clients who chose a cleaner future.
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: isMobile ? 3000 : 5000,
              stopOnInteraction: false
            })
          ]}
          opts={{ 
            loop: true, 
            dragFree: true,
            align: isMobile ? "start" : "center"
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {allTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Arrows removed to keep testimonials auto-flowing */}
        </Carousel>
      </div>
    </motion.section>
  );
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:shadow-lg">
      <CardContent className="pt-4 sm:pt-6 flex-grow">
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50 mb-2 sm:mb-4" />
        <p className="text-sm sm:text-base text-muted-foreground italic">"{testimonial.review}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 sm:gap-4">
        {image && (
          <Image
            src={image.imageUrl}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            data-ai-hint={image.imageHint}
          />
        )}
        <div>
          <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
