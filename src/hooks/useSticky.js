import { useState, useEffect, useRef } from "react";

const useSticky = () => {
  const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const fixedRef = useRef(null);

  // Measure header height on mount and when it changes
  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      setTotalHeaderHeight(headerRef.current.clientHeight);
    };

    // Initial measurement
    updateHeight();

    // Use ResizeObserver for dynamic height changes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Handle scroll with throttling for better performance
  useEffect(() => {
    let timeoutId;

    const scrollHandler = () => {
      // Throttle to ~60fps (16ms)
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPos = window.scrollY;
        const shouldBeSticky = scrollPos > totalHeaderHeight;

        // Only update if state actually changes
        if (shouldBeSticky !== sticky) {
          setSticky(shouldBeSticky);
        }
      }, 16);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [totalHeaderHeight, sticky]);

  return { sticky, headerRef, fixedRef };
};

export default useSticky;
