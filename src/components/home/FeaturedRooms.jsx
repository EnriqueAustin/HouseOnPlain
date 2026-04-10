import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import RoomCard from "../shared/RoomCard";
import { ROOMS } from "@/lib/constants";

export default function FeaturedRooms() {
  const featured = [ROOMS[2], ROOMS[7], ROOMS[5]]; // Deluxe Queen, Cottage, King

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Accommodation"
          title="Our Rooms & Suites"
          subtitle="From cozy twin rooms to private garden cottages — find your perfect retreat in our historic Victorian home."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} compact />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/rooms">
            <Button variant="outline" size="lg" className="rounded-full font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              View All Rooms <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}