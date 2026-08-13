import { Link } from "react-router-dom"
import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/i18n/language-provider"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/30 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Vayutra Logistics</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/vayutra-logistics" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://instagram.com/vayutralogistics" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com/VayutraLogistics" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("footer.quickLinks")}</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.about")}</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.services")}</Link>
              <Link to="/fleet" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.fleet")}</Link>
              <Link to="/coverage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.coverage")}</Link>
              <Link to="/tracking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.tracking")}</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("footer.services")}</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services/ftl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("services.ftl.title")}</Link>
              <Link to="/services/ptl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("services.ptl.title")}</Link>
              <Link to="/services/express" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("services.express.title")}</Link>
              <Link to="/services/industrial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("services.industrial.title")}</Link>
              <Link to="/services/ecommerce" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("services.ecommerce.title")}</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("footer.contactUs")}</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+91 9289934130</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>connect@vayutralogistics.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Plot 47, Sector 18 Logistics Hub, Dwarka Expressway, New Delhi</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t("contact.info.hoursValue")}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2018–2026 {t("footer.company")}. {t("footer.rights")}</p>
          <p>GST: 07AAJCV8419K1Z8 | PAN: AAJCV8419K</p>
        </div>
      </div>
    </footer>
  )
}
