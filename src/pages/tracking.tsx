import { useState, useRef } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MessageSquare,
  CheckCircle,
  Package,
  Truck,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { openWhatsApp } from "@/lib/whatsapp";

const SAMPLE_SHIPMENTS = [
  {
    id: "VYT984213",
    from: "Delhi",
    to: "Jaipur",
    status: "In Transit",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "VYT984214",
    from: "Gurugram",
    to: "Ahmedabad",
    status: "Reached Hub",
    statusColor: "bg-purple-100 text-purple-800",
  },
  {
    id: "VYT984215",
    from: "Noida",
    to: "Lucknow",
    status: "Out for Delivery",
    statusColor: "bg-amber-100 text-amber-800",
  },
  {
    id: "VYT984216",
    from: "Delhi",
    to: "Chandigarh",
    status: "Delivered",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "VYT984217",
    from: "Faridabad",
    to: "Pune",
    status: "In Transit",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "VYT984218",
    from: "Ghaziabad",
    to: "Surat",
    status: "Loaded",
    statusColor: "bg-orange-100 text-orange-800",
  },
];

const TIMELINE_STEPS = [
  { step: 1, label: "Booked", icon: Package },
  { step: 2, label: "Loaded", icon: Package },
  { step: 3, label: "In Transit", icon: Truck },
  { step: 4, label: "Reached Hub", icon: MapPin },
  { step: 5, label: "Out for Delivery", icon: Truck },
  { step: 6, label: "Delivered", icon: CheckCircle },
];

export function TrackingPage() {
  const { t } = useLanguage();
  const [trackingId, setTrackingId] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleWhatsAppTrack = () => {
    const message = `Hi, I would like to track my shipment. My Tracking ID is: ${trackingId || "not specified"}`;
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1. Page Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("tracking.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("tracking.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. Tracking Form */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder={t("tracking.placeholder")}
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1"
            />
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* 3. Sample Tracking Table */}
      <section
        ref={resultsRef}
        className="mx-auto max-w-7xl px-4 py-16 md:py-24"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Sample Shipments
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Tracking ID</TableHead>
                <TableHead className="font-semibold">Route</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SAMPLE_SHIPMENTS.map((shipment) => (
                <TableRow key={shipment.id} className="border-b hover:bg-gray-50">
                  <TableCell className="font-mono text-sm font-semibold">
                    {shipment.id}
                  </TableCell>
                  <TableCell>
                    {shipment.from} → {shipment.to}
                  </TableCell>
                  <TableCell>
                    <Badge className={shipment.statusColor}>
                      {shipment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {SAMPLE_SHIPMENTS.map((shipment) => (
            <Card key={shipment.id} className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tracking ID</p>
                    <p className="font-mono font-bold text-sm">
                      {shipment.id}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Route</p>
                    <p className="text-sm font-medium">
                      {shipment.from} → {shipment.to}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Status</p>
                    <Badge className={shipment.statusColor}>
                      {shipment.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Tracking Status Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Shipment Journey
        </h2>

        <div className="flex flex-wrap justify-between items-start md:items-center gap-4 md:gap-0">
          {TIMELINE_STEPS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={item.step} className="flex items-center flex-1 min-w-max md:min-w-0">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 text-center">
                    {item.label}
                  </p>
                </div>
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className="hidden md:block flex-1 h-1 bg-blue-600 mx-2 md:mx-4" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Track via WhatsApp */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find your shipment?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Chat with us on WhatsApp for instant support and tracking updates.
            </p>
            <Button
              onClick={handleWhatsAppTrack}
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Track on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
