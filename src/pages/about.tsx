import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  CheckCircle,
  Zap,
  Lock,
  Handshake,
  MessageCircle,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("about.values.reliability.title"),
      description: t("about.values.reliability.desc"),
    },
    {
      icon: CheckCircle,
      title: t("about.values.accountability.title"),
      description: t("about.values.accountability.desc"),
    },
    {
      icon: Zap,
      title: t("about.values.efficiency.title"),
      description: t("about.values.efficiency.desc"),
    },
    {
      icon: Lock,
      title: t("about.values.safety.title"),
      description: t("about.values.safety.desc"),
    },
    {
      icon: Handshake,
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.desc"),
    },
  ];

  const milestones = [
    { year: 2018, title: "Company Founded", desc: "Vayutra Logistics established" },
    { year: 2019, title: "First 50 Clients", desc: "Rapid growth begins" },
    { year: 2020, title: "Fleet Expanded to 40 Vehicles", desc: "Scaling operations" },
    { year: 2021, title: "West India Operations Launched", desc: "Regional expansion" },
    { year: 2022, title: "100+ Clients Milestone", desc: "Continued growth" },
    { year: 2023, title: "Express Cargo Service Added", desc: "New service offering" },
    { year: 2024, title: "26 Cities Coverage Achieved", desc: "Pan-India presence" },
    { year: 2025, title: "185+ Active Clients", desc: "Market leader status" },
  ];

  const teamMembers = [
    {
      nameKey: "about.team.aariv.name",
      roleKey: "about.team.aariv.role",
      descKey: "about.team.aariv.desc",
      initials: "AR",
    },
    {
      nameKey: "about.team.priya.name",
      roleKey: "about.team.priya.role",
      descKey: "about.team.priya.desc",
      initials: "PS",
    },
    {
      nameKey: "about.team.rohit.name",
      roleKey: "about.team.rohit.role",
      descKey: "about.team.rohit.desc",
      initials: "RK",
    },
    {
      nameKey: "about.team.anjali.name",
      roleKey: "about.team.anjali.role",
      descKey: "about.team.anjali.desc",
      initials: "AS",
    },
  ];

  const stats = [
    { value: "8+", label: "Years of Excellence" },
    { value: "12,400+", label: "Deliveries Completed" },
    { value: "185+", label: "Active Clients" },
    { value: "72", label: "Vehicles Fleet" },
    { value: "98.1%", label: "On-Time Delivery" },
    { value: "26", label: "Cities Covered" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Page Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(6, 182, 212, 0.9) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center text-white z-10 mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("about.title")}
          </h1>
          <p className="text-lg md:text-xl text-blue-50">
            Established in 2018, serving businesses across India
          </p>
        </div>
      </section>

      {/* Section 2: Company Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                About Vayutra Logistics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Reliable Logistics Partner</p>
                    <p className="text-sm text-muted-foreground">
                      Trusted by 185+ businesses across India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Advanced Fleet Management</p>
                    <p className="text-sm text-muted-foreground">
                      72 vehicles equipped with tracking technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Pan-India Coverage</p>
                    <p className="text-sm text-muted-foreground">
                      Operating in 26 cities nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/operations-center.webp"
                alt="Operations Center"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-semibold text-sm">
                  State-of-the-art operations center managing 26+ cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Our Impact by Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-8 text-center border border-border hover:border-blue-300 transition-colors"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Company Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These principles guide every decision we make and shape how we serve our clients
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border border-border hover:border-blue-300 transition-colors">
                  <CardHeader className="text-center pb-3">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Timeline/Milestones */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:flex-1">
                    <div
                      className={`bg-background border border-border rounded-lg p-6 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <Badge variant="default" className="mb-3">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-background relative z-10" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 md:flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Leadership Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Leadership Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the experienced professionals driving Vayutra Logistics forward
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-border hover:border-blue-300 transition-colors overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {member.initials}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{t(member.nameKey)}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium">{t(member.roleKey)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(member.descKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Company Details */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Company Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal Details */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-xl">Legal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">GST Number</p>
                  <p className="font-mono font-semibold text-lg">07AAJCV8419K1Z8</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">PAN Number</p>
                  <p className="font-mono font-semibold text-lg">AAJCV8419K</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-xl">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Weekdays</p>
                    <p className="text-sm text-muted-foreground">
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Weekends</p>
                    <p className="text-sm text-muted-foreground">
                      10:00 AM - 4:00 PM IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registered Address */}
          <Card className="border border-border mt-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Registered Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Vayutra Logistics Private Limited
                <br />
                Operations Center, Industrial Area
                <br />
                Ahmedabad, Gujarat 380015
                <br />
                India
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Partner with Vayutra Logistics
          </h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Join 185+ businesses that trust us with their logistics needs. Get in touch today to discuss how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp("Hi, I am interested in partnering with Vayutra Logistics. Please share details.")}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              <Users className="w-5 h-5" />
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
