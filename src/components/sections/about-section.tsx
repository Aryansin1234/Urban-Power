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
      value: 5,
      postfix: "+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: 20000,
      postfix: "+",
      label: "Happy Customers",
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
              About Urban Power
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
            <img
              src="/assets/about.png"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-md" /* Ensure image fully fits */
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>
        </div>
        
        <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" variants={sectionVariants}>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="relative p-8 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer backdrop-blur-lg bg-white/20 border border-transparent"
              style={{
                borderImage: 'linear-gradient(90deg, #c1f7ff, #ffe7c1, #d1ffd6, #f5e8ff) 1',
                borderWidth: '2px',
                borderStyle: 'solid',
              }}
              variants={itemVariants}
            >
              <motion.div
                className="w-12 h-12 text-primary mx-auto mb-4"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-12 h-12" />
              </motion.div>
              <div className="text-4xl font-bold">
                <AnimatedCounter value={stat.value} postfix={stat.postfix} />
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-background/80 text-xs text-primary px-3 py-1 rounded shadow transition-opacity duration-300 pointer-events-none z-20 flex flex-col items-center">
                <span className="w-2 h-2 bg-background/80 rotate-45 -mb-1"></span>
                {stat.label === "Years of Experience" && "Trusted expertise since our founding."}
                {stat.label === "Happy Customers" && "Thousands of satisfied clients!"}
                {stat.label === "Customer Satisfaction" && "We strive for 100% happiness."}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
