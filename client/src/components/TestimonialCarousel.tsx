import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I had a distance Reiki session with Donna on a day I was feeling pretty under the weather with a 24-hour flu. I went in mostly hoping for a little support and was pleasantly surprised by how much lighter and more energized I felt afterward. Even though my body was still processing being sick, my energy and clarity for the rest of the day were noticeably better. The session felt calming and supportive, and it was clear a lot of care and intention went into it. I'm very grateful for the boost and would happily book again.",
    name: "Andrea Lain",
    location: "West Jordan, UT",
  },
  {
    quote: "This is a placeholder review. More testimonials coming soon.",
    name: "Jane Doe",
    location: "Anytown, USA",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-stone-600 text-lg leading-relaxed italic mb-4">
          "{testimonials[index].quote}"
        </p>
        <p className="text-stone-500 text-sm tracking-wide">
          — {testimonials[index].name}, {testimonials[index].location}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}