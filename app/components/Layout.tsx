import { Outlet } from 'react-router';
import ScrollToTop from '@/app/components/ScrollToTop';
import SiteBackground from '@/app/components/SiteBackground';

export default function Layout() {
  return (
    <>
      <SiteBackground />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
