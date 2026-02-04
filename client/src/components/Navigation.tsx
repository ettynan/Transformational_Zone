import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-stone-100",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group cursor-pointer">
            <span className={cn(
              "font-heading text-2xl font-bold tracking-wider transition-colors",
              scrolled ? "text-stone-800" : "text-stone-800 md:text-stone-900" 
            )}>
              Transformational<span className="text-primary font-normal">Zone</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={cn(
                  "text-sm font-medium tracking-wide transition-all cursor-pointer hover:text-primary",
                  location === link.href ? "text-primary border-b border-primary" : "text-stone-600"
                )}>
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                Book Session
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg animate-fade-in">
          <div className="flex flex-col py-6 px-4 space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={cn(
                    "block text-lg font-medium py-2 px-4 rounded-lg cursor-pointer",
                    location === link.href ? "bg-stone-50 text-primary" : "text-stone-600 hover:bg-stone-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href="/contact">
                 <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-base font-medium hover:bg-primary/90 transition-all">
                  Book Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
