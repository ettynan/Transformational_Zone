import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navigation />
      <main id="contact-main">
        <header className="bg-stone-100 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">Contact Us</h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions.
            </p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="Get In Touch" subtitle="Connect" centered={false} />
            <p className="text-stone-600 mb-10 text-lg">
              Ready to book your appointment or have questions about our services?
              Please contact us directly using the information below.
            </p>
            <div className="grid gap-8">
              <Info icon={<MapPin aria-hidden="true" />} title="Location" text="123 Wellness Way, Sedona, AZ 86336" />
              <Info icon={<Phone aria-hidden="true" />} title="Phone" text="555-123-4567" />
              <Info icon={<Mail aria-hidden="true" />} title="Email" text="hello@transformationalzone.com" />
              <Info icon={<Clock aria-hidden="true" />} title="Hours" text="Mon–Fri 9am–6pm" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-xl mb-1">{title}</h3>
        <p className="text-stone-600">{text}</p>
      </div>
    </div>
  );
}
