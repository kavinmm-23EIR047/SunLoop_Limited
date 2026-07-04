import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PlatformPage } from "@/pages/PlatformPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ServicesPage } from "@/pages/ServicesPage";

function ServiceRoute() {
  const params = useParams();
  return <ServiceDetailPage slug={params.slug ?? ""} />;
}

export function App() {
  return (
    <div className="site-shell flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceRoute />} />
          <Route path="/solutions/:slug" element={<ServiceRoute />} />
          <Route path="/ai-portal" element={<PlatformPage />} />
          <Route path="/platform" element={<Navigate to="/ai-portal" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}