import { Link } from "wouter";
import { ArrowRight, Sparkles, Footprints } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/zen-sand-and-water.jpg" 
            alt="Sand and water" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50/90" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm font-medium tracking-widest mb-6">
              HOLISTIC WELLNESS
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-6 leading-tight">
              Restore Balance <br /> & Find Inner Peace
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the healing power of Reflexology and Footzoning in a sanctuary designed for your relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="px-8 py-3.5 rounded-full bg-white text-stone-900 font-medium hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Explore Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full bg-primary/90 text-white backdrop-blur-sm border border-transparent font-medium hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Book Appointment
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionHeader title="A Sanctuary for Healing" subtitle="Welcome" centered={false} />
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                In our fast-paced world, finding moments of stillness is essential for our well-being.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Through the specialized techniques of Reflexology and Footzoning, we help stimulate your body's natural healing abilities.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer group">
                  Learn about our philosophy <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/zen-sand-replacement.jpg" 
                  alt="Smooth zen stones in sand" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Our Therapies" subtitle="Services" centered />

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reflexology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-stone-100"
              >
                <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Footprints className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-medium mb-3">Reflexology</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Application of pressure to specific points on the feet that correspond to organs and systems of the body.
                </p>
                <Link href="/services#reflexology">
                  <span className="text-sm font-semibold border-b hover:border-primary cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </motion.div>

              {/* Footzoning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-stone-100"
              >
                <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-medium mb-3">Footzoning</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  A holistic method that maps the entire body onto the feet, treating the physical, mental, and emotional body.
                </p>
                <Link href="/services#footzoning">
                  <span className="text-sm font-semibold border-b hover:border-primary cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
