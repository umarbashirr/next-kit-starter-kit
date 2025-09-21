type ResultType = { browser: string; os: string; deviceType: string };

export const parseUserAgent = (ua: string): ResultType => {
  let browser = "Unknown Browser";
  if (ua.includes("Chrome/")) {
    const version = ua.match(/Chrome\/(\d+)/)?.[1];
    browser = `Chrome (version: ${version})`;
  } else if (ua.includes("Firefox/")) {
    const version = ua.match(/Firefox\/(\d+)/)?.[1];
    browser = `Firefox (version: ${version})`;
  } else if (ua.includes("Safari/") && !ua.includes("Chrome")) {
    browser = "Safari";
  } else if (ua.includes("Edge/")) {
    const version = ua.match(/Edge\/(\d+)/)?.[1];
    browser = `Edge (version: ${version})`;
  }

  let os = "Unknown OS";
  if (ua.includes("Windows NT 10.0")) {
    os = "Windows 10/11";
  } else if (ua.includes("Windows NT")) {
    os = "Windows";
  } else if (ua.includes("Mac OS X")) {
    os = "macOS";
  } else if (ua.includes("Linux")) {
    os = "Linux";
  } else if (ua.includes("Android")) {
    const version = ua.match(/Android (\d+)/)?.[1];
    os = version ? `Android ${version}` : "Android";
  } else if (ua.includes("iPhone") || ua.includes("iPad")) {
    os = "iOS";
  }

  let deviceType: "desktop" | "mobile" | "tablet" = "desktop";
  if (ua.includes("Mobile") || ua.includes("iPhone")) {
    deviceType = "mobile";
  } else if (ua.includes("Tablet") || ua.includes("iPad")) {
    deviceType = "tablet";
  }

  return { browser, os, deviceType };
};
