import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Wine, Bike } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function LocationTeaser() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Explore Paarl
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
              Your Gateway to the Winelands
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nestled in the heart of Paarl, House On Plein places you at the centre of South Africa's most celebrated wine country. With world-class estates, dramatic mountain trails, and charming town life all within easy reach, every day brings a new adventure.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Wine, text: "KWV, Laborie & Spice Route wine estates nearby" },
                { icon: Mountain, text: "Paarl Mountain Nature Reserve & hiking trails" },
                { icon: Bike, text: "Mountain biking, canoeing & bird watching" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>

            <Link to="/location">
              <Button variant="outline" className="rounded-full font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                Discover the Area <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.winelands}
                alt="Paarl Winelands panoramic view"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 border border-border/50 hidden md:block">
              <p className="font-heading text-2xl font-bold text-primary">45 min</p>
              <p className="text-xs text-muted-foreground">from Cape Town</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}