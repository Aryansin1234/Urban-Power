import Link from "next/link";
import Image from "next/image";
import { Sun, Twitter, Facebook, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-secondary/50 border-t border-border/50 overflow-hidden">
      <div className={styles["animated-footer-bg"]} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.png" alt="CleanSpark Future logo" width={128} height={128} className="object-contain" />
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
              <li>
                <a href="mailto:milleniumpowercorporation@gmail.com" className="hover:text-primary transition-colors">
                  milleniumpowercorporation1@gmail.com
                </a>
              </li>
              <li>123-456-7890</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/29%C2%B056'41.9%22N+77%C2%B031'15.1%22E/@29.9450235,77.5203404,205m/data=!3m1!1e3!4m4!3m3!8m2!3d29.944963!4d77.5208696?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Nawada road , fatehpur jatt saharanpur
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground transition-colors">
                <Twitter className={styles["animated-social-icon"] + " h-6 w-6"} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors">
                <Facebook className={styles["animated-social-icon"] + " h-6 w-6"} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors">
                <Linkedin className={styles["animated-social-icon"] + " h-6 w-6"} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Urban Power. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
