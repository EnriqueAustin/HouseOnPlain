import React from "react";
import { motion } from "framer-motion";
import CTAButtons from "../shared/CTAButtons";
import { IMAGES } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={IMAGES.garden}
          alt="House On Plein garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">
            Start Your Journey
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mt-3 mb-5">
            Your Winelands Escape Awaits
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Book your stay at House On Plein and discover the perfect blend of historic charm, garden tranquility, and wine country adventure.
          </p>
          <CTAButtons className="justify-center" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}