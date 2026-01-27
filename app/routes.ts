import { createBrowserRouter } from "react-router";
import HomePage from "@/app/components/HomePage";
import SolutionsPage from "@/app/components/SolutionsPage";
import ContactPage from "@/app/components/ContactPage";
import ArchitecturePage from "@/app/components/ArchitecturePage";
import WebsiteServicesPage from "@/app/components/WebsiteServicesPage";
import PaidAdvertisingPage from "@/app/components/PaidAdvertisingPage";
import AutomationServicesPage from "@/app/components/AutomationServicesPage";
import BrandingPage from "@/app/components/BrandingPage";
import YouTubeManagementPage from "@/app/components/YouTubeManagementPage";
import NotFoundPage from "@/app/components/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/services",
    Component: SolutionsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/about",
    Component: ArchitecturePage,
  },
  {
    path: "/services/website",
    Component: WebsiteServicesPage,
  },
  {
    path: "/services/advertising",
    Component: PaidAdvertisingPage,
  },
  {
    path: "/services/automation",
    Component: AutomationServicesPage,
  },
  {
    path: "/services/branding",
    Component: BrandingPage,
  },
  {
    path: "/services/youtube",
    Component: YouTubeManagementPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);