import { Outlet } from 'react-router';
import ScrollToTop from '@/app/components/ScrollToTop';
import EtherealBackground from '@/app/components/EtherealBackground';

export default function Layout() {
  return (
    <>
      <EtherealBackground />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
