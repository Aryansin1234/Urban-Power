"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BatteryCharging, LayoutGrid, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const targetRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const filter = useTransform(scrollYProgress, [0, 0.2], ["blur(0px)", "blur(10px)"]);
  
  // Handle video loading and optimization
  useEffect(() => {
    // Don't load video on initial render for mobile devices
    if (!videoRef.current) return;
    
    const loadVideo = () => {
      if (isMobile === undefined) return; // Wait until we know device type
      
      const videoElement = videoRef.current;
      if (!videoElement) return;
      
      if (isMobile) {
        // For mobile, use a smaller, more compressed version or static image
        videoElement.setAttribute('poster', '/assets/background-poster.jpg');
        videoElement.src = '/assets/background-mobile.mp4';
      } else {
        // For desktop, load the regular video with delay
        videoElement.src = '/assets/background.mp4';
      }
      
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    };
    
    // Delay video loading slightly to prioritize other content
    const timer = setTimeout(loadVideo, 500);
    
    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, [isMobile]);


  return (
    <section ref={targetRef} className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background with gradient placeholder that shows until video loads */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 to-primary/30 -z-20"
        style={{
          opacity: isVideoLoaded && !isMobile ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* Video background - optimized loading */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none" // Don't preload the video
        poster="/assets/background-poster.jpg" // Static image shown until video loads
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ 
          opacity: isVideoLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      />
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center p-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, type: 'spring', bounce: 0.5 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight max-w-6xl font-headline mb-6"
        >
          <span
            className="inline-block bg-gradient-to-r from-[#c1f7ff] via-[#ffe7c1] to-[#d1ffd6] bg-clip-text text-transparent animate-gradient-x drop-shadow-lg"
            style={{
              animation: 'gradient-x 3s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Urban Power
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, type: 'spring', bounce: 0.3, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white/80 drop-shadow max-w-4xl font-headline"
        >
          The Future of Energy is Here
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-white/80 max-w-2xl drop-shadow"
        >
          Harness the sun, store the power, and control your energy with our integrated solar solutions.
        </motion.p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/80">
          <div className="flex items-center gap-2 bg-white/10 border border-white/30 rounded-lg px-2 py-1 shadow-md backdrop-blur-sm" style={{ minWidth: 90 }}>
            <LayoutGrid className="w-5 h-5 text-primary" />
            <span className="text-md md:text-lg font-semibold text-white drop-shadow">Solar Panels</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/30 rounded-lg px-2 py-1 shadow-md backdrop-blur-sm" style={{ minWidth: 90 }}>
            <BatteryCharging className="w-5 h-5 text-primary" />
            <span className="text-md md:text-lg font-semibold text-white drop-shadow">Home Batteries</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/30 rounded-lg px-2 py-1 shadow-md backdrop-blur-sm" style={{ minWidth: 90 }}>
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-md md:text-lg font-semibold text-white drop-shadow">Lithium Battery</span>
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
