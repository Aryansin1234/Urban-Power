"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={180}
                height={180}
                className="object-contain rounded-2xl border-4 border-secondary shadow-lg bg-secondary transition-all duration-300 hover:shadow-2xl hover:bg-secondary/40 hover:border-secondary/40"
              />
            </Link>
          </div>
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 32px 0 rgba(80,180,120,0.12)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </motion.nav>
          <div className="hidden md:flex items-center">
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            {!mobileMenuOpen && (
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            )}
            {mobileMenuOpen && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <span className="sr-only">Mobile Navigation</span>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-8">
                      <Link href="/" className="flex items-center">
                        <Image src="/assets/logo.png" alt="Logo" width={180} height={180} className="object-contain" />
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                    <Button asChild className="w-full mt-8">
                      <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
