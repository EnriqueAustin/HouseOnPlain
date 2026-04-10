import React, { useState } from "react";
import { IMAGES, BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.garden} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Get in Touch</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions about your stay.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Zeederbergplein, 7646 Paarl, South Africa" },
                  { icon: Phone, label: "Phone", value: "+27 (0) 21 000 0000" },
                  { icon: Mail, label: "Email", value: "info@houseonplein.co.za" },
                  { icon: Clock, label: "Check-in", value: "14:00 – 20:00" },
                  { icon: Clock, label: "Check-out", value: "Before 10:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Link to="/booking">
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body">
                    Reserve Your Stay
                  </Button>
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body mt-2">
                    Book on Booking.com <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-body">Full Name</Label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="mt-1.5 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-body">Email</Label>
                        <Input
                          id="email"
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
                      <Label htmlFor="phone" className="text-sm font-body">Phone</Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+27..."
                        className="mt-1.5 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-body">Message</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="mt-1.5 rounded-xl"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body">
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}