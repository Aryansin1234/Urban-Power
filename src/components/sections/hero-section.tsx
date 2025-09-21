"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BatteryCharging, LayoutGrid, Zap } from "lucide-react";

export default function HeroSection() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const filter = useTransform(scrollYProgress, [0, 0.2], ["blur(0px)", "blur(10px)"]);


  return (
    <section ref={targetRef} className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <motion.div
        style={{ y, scale, filter }}
        className="absolute inset-0 -z-10 w-full h-full animated-gradient"
      />
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center p-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground/90 max-w-4xl font-headline">
          The Future of Energy is Here
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Harness the sun, store the power, and control your energy with our integrated solar solutions. 
        </p>
         <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-primary" />
            <span>Solar Panels</span>
          </div>
           <div className="flex items-center gap-2">
            <BatteryCharging className="w-5 h-5 text-primary" />
            <span>Home Batteries</span>
          </div>
           <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span>Smart Inverters</span>
          </div>
        </div>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#products">Explore Products</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
