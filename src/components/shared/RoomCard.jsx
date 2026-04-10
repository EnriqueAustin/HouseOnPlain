import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Maximize2, Eye, ExternalLink } from "lucide-react";
import { BOOKING_URL, IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function RoomCard({ room, index = 0, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={IMAGES[room.image]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {room.bathroom === "Ensuite" || room.bathroom === "Private" ? (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-body text-xs rounded-full">
            {room.bathroom} Bathroom
          </Badge>
        ) : null}
        <div className="absolute bottom-4 right-4">
          <span className="bg-foreground/80 text-background text-sm font-semibold px-3 py-1.5 rounded-full">
            From {room.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {room.name}
        </h3>
        {room.subtitle && (
          <p className="text-sm text-primary font-medium mt-0.5">{room.subtitle}</p>
        )}

        <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" /> {room.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4" /> {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Up to {room.maxGuests}
          </span>
        </div>

        {!compact && room.views.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {room.views.map((v) => (
              <Badge key={v} variant="secondary" className="text-xs font-body rounded-full flex items-center gap-1">
                <Eye className="w-3 h-3" /> {v}
              </Badge>
            ))}
          </div>
        )}

        {!compact && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
            {room.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" className="w-full rounded-full font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs">
              Book on Booking.com <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </a>
          <Link to="/booking" className="flex-1">
            <Button size="sm" className="w-full rounded-full font-body bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
              Reserve Directly
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}