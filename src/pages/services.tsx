import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

interface ServiceItem {
  slug: string;
  image: string;
  titleKey: string;
  descKey: string;
}

const services: ServiceItem[] = [
  {
    slug: "ftl",
    image: "/service-ftl.webp",
    titleKey: "services.ftl.title",
    descKey: "services.ftl.desc",
  },
  {
    slug: "ptl",
    image: "/service-ptl.webp",
    titleKey: "services.ptl.title",
    descKey: "services.ptl.desc",
  },
  {
    slug: "express",
    image: "/service-express.webp",
    titleKey: "services.express.title",
    descKey: "services.express.desc",
  },
  {
    slug: "industrial",
    image: "/service-industrial.webp",
    titleKey: "services.industrial.title",
    descKey: "services.industrial.desc",
  },
  {
    slug: "ecommerce",
    image: "/service-ecommerce.webp",
    titleKey: "services.ecommerce.title",
    descKey: "services.ecommerce.desc",
  },
  {
    slug: "warehousing",
    image: "/service-warehousing.webp",
    titleKey: "services.warehousing.title",
    descKey: "services.warehousing.desc",
  },
  {
    slug: "lastmile",
    image: "/service-lastmile.webp",
    titleKey: "services.lastmile.title",
    descKey: "services.lastmile.desc",
  },
  {
    slug: "dedicated",
    image: "/service-dedicated.webp",
    titleKey: "services.dedicated.title",
    descKey: "services.dedicated.desc",
  },
];

export function ServicesPage() {
  const { t } = useLanguage();

  const handleEnquireNow = (serviceName: string) => {
    const message = `Hi, I am interested in ${serviceName}. Please share details.`;
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t("services.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-1 flex-col pt-5 pb-6">
                <h3 className="text-lg font-semibold mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {t(service.descKey)}
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleEnquireNow(t(service.titleKey))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("services.enquireNow")}
                  </Button>
                  <Link to={`/services/${service.slug}`}>
                    <Button size="sm" variant="ghost">
                      {t("services.learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t("services.customSolution.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {t("services.customSolution.desc")}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                openWhatsApp(
                  "Hi, I need a custom logistics solution. Can you help me?"
                )
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("services.contactUs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
