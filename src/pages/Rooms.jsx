import React from "react";
import { ROOMS, IMAGES } from "@/lib/constants";
import SectionHeading from "../components/shared/SectionHeading";
import RoomCard from "../components/shared/RoomCard";
import FinalCTA from "../components/home/FinalCTA";

export default function Rooms() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.deluxeRoom} alt="Rooms" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Accommodation</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Our Rooms & Suites
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            From cozy twin rooms to private garden cottages — each space in our 1833 Victorian home offers character, comfort, and charm.
          </p>
        </div>
      </section>

      {/* All Rooms */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ROOMS.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Shared Facilities */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shared Facilities"
            title="Everything You Need"
            subtitle="All guests enjoy access to our shared facilities including a fully-equipped kitchen, BBQ area, garden, and free private parking."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: IMAGES.kitchen, title: "Shared Kitchen", desc: "Fully equipped with refrigerator, kettle, microwave, and dining area." },
              { img: IMAGES.garden, title: "Garden & BBQ", desc: "Spacious garden with braai facilities, outdoor seating, and mountain views." },
              { img: IMAGES.victorianInterior, title: "Common Areas", desc: "Charming Victorian lounges and hallways with original period features." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-background shadow-sm border border-border/50">
                <img src={f.img} alt={f.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}