import Link from "next/link";
import { Sun, Twitter, Facebook, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">CleanSpark Future</span>
            </Link>
            <p className="text-muted-foreground">
              Powering a sustainable tomorrow with innovative energy solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>info@cleanspark.com</li>
              <li>123-456-7890</li>
              <li>123 Energy Lane, Green City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CleanSpark Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
