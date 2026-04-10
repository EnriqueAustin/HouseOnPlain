import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export default function CTAButtons({ size = "default", className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        <Button
          size={size}
          variant="outline"
          className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body px-6 w-full sm:w-auto"
        >
          Check Availability <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </a>
      <Link to="/booking">
        <Button
          size={size}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-body rounded-full px-6 w-full sm:w-auto"
        >
          Reserve Your Stay
        </Button>
      </Link>
    </div>
  );
}