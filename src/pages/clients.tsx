import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";

export function ClientsPage() {
  const { t } = useLanguage();

  // Client data - 6 clients
  const clients = [
    {
      name: t("clients.list.0.name"),
      industry: t("clients.list.0.industry"),
      description:
        "Trusted partner for retail distribution across NCR and Rajasthan regions.",
    },
    {
      name: t("clients.list.1.name"),
      industry: t("clients.list.1.industry"),
      description:
        "Supporting nationwide FMCG supply chain and distribution networks.",
    },
    {
      name: t("clients.list.2.name"),
      industry: t("clients.list.2.industry"),
      description:
        "Specialized transportation for electrical components and equipment.",
    },
    {
      name: t("clients.list.3.name"),
      industry: t("clients.list.3.industry"),
      description:
        "Efficient apparel and fashion logistics across multiple distribution centers.",
    },
    {
      name: t("clients.list.4.name"),
      industry: t("clients.list.4.industry"),
      description:
        "Precision transportation for automotive components and industrial parts.",
    },
    {
      name: t("clients.list.5.name"),
      industry: t("clients.list.5.industry"),
      description:
        "Reliable medical supply distribution and healthcare logistics support.",
    },
  ];

  // Testimonials - 4 items
  const testimonials = [
    {
      quote: t("testimonials.items.0.quote"),
      name: t("testimonials.items.0.name"),
      role: t("testimonials.items.0.role"),
    },
    {
      quote: t("testimonials.items.1.quote"),
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
    },
    {
      quote: t("testimonials.items.3.quote"),
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
    },
  ];

  const handleJoinWhatsApp = () => {
    const message =
      "Hi! I'm interested in becoming a client of Vayutra Logistics. Can you tell me more about your services?";
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1. Page Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("clients.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("clients.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. Client Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Our Valued Clients
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We partner with leading businesses across diverse industries to deliver
          exceptional logistics solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 mb-3">
                  {client.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-700">
                  {client.industry}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-blue-200 bg-white hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-8">
                <div className="flex gap-2 mb-4">
                  <Quote className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <Quote className="w-6 h-6 text-blue-600 flex-shrink-0 translate-y-4" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Become a Client CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white">
          <CardContent className="pt-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join 185+ Businesses Who Trust Vayutra
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto text-lg">
              Experience reliable, efficient, and transparent logistics services
              tailored to your business needs
            </p>
            <Button
              onClick={handleJoinWhatsApp}
              className="bg-white text-blue-600 hover:bg-blue-50 gap-2 font-semibold py-3 px-8"
            >
              <MessageCircle className="w-5 h-5" />
              Become a Client
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
