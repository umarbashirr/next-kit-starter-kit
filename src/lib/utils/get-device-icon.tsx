import { Monitor, Smartphone, Tablet } from "lucide-react";

export const getDeviceIcon = (deviceType: string) => {
  switch (deviceType) {
    case "mobile":
      return <Smartphone className="h-6 w-6" />;
    case "tablet":
      return <Tablet className="h-6 w-6" />;
    default:
      return <Monitor className="h-6 w-6" />;
  }
};
