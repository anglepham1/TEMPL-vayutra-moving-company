import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";

export function FaqPage() {
  const { t } = useLanguage();

  // FAQ items - 8 questions and answers
  const faqItems = [
    {
      q: t("faq.items.0.q"),
      a: t("faq.items.0.a"),
    },
    {
      q: t("faq.items.1.q"),
      a: t("faq.items.1.a"),
    },
    {
      q: t("faq.items.2.q"),
      a: t("faq.items.2.a"),
    },
    {
      q: t("faq.items.3.q"),
      a: t("faq.items.3.a"),
    },
    {
      q: t("faq.items.4.q"),
      a: t("faq.items.4.a"),
    },
    {
      q: t("faq.items.5.q"),
      a: t("faq.items.5.a"),
    },
    {
      q: t("faq.items.6.q"),
      a: t("faq.items.6.a"),
    },
    {
      q: t("faq.items.7.q"),
      a: t("faq.items.7.a"),
    },
  ];

  const handleWhatsAppContact = () => {
    const message =
      "Hi! I have a question about Vayutra Logistics services. Can you help me?";
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1. Page Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-semibold text-gray-900">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 3. Still Have Questions CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-green-50">
        <Card className="border-2 border-green-200 bg-white">
          <CardContent className="pt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">
              Our customer support team is available on WhatsApp to help you
              with any questions or concerns.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold py-3 px-8"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Us on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
