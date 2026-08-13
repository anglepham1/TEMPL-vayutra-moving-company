'use client';

import { useLanguage } from '@/i18n/language-provider';
import { openWhatsApp } from '@/lib/whatsapp';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect, useCallback } from 'react';
import {
  MapPin,
  Eye,
  UserCheck,
  Route,
  Shield,
  Scaling,
  Network,
  FileCheck,
  Building2,
  ChevronRight,
  Phone,
  Mail,
  MapPinIcon,
  Clock,
  Star,
  ArrowRight,
} from 'lucide-react';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroCarousel t={t} />

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 min-w-max md:min-w-0">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">8+</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.years')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">12,400+</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.deliveries')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">185+</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.clients')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">72</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.vehicles')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">98.1%</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.onTime')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">26</div>
              <p className="text-sm text-primary-foreground/80">{t('stats.cities')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <ServiceCard
              image="/service-ftl.webp"
              title={t('services.ftl.title')}
              desc={t('services.ftl.desc')}
              link="/services/ftl"
            />
            <ServiceCard
              image="/service-ptl.webp"
              title={t('services.ltl.title')}
              desc={t('services.ltl.desc')}
              link="/services/ptl"
            />
            <ServiceCard
              image="/service-express.webp"
              title={t('services.express.title')}
              desc={t('services.express.desc')}
              link="/services/express"
            />
            <ServiceCard
              image="/service-industrial.webp"
              title={t('services.specialized.title')}
              desc={t('services.specialized.desc')}
              link="/services/industrial"
            />
            <ServiceCard
              image="/service-ecommerce.webp"
              title={t('services.ecommerce.title')}
              desc={t('services.ecommerce.desc')}
              link="/services/ecommerce"
            />
            <ServiceCard
              image="/service-warehousing.webp"
              title={t('services.warehousing.title')}
              desc={t('services.warehousing.desc')}
              link="/services/warehousing"
            />
            <ServiceCard
              image="/service-lastmile.webp"
              title={t('services.lastmile.title')}
              desc={t('services.lastmile.desc')}
              link="/services/lastmile"
            />
            <ServiceCard
              image="/service-dedicated.webp"
              title={t('services.documentation.title')}
              desc={t('services.documentation.desc')}
              link="/services/dedicated"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/services">
                {t('cta.viewAllServices')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('whyUs.title')}
            </h2>
            <p className="text-muted-foreground">{t('whyUs.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Eye}
              title={t('whyUs.features.visibility.title')}
              desc={t('whyUs.features.visibility.desc')}
            />
            <FeatureCard
              icon={UserCheck}
              title={t('whyUs.features.support.title')}
              desc={t('whyUs.features.support.desc')}
            />
            <FeatureCard
              icon={Route}
              title={t('whyUs.features.optimization.title')}
              desc={t('whyUs.features.optimization.desc')}
            />
            <FeatureCard
              icon={Shield}
              title={t('whyUs.features.security.title')}
              desc={t('whyUs.features.security.desc')}
            />
            <FeatureCard
              icon={Scaling}
              title={t('whyUs.features.scalability.title')}
              desc={t('whyUs.features.scalability.desc')}
            />
            <FeatureCard
              icon={Network}
              title={t('whyUs.features.network.title')}
              desc={t('whyUs.features.network.desc')}
            />
            <FeatureCard
              icon={FileCheck}
              title={t('whyUs.features.compliance.title')}
              desc={t('whyUs.features.compliance.desc')}
            />
            <FeatureCard
              icon={Building2}
              title={t('whyUs.features.infrastructure.title')}
              desc={t('whyUs.features.infrastructure.desc')}
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/about">
                {t('cta.viewAllBenefits')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t('about.title')}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-4">
                {t('about.description')}
              </p>
              <Button asChild>
                <Link to="/about">
                  {t('cta.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="/operations-center.webp"
                alt="Operations Center"
                loading="lazy"
                className="rounded-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('fleet.title')}
            </h2>
            <p className="text-muted-foreground">{t('fleet.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FleetCard
              title={t('fleet.heavy.title')}
              count="38"
              desc={t('fleet.heavy.desc')}
            />
            <FleetCard
              title={t('fleet.medium.title')}
              count="24"
              desc={t('fleet.medium.desc')}
            />
            <FleetCard
              title={t('fleet.urban.title')}
              count="10"
              desc={t('fleet.urban.desc')}
            />
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/fleet">
                {t('cta.viewFleet')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/coverage-map.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              {t('coverage.title')}
            </h2>
            <p className="text-gray-200">{t('coverage.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              'Mumbai',
              'Delhi',
              'Bangalore',
              'Chennai',
              'Kolkata',
              'Hyderabad',
              'Pune',
              'Ahmedabad',
            ].map((city) => (
              <Badge
                key={city}
                variant="secondary"
                className="text-center py-2 justify-center text-sm"
              >
                {city}
              </Badge>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/coverage">
                {t('cta.seeAllLocations')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('industries.title')}
            </h2>
            <p className="text-muted-foreground">{t('industries.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              'Manufacturing',
              'Retail',
              'E-commerce',
              'Pharma',
              'FMCG',
              'Electronics',
              'Automotive',
              'Agriculture',
              'Textiles',
              'Food',
            ].map((industry) => (
              <Badge
                key={industry}
                variant="outline"
                className="text-center py-3 justify-center text-base cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {industry}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/industries">
                {t('cta.viewAllIndustries')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tracking Demo */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('tracking.title')}
            </h2>
            <p className="text-muted-foreground">{t('tracking.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={t('tracking.placeholder')}
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              />
              <Button className="bg-brand-accent hover:bg-brand-accent/90">
                {t('cta.track')}
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'VAY-001234', status: 'In Transit', progress: 65 },
              { id: 'VAY-001235', status: 'Delivered', progress: 100 },
              { id: 'VAY-001236', status: 'Picked Up', progress: 20 },
            ].map((tracking) => (
              <Card key={tracking.id}>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="font-semibold">{tracking.id}</div>
                    <Badge variant="outline">{tracking.status}</Badge>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-brand-accent h-2 rounded-full transition-all"
                        style={{ width: `${tracking.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/tracking">
                {t('cta.trackNow')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('testimonials.title')}
            </h2>
            <p className="text-muted-foreground">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: t('testimonials.testimonial1.quote'),
                name: t('testimonials.testimonial1.name'),
                role: t('testimonials.testimonial1.role'),
              },
              {
                quote: t('testimonials.testimonial2.quote'),
                name: t('testimonials.testimonial2.name'),
                role: t('testimonials.testimonial2.role'),
              },
              {
                quote: t('testimonials.testimonial3.quote'),
                name: t('testimonials.testimonial3.name'),
                role: t('testimonials.testimonial3.role'),
              },
              {
                quote: t('testimonials.testimonial4.quote'),
                name: t('testimonials.testimonial4.name'),
                role: t('testimonials.testimonial4.role'),
              },
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/clients">
                {t('cta.viewAllTestimonials')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('clients.title')}
            </h2>
            <p className="text-muted-foreground">{t('clients.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              'TechCorp Industries',
              'Global Retail Group',
              'Premier E-Commerce',
              'Pharma Solutions Ltd',
              'FMCG Innovations',
              'Auto Parts Co',
            ].map((company) => (
              <Card key={company} className="hover:shadow-lg transition-shadow">
                <CardContent className="py-8 text-center">
                  <p className="font-semibold text-sm">{company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/clients">
                {t('cta.viewAllClients')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {t('faq.title')}
            </h2>
            <p className="text-muted-foreground">{t('faq.subtitle')}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('faq.question1.title')}</AccordionTrigger>
              <AccordionContent>{t('faq.question1.answer')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('faq.question2.title')}</AccordionTrigger>
              <AccordionContent>{t('faq.question2.answer')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('faq.question3.title')}</AccordionTrigger>
              <AccordionContent>{t('faq.question3.answer')}</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/faq">
                {t('cta.viewAllFaqs')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-brand-accent text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('ctaBanner.title')}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t('ctaBanner.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => openWhatsApp("Hi, I would like to get a shipping quote. Please assist.")}
          >
            {t('cta.getQuote')}
          </Button>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                {t('contact.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('contact.phone')}</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('contact.email')}</p>
                    <p className="text-muted-foreground">info@vayutra.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPinIcon className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('contact.address')}</p>
                    <p className="text-muted-foreground">123 Logistics Hub, Mumbai, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('contact.hours')}</p>
                    <p className="text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 w-full sm:w-auto" asChild>
                <Link to="/contact">
                  {t('cta.contactUs')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Hero Carousel
const heroImages = [
  '/hero-trucks.webp',
  '/service-ftl.webp',
  '/service-express.webp',
  '/service-industrial.webp',
  '/service-warehousing.webp',
  '/service-dedicated.webp',
];

function HeroCarousel({ t }: { t: (key: string) => string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white"
            onClick={() => openWhatsApp("Hi, I would like to get a shipping quote. Please assist.")}
          >
            {t('cta.getQuote')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link to="/tracking">
              {t('cta.trackShipment')}
            </Link>
          </Button>
        </div>
      </div>
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Helper Components
interface ServiceCardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}

function ServiceCard({ image, title, desc, link }: ServiceCardProps) {
  return (
    <Link to={link}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="pt-4 pb-5">
          <h3 className="font-semibold mb-1.5">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

interface FeatureCardProps {
  icon: any;
  title: string;
  desc: string;
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <Icon className="h-8 w-8 text-brand-accent mb-3" />
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}

interface FleetCardProps {
  title: string;
  count: string;
  desc: string;
}

function FleetCard({ title, count, desc }: FleetCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <p className="text-4xl font-bold text-brand-accent mb-2">{count}</p>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}
