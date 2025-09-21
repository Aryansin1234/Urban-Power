"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Award, Users, ThumbsUp } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function AboutSection() {
  const image = PlaceHolderImages.find((img) => img.id === "about-us");

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const stats = [
    {
      icon: Award,
      value: 10,
      postfix: "+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: 1500,
      postfix: "+",
      label: "Projects Completed",
    },
    {
      icon: ThumbsUp,
      value: 99,
      postfix: "%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 sm:py-28 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={sectionVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">
              About CleanSpark Future
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are dedicated to accelerating the transition to a sustainable energy future. Our mission is to empower homeowners and businesses with reliable, affordable, and clean energy solutions.
            </p>
            <ul className="mt-6 space-y-4">
              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Expertise You Can Trust</h3>
                  <p className="text-muted-foreground text-sm">Our team consists of certified professionals with years of experience in the solar industry.</p>
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Quality and Performance</h3>
                  <p className="text-muted-foreground text-sm">We only use top-tier, certified products to ensure long-term performance and reliability.</p>
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={itemVariants}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Customer-Centric Approach</h3>
                   <p className="text-muted-foreground text-sm">From initial consultation to post-installation support, your satisfaction is our priority.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
            variants={itemVariants}
          >
            {image && (
              <Image
                src={image.imageUrl}
                alt="CleanSpark Future team"
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>
        </div>
        
        <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" variants={sectionVariants}>
          {stats.map((stat) => (
            <motion.div key={stat.label} className="bg-secondary/30 p-8 rounded-lg" variants={itemVariants}>
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold">
                <AnimatedCounter value={stat.value} postfix={stat.postfix} />
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
