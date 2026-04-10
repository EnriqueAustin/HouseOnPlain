import React from "react";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Landmark, Heart, TreePine, Wine } from "lucide-react";
import CTAButtons from "../components/shared/CTAButtons";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.heroExterior} alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Our Story</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            About House On Plein
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            A beautifully preserved 1833 Victorian home in the heart of Paarl, blending historic charm with modern comforts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.victorianInterior} alt="Victorian interior" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Since 1833</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                A Legacy of Hospitality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  House On Plein is a historical building dating back to 1833, ideally situated centrally in the heart of Paarl — just 45 minutes from Cape Town — offering the perfect comfortable stay amidst the beauty of the Winelands.
                </p>
                <p>
                  Our Victorian home offers a rustic old-world country feeling while providing all the modern comforts you need. Situated just 5 minutes from town and 5 minutes from the N1, we're just off the main road but separated by a park that cushions all the noise, creating a peaceful retreat.
                </p>
                <p>
                  There is a chemist, laundry, Spar convenient store, and various restaurants literally around the corner. Eateries range from Asian cuisine to vineyard-feeling restaurants and steak houses. Paarl is blessed with a low crime rate, and one can sense it on arrival.
                </p>
                <p>
                  At the back of the house is a big garden where guests can enjoy the open air, braai facilities, and stunning mountain views. Visit one of the many surrounding wine farms or vineyards — KWV, Spice Route, and Laborie are all close by, to name just a few.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Landmark, title: "Historic Heritage", desc: "Nearly 200 years of history preserved in every detail of our Victorian home." },
              { icon: Heart, title: "Warm Hospitality", desc: "Personal service and genuine warmth that makes you feel right at home." },
              { icon: TreePine, title: "Garden Sanctuary", desc: "A peaceful garden oasis with braai facilities and mountain views." },
              { icon: Wine, title: "Wine Country Base", desc: "The perfect starting point for exploring Paarl's world-class wine estates." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Experience the Charm
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Come discover what makes House On Plein a beloved destination for travellers from around the world.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </div>
  );
}