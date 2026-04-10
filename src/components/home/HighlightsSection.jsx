import React from "react";
import { motion } from "framer-motion";
import { Landmark, TreePine, MapPin, UtensilsCrossed } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const highlights = [
  {
    icon: Landmark,
    title: "Historic 1833 Victorian Home",
    description: "Step into a beautifully preserved piece of history, where Victorian elegance meets warm Cape hospitality.",
  },
  {
    icon: TreePine,
    title: "Peaceful Garden & BBQ Area",
    description: "Unwind in our lush garden oasis with outdoor seating, braai facilities, and mountain views.",
  },
  {
    icon: MapPin,
    title: "Central Winelands Location",
    description: "Walking distance to restaurants, shops, and minutes from renowned Paarl wine estates.",
  },
  {
    icon: UtensilsCrossed,
    title: "Shared Kitchen & Free Parking",
    description: "Fully equipped shared kitchen and complimentary private on-site parking for all guests.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Stay With Us"
          title="A Place Like No Other"
          subtitle="Experience the perfect blend of heritage charm and modern comfort in the heart of Paarl's wine country."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}