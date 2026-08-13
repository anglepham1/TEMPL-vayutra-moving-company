import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Truck,
  PackageOpen,
  Zap,
  Factory,
  ShoppingCart,
  Warehouse,
  MapPin,
  FileText,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

interface ServiceData {
  icon: React.ReactNode;
  image: string;
  features: string[];
  industries: string[];
  relatedServices: string[];
}

const serviceDatabase: Record<string, ServiceData> = {
  ftl: {
    icon: <Truck className="h-8 w-8" />,
    image: "/truck-ftl.webp",
    features: [
      "Full truckload capacity utilization",
      "Direct point-to-point delivery",
      "Dedicated vehicle assignment",
      "Real-time GPS tracking",
      "Professional driver support",
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "Automotive",
      "Heavy Equipment",
    ],
    relatedServices: ["ptl", "dedicated", "express"],
  },
  ptl: {
    icon: <PackageOpen className="h-8 w-8" />,
    image: "/hero-trucks.webp",
    features: [
      "Flexible shipment sizes",
      "Cost-effective for partial loads",
      "Scheduled pickup and delivery",
      "Multiple stops capability",
      "Consolidated shipping network",
    ],
    industries: [
      "E-commerce",
      "Small Business",
      "Retail Distribution",
      "Packaging Industry",
    ],
    relatedServices: ["ftl", "express", "ecommerce"],
  },
  express: {
    icon: <Zap className="h-8 w-8" />,
    image: "/express-cargo.webp",
    features: [
      "Same-day and next-day delivery",
      "Time-critical shipments",
      "Priority handling",
      "End-to-end tracking",
      "Guaranteed delivery windows",
    ],
    industries: [
      "Pharmaceuticals",
      "Electronics",
      "E-commerce",
      "Urgent Deliveries",
    ],
    relatedServices: ["ftl", "lastmile", "ecommerce"],
  },
  industrial: {
    icon: <Factory className="h-8 w-8" />,
    image: "/industrial-cargo.webp",
    features: [
      "Heavy machinery transport",
      "Specialized loading equipment",
      "Expert handling procedures",
      "Insurance coverage included",
      "Custom routing solutions",
    ],
    industries: [
      "Manufacturing",
      "Construction",
      "Mining",
      "Heavy Equipment Dealers",
    ],
    relatedServices: ["ftl", "dedicated", "warehousing"],
  },
  ecommerce: {
    icon: <ShoppingCart className="h-8 w-8" />,
    image: "/hero-trucks.webp",
    features: [
      "High-volume shipment handling",
      "Integration with online platforms",
      "Fast delivery options",
      "Returns management",
      "Scalable capacity",
    ],
    industries: [
      "E-commerce",
      "Online Retail",
      "Marketplace Sellers",
      "Digital Businesses",
    ],
    relatedServices: ["lastmile", "express", "warehousing"],
  },
  warehousing: {
    icon: <Warehouse className="h-8 w-8" />,
    image: "/warehouse.webp",
    features: [
      "Climate-controlled storage",
      "Inventory management systems",
      "Secure facility access",
      "Pick and pack services",
      "Distribution hub operations",
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "E-commerce",
      "Food & Beverage",
    ],
    relatedServices: ["ecommerce", "ftl", "ptl"],
  },
  lastmile: {
    icon: <MapPin className="h-8 w-8" />,
    image: "/delivery-van.webp",
    features: [
      "Last-mile delivery expertise",
      "Urban and rural coverage",
      "Proof of delivery tracking",
      "Customer communication",
      "Flexible delivery windows",
    ],
    industries: [
      "E-commerce",
      "Retail",
      "Food Delivery",
      "Subscription Services",
    ],
    relatedServices: ["ecommerce", "express", "ptl"],
  },
  dedicated: {
    icon: <FileText className="h-8 w-8" />,
    image: "/hero-trucks.webp",
    features: [
      "Dedicated vehicle fleet",
      "Exclusive use for one client",
      "Flexible scheduling",
      "Consistent driver assignment",
      "Customized service agreements",
    ],
    industries: [
      "Manufacturing",
      "Retail Chains",
      "Pharmaceutical",
      "High-Volume Shippers",
    ],
    relatedServices: ["ftl", "industrial", "warehousing"],
  },
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  if (!slug || !serviceDatabase[slug]) {
    return (
      <div className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              {t("services.notFound.title")}
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              {t("services.notFound.desc")}
            </p>
            <Link to="/services" className="mt-8">
              <Button>{t("services.backToServices")}</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const service = serviceDatabase[slug];
  const serviceTitle = t(`services.${slug}.title`);
  const serviceDesc = t(`services.${slug}.desc`);
  const serviceFullDesc = t(`services.${slug}.fullDesc`);

  const handleRequestService = () => {
    const message = `Hi, I would like to request your ${serviceTitle} service. Please provide more information.`;
    openWhatsApp(message);
  };

  const renderRelatedServices = () => {
    return service.relatedServices.slice(0, 3).map((relatedSlug) => ({
      slug: relatedSlug,
      title: t(`services.${relatedSlug}.title`),
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-lg bg-white/20 p-3 text-white">
                {service.icon}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {serviceTitle}
              </h1>
              <p className="mt-6 text-lg text-blue-100">
                {serviceDesc}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  onClick={handleRequestService}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("services.requestService")}
                </Button>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    {t("services.viewAllServices")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden overflow-hidden rounded-lg md:block">
              <img
                src={service.image}
                alt={serviceTitle}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("services.aboutService")}
          </h2>
          <Separator className="my-6" />
          <p className="text-lg leading-relaxed text-gray-700">
            {serviceFullDesc}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("services.keyFeatures")}
          </h2>
          <Separator className="my-6" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Industries */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900">
          {t("services.idealFor")}
        </h2>
        <Separator className="my-6" />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.industries.map((industry) => (
            <Card key={industry} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <p className="font-medium text-gray-900">{industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("services.relatedServices")}
          </h2>
          <Separator className="my-6" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renderRelatedServices().map((relatedService) => (
              <Link
                key={relatedService.slug}
                to={`/services/${relatedService.slug}`}
              >
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      {relatedService.title}
                      <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {t(`services.${relatedService.slug}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t("services.readyToStart")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            {t("services.getInTouchDesc")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={handleRequestService}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("services.requestService")}
            </Button>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                {t("services.exploreOtherServices")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
