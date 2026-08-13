import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/layout"
import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { ServicesPage } from "@/pages/services"
import { ServiceDetailPage } from "@/pages/service-detail"
import { FleetPage } from "@/pages/fleet"
import { CoveragePage } from "@/pages/coverage"
import { TrackingPage } from "@/pages/tracking"
import { IndustriesPage } from "@/pages/industries"
import { ClientsPage } from "@/pages/clients"
import { ContactPage } from "@/pages/contact"
import { FaqPage } from "@/pages/faq"
import { NotFoundPage } from "@/pages/not-found"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
