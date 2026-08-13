import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, MessageCircle } from "lucide-react";

interface RegionData {
  titleKey: string;
  cities: string[];
}

export function CoveragePage() {
  const { t } = useLanguage();

  // Region data with hardcoded cities since they remain constant across languages
  const regions: RegionData[] = [
    {
      titleKey: "coverage.delhiNcr.title",
      cities: ["New Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad", "Sonipat"],
    },
    {
      titleKey: "coverage.northIndia.title",
      cities: [
        "Jaipur",
        "Chandigarh",
        "Ludhiana",
        "Jalandhar",
        "Amritsar",
        "Dehradun",
        "Lucknow",
        "Kanpur",
      ],
    },
    {
      titleKey: "coverage.westIndia.title",
      cities: ["Ahmedabad", "Vadodara", "Surat", "Mumbai", "Pune", "Nashik"],
    },
    {
      titleKey: "coverage.centralIndia.title",
      cities: ["Indore", "Bhopal", "Nagpur", "Raipur"],
    },
    {
      titleKey: "coverage.additionalCorridors.title",
      cities: ["Kota", "Udaipur", "Gwalior", "Agra"],
    },
  ];

  const totalCities = regions.reduce((acc, region) => acc + region.cities.length, 0);
  const totalRegions = regions.length - 1; // Excluding additional corridors
  const regionalPartners = 4;

  const handleRouteEnquiry = () => {
    const message =
      "Hi, I need transport to a specific location. Can you help me with route enquiry?";
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-blue-600/90 via-blue-500/90 to-cyan-500/90 px-4 py-16 md:py-24"
        style={{
          backgroundImage: "url('/coverage-map.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("coverage.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
              {t("coverage.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <Badge className="mb-4 inline-flex h-auto bg-blue-100 px-4 py-2 text-2xl font-bold text-blue-600">
              {totalCities}
            </Badge>
            <p className="mt-2 text-lg font-semibold text-slate-700">Cities Covered</p>
          </div>
          <div className="text-center">
            <Badge className="mb-4 inline-flex h-auto bg-amber-100 px-4 py-2 text-2xl font-bold text-amber-600">
              {totalRegions}
            </Badge>
            <p className="mt-2 text-lg font-semibold text-slate-700">Regions</p>
          </div>
          <div className="text-center">
            <Badge className="mb-4 inline-flex h-auto bg-green-100 px-4 py-2 text-2xl font-bold text-green-600">
              {regionalPartners}
            </Badge>
            <p className="mt-2 text-lg font-semibold text-slate-700">Regional Partners</p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, idx) => (
              <Card key={idx} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <CardTitle className="text-xl">{t(region.titleKey)}</CardTitle>
                  </div>
                </CardHeader>
                <Separator className="mx-6" />
                <CardContent className="flex-1 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city, cityIdx) => (
                      <Badge key={cityIdx} variant="secondary">
                        {city}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-medium text-slate-600">Total Cities</span>
                    <span className="text-lg font-bold text-blue-600">
                      {region.cities.length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Route Enquiry CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="border-2 border-dashed border-blue-200 bg-blue-50">
          <CardContent className="pt-12">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Need transport to a specific location?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Our extensive network covers major cities and routes across North, West, and Central
                India. Contact us for route-specific enquiries and customized solutions.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleRouteEnquiry}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enquire About Routes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Network Benefits */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose Our Coverage Network?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Direct Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Direct linkages to major cities enabling faster transit and reduced handling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Regional Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Reliable partner network ensuring consistent service delivery across regions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Real-time tracking and monitoring across the entire coverage network.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Advanced routing technology to ensure timely delivery and cost efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
