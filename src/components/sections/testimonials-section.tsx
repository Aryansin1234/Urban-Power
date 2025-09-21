"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials as allTestimonials, type Testimonial } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-20 sm:py-28 bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied clients who chose a cleaner future.
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[Autoplay({delay: 5000, stopOnInteraction: true})]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {allTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="pt-6 flex-grow">
        <Quote className="w-8 h-8 text-primary/50 mb-4" />
        <p className="text-muted-foreground italic">"{testimonial.review}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        {image && (
          <Image
            src={image.imageUrl}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full"
            data-ai-hint={image.imageHint}
          />
        )}
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
