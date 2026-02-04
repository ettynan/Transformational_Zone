import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function Services() {

  // FIX: handle hash navigation after route change + framer-motion render
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navigation />
      
      {/* Page Header */}
      <div className="bg-stone-100 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-4">
            Our Services
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Holistic treatments designed to restore your natural rhythm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Service 1: Reflexology */}
        <div
          id="reflexology"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 scroll-mt-32"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Restoration
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-stone-800 mb-6">
              Reflexology
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Reflexology is a focused pressure technique based on the premise that there are zones and reflexes on different parts of the feet which correspond to all parts, glands, and organs of the entire body.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              By applying pressure to these specific points, reflexology can reduce tension, improve circulation, and support the body's natural function. It is deeply relaxing and can be an effective way to alleviate stress.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Improves circulation",
                "Reduces stress and anxiety",
                "Stimulates nerve function",
                "Boosts energy levels"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xl font-heading text-stone-800">
              $85{" "}
              <span className="text-sm font-sans text-stone-500 font-normal">
                / 60 minutes
              </span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-stone-200">
              <img 
                src="/images/stone-sand.jpg" 
                alt="Stone resting in sand" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Service 2: Footzoning */}
        <div
          id="footzoning"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 scroll-mt-32"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-stone-200">
              <img 
                src="/images/beach-sunset.jpg" 
                alt="Beach at sunset" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Balance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-stone-800 mb-6">
              Footzoning
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Footzoning is a precise and intricate method of treating the physical, mental, and emotional body through the signal system in the feet.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              A zone balance helps to open the signal pathways in the body, allowing it to return to its natural state of health.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Aligns structural body",
                "Balances hormones",
                "Clears emotional blockages",
                "Detoxifies the system"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xl font-heading text-stone-800">
              $110{" "}
              <span className="text-sm font-sans text-stone-500 font-normal">
                / 75 minutes
              </span>
            </p>
          </motion.div>
        </div>

        {/* Pricing Card */}
        <div
          id="packages"
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 text-center max-w-4xl mx-auto"
        >
          <SectionHeader
            title="Wellness Packages"
            subtitle="Invest in Yourself"
            centered={true}
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-100">
              <h3 className="font-heading text-xl font-bold text-stone-800 mb-2">
                Introductory
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                First time clients
              </p>
              <p className="text-3xl font-heading text-primary mb-6">
                $75
              </p>
              <p className="text-sm text-stone-600 mb-6">
                One 60-min Reflexology session to experience the benefits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-800 text-white shadow-lg transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                POPULAR
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Restoration
              </h3>
              <p className="text-sm text-stone-300 mb-4">
                Package of 3
              </p>
              <p className="text-3xl font-heading text-white mb-6">
                $240
              </p>
              <p className="text-sm text-stone-300 mb-6">
                Three 60-min sessions of your choice. Save $15.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-100">
              <h3 className="font-heading text-xl font-bold text-stone-800 mb-2">
                Transformation
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                Package of 6
              </p>
              <p className="text-3xl font-heading text-primary mb-6">
                $450
              </p>
              <p className="text-sm text-stone-600 mb-6">
                Six 60-min sessions for deep, lasting change. Save $60.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
