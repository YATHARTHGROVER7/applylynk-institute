"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Check if it's the home page

  if (isHomePage) {
    return <>{children}</>; // Render only children on home page
  }

  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}
