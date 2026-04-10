import React, { useState } from "react";
import { IMAGES } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Victorian Interiors", value: "interiors" },
  { label: "Rooms & En-Suites", value: "rooms" },
  { label: "Garden & Outdoors", value: "garden" },
  { label: "Views", value: "views" },
  { label: "Kitchen & Common Areas", value: "common" },
];

const galleryImages = [
  { src: IMAGES.victorianInterior, label: "Victorian Hallway", category: "interiors" },
  { src: IMAGES.deluxeRoom, label: "Deluxe Queen Room", category: "rooms" },
  { src: IMAGES.twinRoom, label: "Standard Twin Room", category: "rooms" },
  { src: IMAGES.cottageRoom, label: "One-Bedroom Cottage", category: "rooms" },
  { src: IMAGES.familyRoom, label: "Family Room", category: "rooms" },
  { src: IMAGES.bathroom, label: "En-Suite Bathroom", category: "rooms" },
  { src: IMAGES.garden, label: "Garden Oasis", category: "garden" },
  { src: IMAGES.heroExterior, label: "Historic Exterior", category: "garden" },
  { src: IMAGES.winelands, label: "Winelands Panorama", category: "views" },
  { src: IMAGES.wineEstate, label: "Nearby Wine Estate", category: "views" },
  { src: IMAGES.languageMonument, label: "Language Monument", category: "views" },
  { src: IMAGES.kitchen, label: "Shared Kitchen", category: "common" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.victorianInterior} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Gallery</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            A Visual Tour
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Explore the historic charm, lush gardens, and comfortable rooms that make House On Plein truly special.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-sm font-medium px-4 py-3">{img.label}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-white text-lg font-heading">{lightbox.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}