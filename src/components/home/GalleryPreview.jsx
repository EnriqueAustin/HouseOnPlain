import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const previewImages = [
  { src: IMAGES.victorianInterior, label: "Victorian Interior" },
  { src: IMAGES.garden, label: "Garden Oasis" },
  { src: IMAGES.deluxeRoom, label: "Deluxe Room" },
  { src: IMAGES.bathroom, label: "En-Suite Bathroom" },
  { src: IMAGES.kitchen, label: "Shared Kitchen" },
  { src: IMAGES.winelands, label: "Winelands Views" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse of House On Plein"
          subtitle="Step inside our historic Victorian guest house and explore the charm that awaits you."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <span className="text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="rounded-full font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}