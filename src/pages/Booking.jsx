import React, { useState } from "react";
import { IMAGES, ROOMS, BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, CheckCircle, Shield, MessageSquare, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkin: "", checkout: "",
    guests: "", roomType: "", requests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.heroExterior} alt="Booking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Reservations</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Reserve Your Stay
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Book directly with us for personalised service and flexible requests.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="font-heading text-3xl font-semibold mb-3">Reservation Request Sent!</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                    Your reservation request has been sent. We will contact you shortly to confirm your booking.
                  </p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body px-6">
                      Or Book Instantly on Booking.com <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </motion.div>
              ) : (
                <div className="bg-card rounded-2xl p-6 md:p-10 border border-border/50 shadow-sm">
                  <h2 className="font-heading text-2xl font-semibold mb-2">Reservation Form</h2>
                  <p className="text-muted-foreground text-sm mb-8">Fill in your details and we'll confirm your booking personally.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-sm font-body">Full Name *</Label>
                        <Input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="mt-1.5 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-body">Email Address *</Label>
                        <Input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="mt-1.5 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-body">Phone Number</Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+27..."
                        className="mt-1.5 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-sm font-body">Check-in Date *</Label>
                        <Input
                          type="date"
                          required
                          value={form.checkin}
                          onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                          className="mt-1.5 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-body">Check-out Date *</Label>
                        <Input
                          type="date"
                          required
                          value={form.checkout}
                          onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                          className="mt-1.5 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-sm font-body">Number of Guests *</Label>
                        <Select onValueChange={(v) => setForm({ ...form, guests: v })}>
                          <SelectTrigger className="mt-1.5 rounded-xl">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-body">Room Type</Label>
                        <Select onValueChange={(v) => setForm({ ...form, roomType: v })}>
                          <SelectTrigger className="mt-1.5 rounded-xl">
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            {ROOMS.map((r) => (
                              <SelectItem key={r.id} value={r.id}>
                                {r.name} {r.subtitle ? `(${r.subtitle})` : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-body">Special Requests</Label>
                      <Textarea
                        rows={4}
                        value={form.requests}
                        onChange={(e) => setForm({ ...form, requests: e.target.value })}
                        placeholder="Any special requirements or requests..."
                        className="mt-1.5 rounded-xl"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-base">
                      Submit Reservation Request
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instant Booking */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-heading text-lg font-semibold mb-2">Prefer Instant Booking?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book instantly and securely through Booking.com with immediate confirmation.
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body">
                    Book on Booking.com <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-heading text-lg font-semibold mb-4">Why Book Direct?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Heart, title: "Personalised Service", desc: "Tailored attention to make your stay special." },
                    { icon: MessageSquare, title: "Direct Communication", desc: "Chat with us directly for any queries." },
                    { icon: Shield, title: "Flexible Requests", desc: "Special arrangements made easier." },
                  ].map((b, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{b.title}</p>
                        <p className="text-xs text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-in Info */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <h4 className="font-heading text-sm font-semibold mb-2">Good to Know</h4>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li>• Check-in: 14:00 – 20:00</li>
                  <li>• Check-out: Before 10:00</li>
                  <li>• Free private parking on site</li>
                  <li>• Payment via bank transfer</li>
                  <li>• Photo ID required at check-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}