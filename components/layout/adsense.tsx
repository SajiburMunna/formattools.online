"use client";

import { useEffect } from "react";

interface AdSenseProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSense({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style = {},
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with your AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// Hero Banner Ad (Top of page, horizontal)
export function HeroBannerAd() {
  return (
    <div className="hidden lg:block w-full max-w-7xl mx-auto my-4">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center min-h-[90px]">
        <AdSense
          slot="1234567890"
          format="horizontal"
          className="w-full"
          style={{ minHeight: "90px" }}
        />
      </div>
    </div>
  );
}

// Sidebar Ad (Vertical rectangle)
export function SidebarAd() {
  return (
    <div className="hidden xl:block sticky top-20">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center min-h-[250px] w-[300px]">
        <AdSense
          slot="0987654321"
          format="rectangle"
          responsive={false}
          style={{ width: "300px", height: "250px" }}
        />
      </div>
    </div>
  );
}

// In-Feed Ad (Between tool cards)
export function InFeedAd() {
  return (
    <div className="w-full">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center min-h-[250px]">
        <AdSense
          slot="1357924680"
          format="fluid"
          style={{ minHeight: "250px" }}
        />
      </div>
    </div>
  );
}

// Mobile Banner Ad
export function MobileBannerAd() {
  return (
    <div className="lg:hidden w-full my-4">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 flex items-center justify-center min-h-[50px]">
        <AdSense
          slot="2468013579"
          format="auto"
          style={{ minHeight: "50px" }}
        />
      </div>
    </div>
  );
}
