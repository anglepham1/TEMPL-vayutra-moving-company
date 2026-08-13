import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Truck, MessageCircle } from "lucide-react";

export function FleetPage() {
  const { t } = useLanguage();

  // Fleet composition data
  const heavyVehicles = [
    { label: t("fleet.heavy.multiAxle"), count: 18 },
    { label: t("fleet.heavy.container"), count: 12 },
    { label: t("fleet.heavy.openBody"), count: 8 },
  ];

  const mediumVehicles = [
    { label: t("fleet.medium.lcv"), count: 14 },
    { label: t("fleet.medium.closedBody"), count: 10 },
  ];

  const urbanVehicles = [{ label: t("fleet.urban.miniCargo"), count: 10 }];

  const totalHeavy = 38;
  const totalMedium = 24;
  const totalUrban = 10;
  const totalFleet = 72;

  const heavyPercent = Math.round((totalHeavy / totalFleet) * 100);
  const mediumPercent = Math.round((totalMedium / totalFleet) * 100);
  const urbanPercent = Math.round((totalUrban / totalFleet) * 100);

  const handleFleetEnquiry = () => {
    const message = "Hi, I'm interested in dedicated fleet services. Can you provide details?";
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("fleet.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
              {t("fleet.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
              {t("fleet.total")}
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-7xl font-bold text-blue-600 md:text-8xl">72</span>
            <span className="text-2xl text-slate-600 md:text-3xl">{t("fleet.vehicles")}</span>
          </div>
          <p className="mt-4 text-center text-lg text-slate-600">
            Ready to move your cargo with reliability and efficiency
          </p>
        </div>
      </section>

      {/* Heavy Commercial Vehicles */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image/Icon Section */}
              <div className="flex min-h-96 w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 p-8 md:w-2/5">
                <img
                  src="/truck-ftl.webp"
                  alt="Heavy Commercial Vehicles"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-10">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl md:text-3xl">
                    {t("fleet.heavy.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-6 p-0">
                  <div className="space-y-6">
                    {heavyVehicles.map((vehicle, idx) => (
                      <div key={idx}>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-slate-700">{vehicle.label}</span>
                          <span className="text-lg font-bold text-blue-600">{vehicle.count}</span>
                        </div>
                        <Progress
                          value={(vehicle.count / totalHeavy) * 100}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                  <Separator className="my-6" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Total Heavy Vehicles</span>
                    <span className="text-xl font-bold text-blue-600">{totalHeavy}</span>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Medium Commercial Vehicles */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="flex-1 p-8 md:p-10">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl md:text-3xl">
                  {t("fleet.medium.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-6 p-0">
                <div className="space-y-6">
                  {mediumVehicles.map((vehicle, idx) => (
                    <div key={idx}>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-medium text-slate-700">{vehicle.label}</span>
                        <span className="text-lg font-bold text-amber-600">{vehicle.count}</span>
                      </div>
                      <Progress
                        value={(vehicle.count / totalMedium) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Total Medium Vehicles</span>
                  <span className="text-xl font-bold text-amber-600">{totalMedium}</span>
                </div>
              </CardContent>
            </div>

            {/* Image/Icon Section */}
            <div className="flex min-h-80 w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 p-8 md:w-2/5">
              <Truck className="h-32 w-32 text-amber-600 opacity-60" />
            </div>
          </div>
        </Card>
      </section>

      {/* Urban Distribution Fleet */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image/Icon Section */}
              <div className="flex min-h-80 w-full items-center justify-center bg-gradient-to-br from-green-200 to-green-300 p-8 md:w-2/5">
                <img
                  src="/delivery-van.webp"
                  alt="Urban Distribution Fleet"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23bbf7d0' width='400' height='300'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-10">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl md:text-3xl">
                    {t("fleet.urban.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-6 p-0">
                  <div className="space-y-6">
                    {urbanVehicles.map((vehicle, idx) => (
                      <div key={idx}>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-slate-700">{vehicle.label}</span>
                          <span className="text-lg font-bold text-green-600">{vehicle.count}</span>
                        </div>
                        <Progress
                          value={(vehicle.count / totalUrban) * 100}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                  <Separator className="my-6" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Total Urban Vehicles</span>
                    <span className="text-xl font-bold text-green-600">{totalUrban}</span>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Fleet Composition Chart */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fleet Composition Breakdown
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Distribution of vehicles across all categories
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Heavy Commercial */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Heavy Commercial</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-bold text-blue-600">{totalHeavy}</span>
                  <Badge variant="secondary">{heavyPercent}%</Badge>
                </div>
                <p className="text-sm text-slate-600">Multi-axle & container trucks</p>
              </div>
              <Progress value={heavyPercent} className="h-3" />
            </CardContent>
          </Card>

          {/* Medium Commercial */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-amber-600">Medium Commercial</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-bold text-amber-600">{totalMedium}</span>
                  <Badge variant="secondary">{mediumPercent}%</Badge>
                </div>
                <p className="text-sm text-slate-600">LCV & closed body vehicles</p>
              </div>
              <Progress value={mediumPercent} className="h-3" />
            </CardContent>
          </Card>

          {/* Urban Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">Urban Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-bold text-green-600">{totalUrban}</span>
                  <Badge variant="secondary">{urbanPercent}%</Badge>
                </div>
                <p className="text-sm text-slate-600">Mini cargo vans</p>
              </div>
              <Progress value={urbanPercent} className="h-3" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dedicated Fleet CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Need dedicated vehicles?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Customize your transportation with our dedicated fleet contracts tailored to your business requirements.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleFleetEnquiry}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Enquire About Dedicated Fleet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
