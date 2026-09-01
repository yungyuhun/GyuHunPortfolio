import { useLayoutEffect, useState } from "react";

export type DeviceSize = "mobile" | "tablet" | "desktop";

export default function useDeviceSize(): DeviceSize {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("desktop");

  useLayoutEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceSize("mobile");
      else if (width < 1024) setDeviceSize("tablet");
      else setDeviceSize("desktop");
    };
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  return deviceSize;
}
