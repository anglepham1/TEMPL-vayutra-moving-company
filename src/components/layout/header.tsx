import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Globe, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/i18n/language-provider"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "fleet", path: "/fleet" },
  { key: "coverage", path: "/coverage" },
  { key: "tracking", path: "/tracking" },
  { key: "industries", path: "/industries" },
  { key: "clients", path: "/clients" },
  { key: "contact", path: "/contact" },
  { key: "faq", path: "/faq" },
]

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Truck className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Vayutra</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="gap-1 text-xs font-semibold"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "HI" : "EN"}
          </Button>
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center gap-2 pb-6 pt-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Truck className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Vayutra</span>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent ${
                      location.pathname === item.path
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
