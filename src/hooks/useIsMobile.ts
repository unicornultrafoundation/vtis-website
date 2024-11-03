import { useLayoutEffect, useState } from "react";

const useIsMobile = (maxWidth = 760): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < maxWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
