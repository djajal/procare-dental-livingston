import { useEffect, useRef } from 'react';

/**
 * ZocDoc Widget Component with Lazy Loading
 * 
 * This component implements lazy loading for the ZocDoc booking widget
 * to prevent it from blocking the initial page render. The widget is only
 * loaded when it comes into view using Intersection Observer API.
 */
export default function ZocDocWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    // Skip if already loaded
    if (hasLoadedRef.current) return;

    // Create intersection observer to detect when widget comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Load ZocDoc script when widget container becomes visible
          if (entry.isIntersecting && !hasLoadedRef.current) {
            hasLoadedRef.current = true;
            
            // Load the ZocDoc embed script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://offsiteschedule.zocdoc.com/plugin/embed';
            
            // Insert script into the container
            if (containerRef.current) {
              containerRef.current.appendChild(script);
            }
            
            // Stop observing once loaded
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Start loading when widget is 100px from viewport
        rootMargin: '100px',
      }
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center py-8"
      data-testid="zocdoc-widget-container"
    >
      {/* ZocDoc widget will be injected here */}
    </div>
  );
}
