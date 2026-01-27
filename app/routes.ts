import { createBrowserRouter } from "react-router";
import HomePage from "@/app/components/HomePage";
import SolutionsPage from "@/app/components/SolutionsPage";
import ContactPage from "@/app/components/ContactPage";
import ArchitecturePage from "@/app/components/ArchitecturePage";
import WebsiteServicesPage from "@/app/components/WebsiteServicesPage";
import PaidAdvertisingPage from "@/app/components/PaidAdvertisingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/solutions",
    Component: SolutionsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/architecture",
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
]);