export const COMPANY_INFO = {
  name: "Next Kit",
  logo: "/logo.png",
  email: "info@nextkit.com",
  description:
    "Next Kit is a platform for creating and managing your projects.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextkit.com",
  social: {
    github: "https://github.com/nextkit",
    twitter: "https://twitter.com/nextkit",
    linkedin: "https://linkedin.com/company/nextkit",
  },
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
};
