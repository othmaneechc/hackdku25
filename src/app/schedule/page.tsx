import React from "react";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "timeline",
};

export default function TimelinePage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="Timeline" description="Mark the dates!" />
      <hr className="my-8" />
      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
      </div>
    </div>
  );
}
