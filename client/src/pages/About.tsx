import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navigation />
      <main id="about-main">
        <header className="bg-stone-100 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-4">About Us</h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">Our philosophy and approach to natural healing.</p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="font-heading text-3xl text-stone-800 mb-6">Our Philosophy</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                At Transformational Zone, we believe that the body has an innate intelligence and capability to heal itself when given the right support. In our modern lives, we often become disconnected from this natural rhythm due to stress, toxins, and emotional burdens.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Our mission is to help you reconnect with your body's wisdom. We don't just treat symptoms; we look at the whole person. By working with the feet, which are the foundation of our physical movement and a map of our entire being, we can effect profound changes in your overall wellness.
              </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-stone-200">
                <img src="/images/blue-butterfly.jpg" alt="Blue butterfly resting with wings open, symbolizing transformation and renewal" className="w-full h-full object-cover" />
              </div>
              <div>
                <SectionHeader title="Your Practitioner" subtitle="Experience" centered={false} className="mb-6" />
                <p className="text-stone-600 leading-relaxed mb-6">
                  With over 10 years of experience in holistic foot therapies, I have witnessed the transformative power of touch. My journey began when I sought natural solutions for my own health challenges and discovered the profound relief that reflexology provided.
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  I am a certified Reflexologist and Foot Zone Practitioner, dedicated to continuous learning in the field of natural health. My approach is gentle, intuitive, and deeply respectful of each client's unique journey.
                </p>
                <div className="p-6 bg-white border border-stone-100 rounded-xl shadow-sm">
                  <h3 className="font-heading text-xl mb-2 text-primary">Certifications</h3>
                  <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
                    <li>Certified Foot Zone Practitioner (CFZP)</li>
                    <li>Licensed Reflexologist</li>
                    <li>Holistic Health Coach</li>
                  </ul>
                </div>
              </div>
            </section>
            <section aria-labelledby="healing-quote" className="text-center bg-stone-300 text-white p-12 rounded-3xl shadow-lg">
              <h2 id="healing-quote" className="font-heading text-3xl mb-4 leading-relaxed">“The natural healing force within each of us is the greatest force in getting well.”</h2>
              <p className="text-stone-100 text-lg tracking-wide">— Hippocrates</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
