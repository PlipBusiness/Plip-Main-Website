import { Outlet } from 'react-router';
import ScrollToTop from '@/app/components/ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
