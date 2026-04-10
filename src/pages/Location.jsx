import React from "react";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { MapPin, Mountain, Wine, Bike, TreePine, Camera, Car, Plane } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import CTAButtons from "../components/shared/CTAButtons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const attractions = [
  { icon: Mountain, title: "Paarl Mountain Nature Reserve", distance: "2.7 km", desc: "Dramatic granite outcrops, hiking trails, and panoramic views over the Winelands." },
  { icon: Wine, title: "KWV Wine Estate", distance: "3 km", desc: "One of South Africa's most iconic wine estates with world-class tastings." },
  { icon: Wine, title: "Laborie Wine Estate", distance: "4 km", desc: "Beautiful Cape Dutch estate offering premium wines and fine dining." },
  { icon: Wine, title: "Spice Route", distance: "8 km", desc: "Award-winning wine, craft beer, artisan chocolate, and local cuisine." },
  { icon: Camera, title: "Afrikaans Language Monument", distance: "5 km", desc: "Iconic monument celebrating the Afrikaans language with spectacular views." },
  { icon: Bike, title: "Mountain Biking & Hiking", distance: "Various", desc: "World-class trails through fynbos, vineyards, and mountain landscapes." },
  { icon: TreePine, title: "Bird Watching & Canoeing", distance: "Various", desc: "Explore the Berg River and local nature reserves for incredible biodiversity." },
  { icon: Car, title: "Cape Town", distance: "45 min drive", desc: "Easy access to Table Mountain, V&A Waterfront, and Cape Town's attractions." },
];

export default function Location() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.winelands} alt="Location" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Explore</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Location & Attractions
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Discover the best of Paarl and the Cape Winelands from our central location in the heart of town.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="In the Heart of Paarl"
            subtitle="Zeederbergplein, 7646 Paarl, South Africa — centrally located with easy access to everything."
          />
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px] border border-border">
            <MapContainer
              center={[-33.7278, 18.9706]}
              zoom={14}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-33.7278, 18.9706]}>
                <Popup>
                  <strong>House On Plein</strong><br />
                  Zeederbergplein, 7646 Paarl
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nearby"
            title="Things to See & Do"
            subtitle="From world-class wine estates to mountain adventures — there's something for everyone."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {attractions.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-4 bg-background rounded-xl p-5 border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground">{a.title}</h3>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">{a.distance}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Getting Here"
            title="Easy to Reach"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Plane, title: "Cape Town Airport", detail: "47 km / ~45 min drive", desc: "Cape Town International Airport is the nearest major airport." },
              { icon: Car, title: "From Cape Town", detail: "~45 min via N1", desc: "Easy highway drive from Cape Town via the N1." },
              { icon: MapPin, title: "Local Access", detail: "5 min from N1", desc: "Just off the main road, walking distance to shops and restaurants." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold">{item.title}</h3>
                <p className="text-primary text-sm font-medium mt-1">{item.detail}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-8">Book your stay and use House On Plein as your base for Winelands adventures.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </div>
  );
}