import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    // PENDING TO-DO
    // YOU WILL NEED TO PUT THE FORMSPREE IS HERE WHEN YOU GET ONE
    const response = await fetch(
      "https://formspree.io/f/YOUR_FORM_ID_HERE",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navigation />

      <div className="bg-stone-100 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <SectionHeader title="Get In Touch" subtitle="Connect" centered={false} />
            <p className="text-stone-600 mb-10 text-lg">
              Ready to book your appointment or have questions about our services?
              Fill out the form or contact us directly.
            </p>

            <div className="grid gap-8">
              <Info icon={<MapPin />} title="Location" text="123 Wellness Way, Sedona, AZ 86336" />
              <Info icon={<Phone />} title="Phone" text="555-123-4567" />
              <Info icon={<Mail />} title="Email" text="hello@transformationalzone.com" />
              <Info icon={<Clock />} title="Hours" text="Mon–Fri 9am–6pm" />
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="font-heading text-2xl mb-6">Send a Message</h3>

            {submitted ? (
              <p className="text-green-700 text-lg">
                Thank you — your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <Input name="name" required />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <Input type="email" name="email" required />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <Textarea name="message" className="min-h-[150px]" required />
                </div>

                <Button type="submit" className="w-full h-12 rounded-xl">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Info({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border">
        {icon}
      </div>
      <div>
        <h4 className="font-heading text-xl mb-1">{title}</h4>
        <p className="text-stone-600">{text}</p>
      </div>
    </div>
  );
}
