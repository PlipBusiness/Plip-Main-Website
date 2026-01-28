import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Only scroll to top if there's no hash (anchor link)
    if (!hash) {
      // Force scroll immediately before any browser restoration can happen
      const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      };

      // Execute immediately
      scrollToTop();

      // Also execute on next tick to override any browser behavior
      setTimeout(scrollToTop, 0);
      setTimeout(scrollToTop, 10);
    }
  }, [pathname, hash]);

  return null;
}
