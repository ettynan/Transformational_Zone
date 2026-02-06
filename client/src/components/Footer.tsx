import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        <nav aria-label="Footer navigation" className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/">
              <span className="font-heading text-2xl font-bold text-stone-800">
                Transformational<span className="text-primary font-normal">Zone</span>
              </span>
            </Link>
            <p className="mt-4 text-stone-600 leading-relaxed text-sm">
              Restoring balance and harmony through the ancient art of reflexology and footzoning. Find your path to wellness.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">
              Services
            </h4>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><a href="/services#reflexology">Reflexology</a></li>
              <li><a href="/services#footzoning">Footzoning</a></li>
              <li><a href="/services#packages">Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">
              Company
            </h4>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-stone-800">
              Contact
            </h4>
            <address className="not-italic text-stone-600 text-sm space-y-3">
              <p>123 Wellness Way</p>
              <p>Sedona, AZ 86336</p>
              <p>
                <a href="tel:+15551234567">555-123-4567</a>
              </p>
              <p>
                <a href="mailto:hello@transformationalzone.com">
                  hello@transformationalzone.com
                </a>
              </p>
            </address>
          </div>
        </nav>

        <div className="border-t border-stone-200 pt-8 text-xs text-stone-500 text-center">
          <p>&copy; {new Date().getFullYear()} Transformational Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
