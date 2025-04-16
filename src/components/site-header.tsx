"use client";
import HeaderNav from "@/components/header-nav";
import MobileNav from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="fixed top-6 left-6 right-6 z-40 flex items-center justify-between bg-blue-800/80 backdrop-blur-md text-white border border-blue-500/40 shadow">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-background">
            <Image src="/logo-white.png" width="30" height="20" alt="HackDKU logo"/>
            <span className="text-4xl font-mono font-bold">HΔCKDKU</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="default"
            className="p-0 text-white md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
