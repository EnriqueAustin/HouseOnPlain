import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroExterior}
          alt="House On Plein - Historic Victorian Guest House in Paarl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-[0.25em] mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            Est. 1833 · Paarl, South Africa
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
            Historic Victorian Charm in the Heart of Paarl
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            1833 guesthouse · Garden oasis · Steps from wine estates & amenities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-body px-8 w-full sm:w-auto text-base"
              >
                Check Availability <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body rounded-full px-8 w-full sm:w-auto text-base"
              >
                Reserve Your Stay
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}