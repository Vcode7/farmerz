"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

import useLocalStorage from "../hooks/useLocalStorage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()
  // const pathname = usePathname();
  const [token, setToken] = useLocalStorage("token",'');
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
        if(!token){
            router.push('/auth/signin')
      }
  }, [router,token]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
