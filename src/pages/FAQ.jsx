import React from "react";
import { IMAGES, BOOKING_URL } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import CTAButtons from "../components/shared/CTAButtons";

const faqItems = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 14:00 to 20:00. Check-out is until 10:00. Please let us know in advance what time you'll arrive.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free private parking is available on site for all guests.",
  },
  {
    q: "Is WiFi available?",
    a: "Yes, free WiFi is available throughout the property and is rated 8.6 by our guests.",
  },
  {
    q: "Do you serve breakfast?",
    a: "There are various restaurants and cafes within walking distance, including Simply Asia Paarl (50m), Piper's Tavern (50m), and Jackson & Black Beefery (150m). The shared kitchen is also available for self-catering.",
  },
  {
    q: "Are pets allowed?",
    a: "Unfortunately, pets are not allowed at House On Plein.",
  },
  {
    q: "Is there an age restriction for check-in?",
    a: "There is no age restriction for check-in. Children of any age are welcome. Children 11 years and above will be charged as adults.",
  },
  {
    q: "Can I get an extra bed?",
    a: "Extra beds are available upon request for children aged 0–11 years at ZAR 150 per child per night, subject to availability. Please note there are no cots available.",
  },
  {
    q: "What rooms have private bathrooms?",
    a: "The Deluxe Queen Rooms, King Room, One-Bedroom Cottage, and Triple Room with Private Bathroom all have ensuite/private bathrooms. Other rooms have access to shared bathroom facilities.",
  },
  {
    q: "Is smoking allowed?",
    a: "Smoking is not allowed anywhere on the property.",
  },
  {
    q: "Are parties or events allowed?",
    a: "Parties and events are not allowed at House On Plein. Quiet hours are between 22:00 and 08:00.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Visa card payments. Cash is not accepted. Payment before arrival via bank transfer is required — we will contact you after booking with instructions.",
  },
  {
    q: "What cancellation policy applies?",
    a: "Cancellation and prepayment policies vary according to accommodation type. Please check the conditions when making your selection on Booking.com, or contact us directly for direct bookings.",
  },
  {
    q: "How far is House On Plein from Cape Town?",
    a: "Cape Town International Airport is 47 km away, approximately a 45-minute drive. The property is situated 5 minutes from Paarl town centre and 5 minutes from the N1 highway.",
  },
  {
    q: "What activities are available nearby?",
    a: "The area offers mountain biking, hiking, canoeing, bird watching, and golf (Pearl Valley Golf Course is 16 km away). Numerous wine estates are nearby including KWV, Laborie, and Spice Route. Paarl Mountain Nature Reserve is 2.7 km away.",
  },
  {
    q: "Is there a shared kitchen?",
    a: "Yes, a fully equipped shared kitchen with a refrigerator is available for all guests, along with BBQ/braai facilities in the garden.",
  },
  {
    q: "Do I need to show ID at check-in?",
    a: "Yes, guests are required to show a photo identification and credit card upon check-in.",
  },
];

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchen} alt="FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.25em]">Help Centre</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about staying at House On Plein.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">Don't hesitate to get in touch — we're happy to help.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </div>
  );
}