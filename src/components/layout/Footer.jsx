import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-background mb-4">
              House On Plein
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              A historic Victorian guest house dating back to 1833, nestled in the heart of Paarl's Winelands. Your perfect base for wine country adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Rooms & Accommodation", path: "/rooms" },
                { label: "Gallery", path: "/gallery" },
                { label: "About Us", path: "/about" },
                { label: "Location & Attractions", path: "/location" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60">Zeederbergplein, 7646 Paarl, South Africa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/60">+27 (0) 21 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/60">info@houseonplein.co.za</span>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Book Your Stay</h4>
            <p className="text-sm text-background/60 mb-4">
              Reserve directly with us for personalised service, or book instantly through Booking.com.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
              >
                Reserve Directly
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-background/30 text-background/80 hover:text-background hover:border-background/50 text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
              >
                Booking.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} House On Plein. All rights reserved. Historic accommodation in Paarl Winelands since 1833. Designed by Austin from IgnisIntellect.com
          </p>
        </div>
      </div>
    </footer>
  );
}