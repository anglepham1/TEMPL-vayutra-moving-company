import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";

export function ContactPage() {
  const { t } = useLanguage();

  // Contact form state
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    pickup: "",
    delivery: "",
    cargoType: "",
    weight: "",
    vehicle: "",
    date: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New Shipping Enquiry:
Name: ${form.fullName}
Company: ${form.companyName}
Phone: ${form.phone}
Email: ${form.email}
Pickup: ${form.pickup}
Delivery: ${form.delivery}
Cargo: ${form.cargoType}
Weight: ${form.weight}
Vehicle: ${form.vehicle}
Date: ${form.date}
Message: ${form.message}`;

    openWhatsApp(whatsappMessage);

    // Reset form
    setForm({
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      pickup: "",
      delivery: "",
      cargoType: "",
      weight: "",
      vehicle: "",
      date: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+91 9289934130",
      href: "tel:+919289934130",
    },
    {
      icon: MessageCircle,
      title: t("contact.info.whatsapp"),
      value: "+91 9289934130",
      href: "https://wa.me/919289934130",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "connect@vayutralogistics.in",
      href: "mailto:connect@vayutralogistics.in",
    },
    {
      icon: Mail,
      title: t("contact.info.opsEmail"),
      value: "operations@vayutralogistics.in",
      href: "mailto:operations@vayutralogistics.in",
    },
    {
      icon: Mail,
      title: t("contact.info.salesEmail"),
      value: "sales@vayutralogistics.in",
      href: "mailto:sales@vayutralogistics.in",
    },
    {
      icon: MapPin,
      title: t("contact.info.address"),
      value: "Plot 47, Sector 18 Logistics Hub, Dwarka Expressway Corridor, New Delhi – 110075",
      href: "https://maps.google.com/?q=Plot+47,+Sector+18+Logistics+Hub,+Dwarka+Expressway",
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      value: t("contact.info.hoursValue"),
    },
  ];

  const departments = [
    {
      title: t("contact.departments.general.title"),
      person: t("contact.departments.general.person"),
      phone: "+91 9289934130",
      email: "connect@vayutralogistics.in",
    },
    {
      title: t("contact.departments.operations.title"),
      person: t("contact.departments.operations.person"),
      phone: "+91 9289934130",
      email: "operations@vayutralogistics.in",
    },
    {
      title: t("contact.departments.sales.title"),
      person: t("contact.departments.sales.person"),
      phone: "+91 9289934130",
      email: "sales@vayutralogistics.in",
    },
  ];

  const socialLinks = [
    { icon: ExternalLink, href: "https://linkedin.com/company/vayutra-logistics", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://instagram.com/vayutralogistics", label: "Instagram" },
    { icon: ExternalLink, href: "https://facebook.com/vayutralogistics", label: "Facebook" },
    { icon: ExternalLink, href: "https://youtube.com/@vayutralogistics", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1. Page Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const content = (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-gray-600 text-sm break-words">{info.value}</p>
                </div>
              </div>
            );

            return (
              <Card key={info.title} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Department Contacts */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {t("contact.departments.title")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Reach out to our specialized teams for your specific needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Card key={dept.title} className="border border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">{dept.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Contact Person</p>
                  <p className="font-semibold text-gray-900">{dept.person}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-gray-600 mb-2">Phone</p>
                  <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    {dept.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Email</p>
                  <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium break-all">
                    {dept.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Contact Form */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Send Us an Enquiry
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and we'll get back to you on WhatsApp
          </p>

          <Card className="border border-gray-200">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700">
                      {t("contact.form.fullName")}
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700">
                      {t("contact.form.companyName")}
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={handleFormChange}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      {t("contact.form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="+91 98XXXXXXXX"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      {t("contact.form.email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="text-gray-700">
                      {t("contact.form.pickup")}
                    </Label>
                    <Input
                      id="pickup"
                      name="pickup"
                      type="text"
                      value={form.pickup}
                      onChange={handleFormChange}
                      placeholder="City or address"
                      required
                    />
                  </div>

                  {/* Delivery Location */}
                  <div className="space-y-2">
                    <Label htmlFor="delivery" className="text-gray-700">
                      {t("contact.form.delivery")}
                    </Label>
                    <Input
                      id="delivery"
                      name="delivery"
                      type="text"
                      value={form.delivery}
                      onChange={handleFormChange}
                      placeholder="City or address"
                      required
                    />
                  </div>

                  {/* Cargo Type */}
                  <div className="space-y-2">
                    <Label htmlFor="cargoType" className="text-gray-700">
                      {t("contact.form.cargoType")}
                    </Label>
                    <Input
                      id="cargoType"
                      name="cargoType"
                      type="text"
                      value={form.cargoType}
                      onChange={handleFormChange}
                      placeholder="e.g., FMCG, Electronics, etc."
                      required
                    />
                  </div>

                  {/* Approximate Weight */}
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-gray-700">
                      {t("contact.form.weight")}
                    </Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="text"
                      value={form.weight}
                      onChange={handleFormChange}
                      placeholder="e.g., 500 kg, 2 tonnes"
                      required
                    />
                  </div>

                  {/* Vehicle Requirement */}
                  <div className="space-y-2">
                    <Label htmlFor="vehicle" className="text-gray-700">
                      {t("contact.form.vehicle")}
                    </Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      type="text"
                      value={form.vehicle}
                      onChange={handleFormChange}
                      placeholder="e.g., 20ft container, open truck"
                      required
                    />
                  </div>

                  {/* Preferred Pickup Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-700">
                      {t("contact.form.date")}
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>

                {/* Message - Full Width */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Any additional details or special requirements?"
                    rows={5}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Social Links */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-gray-900 text-white rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest news and updates
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Map Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="overflow-hidden border border-gray-200">
          <div className="relative h-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Head Office: New Delhi</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Plot 47, Sector 18 Logistics Hub, Dwarka Expressway Corridor, New Delhi – 110075
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
