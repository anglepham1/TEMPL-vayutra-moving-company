import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { BottomNav } from "./bottom-nav"
import { FloatingWhatsApp } from "./floating-whatsapp"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <FloatingWhatsApp />
    </div>
  )
}
