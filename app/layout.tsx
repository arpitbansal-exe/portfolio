import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpit Bansal | DevOps Engineer & SRE",
  description:
    "DevOps Engineer specializing in CI/CD pipelines, automation, Kubernetes and building reliable, scalable systems.",

  metadataBase: new URL("https://arpitbansal.in"),

  openGraph: {
    title: "Arpit Bansal | DevOps Engineer",
    description:
      "DevOps Engineer focused on CI/CD, automation, observability, Kubernetes and cloud-native automation",
    url: "https://arpitbansal.in",
    siteName: "Arpit Bansal Portfolio",
    locale: "en_US",
    type: "website",
  },

  authors: [{ name: "Arpit Bansal" }],
  creator: "Arpit Bansal",
  keywords: [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Kubernetes",
    "CI/CD",
    "Docker",
    "Cloud Automation",
    "Infrastructure as Code",
    "Observability",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
