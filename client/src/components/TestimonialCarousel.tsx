import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I had a distance Reiki session with Donna on a day I was feeling pretty under the weather with a 24-hour flu. I went in mostly hoping for a little support and was pleasantly surprised by how much lighter and more energized I felt afterward. Even though my body was still processing being sick, my energy and clarity for the rest of the day were noticeably better. The session felt calming and supportive, and it was clear a lot of care and intention went into it. I'm very grateful for the boost and would happily book again.",
    name: "Andrea",
    location: "Salt Lake City, UT",
  },
  {
    quote: "Reiki with Donna - first session ever! My energy after our session was changed. As someone who lives with chronic pain and is in touch with the energy flow within my body. It was so worth it!! We worked on moving stagnant energy and touched on negative problems in life. Afterward, we talked about what messages she received. Can’t recommend working with Donna more. Her space in Kenmore has wonderful healing and relaxing energy. As does Donna. I will absolutely be going back for future sessions.",
    name: "Laura",
    location: "Seattle, WA",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="flex items-start gap-6">
      <div className="flex-1">
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
      </div>

      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-pressed={isPaused}
        className="shrink-0 rounded-full border border-stone-500 bg-white px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800"
      >
        {isPaused ? ">" : "II"}
      </button>
    </div>
  );
}