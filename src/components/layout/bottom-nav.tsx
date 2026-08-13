import { Link, useLocation } from "react-router-dom"
import { Home, Package, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/i18n/language-provider"

const items = [
  { key: "home", path: "/", icon: Home },
  { key: "services", path: "/services", icon: Package },
  { key: "tracking", path: "/tracking", icon: MapPin },
  { key: "contact", path: "/contact", icon: Phone },
]

export function BottomNav() {
  const { t } = useLanguage()
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {items.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.path
          return (
            <Link
              key={item.key}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "text-primary" : ""}`} />
              <span>{t(`nav.${item.key}`)}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
