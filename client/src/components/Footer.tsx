import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="cursor-pointer">
              <span className="font-heading text-2xl font-bold text-stone-800">
                Transformational<span className="text-primary font-normal">Zone</span>
              </span>
            </Link>
            <p className="mt-4 text-stone-600 leading-relaxed text-sm">
              Restoring balance and harmony through the ancient art of reflexology and footzoning. Find your path to wellness.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">Services</h4>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><a href="/services#reflexology" className="hover:text-primary transition-colors cursor-pointer">Reflexology</a></li>
              <li><a href="/services#footzoning" className="hover:text-primary transition-colors cursor-pointer">Footzoning</a></li>
              <li><a href="/services#packages" className="hover:text-primary transition-colors cursor-pointer">Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">Company</h4>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Location</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">Contact</h4>
            <address className="not-italic text-stone-600 text-sm space-y-3">
              <p>123 Wellness Way</p>
              <p>Sedona, AZ 86336</p>
              <p className="pt-2"><a href="tel:+15551234567" className="hover:text-primary transition-colors">555-123-4567</a></p>
              <p><a href="mailto:hello@transformationalzone.com" className="hover:text-primary transition-colors">hello@transformationalzone.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Transformational Zone. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}
