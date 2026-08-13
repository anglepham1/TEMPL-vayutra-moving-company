import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Store,
  Globe,
  Car,
  Pill,
  Zap,
  Smartphone,
  Package,
  Building,
  Shirt,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";

const INDUSTRIES = [
  {
    id: "fmcg",
    key: "fmcg",
    icon: ShoppingCart,
    description: "Fast-moving goods logistics with temperature control",
  },
  {
    id: "retail",
    key: "retail",
    icon: Store,
    description: "Multi-store distribution and inventory management",
  },
  {
    id: "ecommerce",
    key: "ecommerce",
    icon: Globe,
    description: "E-commerce fulfillment and last-mile delivery",
  },
  {
    id: "automotive",
    key: "automotive",
    icon: Car,
    description: "Automotive parts and vehicle logistics",
  },
  {
    id: "pharma",
    key: "pharma",
    icon: Pill,
    description: "Pharmaceutical cold chain and compliance",
  },
  {
    id: "electrical",
    key: "electrical",
    icon: Zap,
    description: "Electrical equipment and spare parts distribution",
  },
  {
    id: "electronics",
    key: "electronics",
    icon: Smartphone,
    description: "Electronics and high-value gadget logistics",
  },
  {
    id: "packaging",
    key: "packaging",
    icon: Package,
    description: "Packaging materials and supplies distribution",
  },
  {
    id: "building",
    key: "building",
    icon: Building,
    description: "Building materials and construction logistics",
  },
  {
    id: "textile",
    key: "textile",
    icon: Shirt,
    description: "Textile and apparel supply chain",
  },
];

const TRUST_POINTS = [
  {
    title: "Industry Expertise",
    description: "15+ years serving specialized logistics needs",
  },
  {
    title: "Compliance Ready",
    description: "Meet sector-specific regulations and standards",
  },
  {
    title: "Custom Solutions",
    description: "Tailored workflows for your industry requirements",
  },
  {
    title: "Real-time Tracking",
    description: "Full visibility across your supply chain",
  },
];

export function IndustriesPage() {
  const { t } = useLanguage();

  const handleIndustryEnquiry = (industryName: string) => {
    const message = `Hi, I need logistics services for the ${industryName} sector. Please share details.`;
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white -mx-4 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("industries.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t("industries.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComponent = industry.icon;
            const industryNameKey = `industries.list.${industry.key}`;

            return (
              <Card
                key={industry.id}
                className="border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                      {t(industryNameKey)}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs md:text-sm"
                    onClick={() => handleIndustryEnquiry(t(industryNameKey))}
                  >
                    Enquire
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Why Industries Trust Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Industries Trust Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need industry-specific logistics solutions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Our expert team is ready to design a logistics solution tailored to your industry needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 gap-2 font-semibold"
              onClick={() =>
                openWhatsApp(
                  "Hi, I need industry-specific logistics solutions. Please advise."
                )
              }
            >
              <MessageSquare className="w-5 h-5" />
              Connect on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
