import type { Metadata } from "next";
import SlideshowStage from "@/components/SlideshowStage";

export const metadata: Metadata = {
  title: "幻燈片",
};

export default function SlideshowPage() {
  return <SlideshowStage />;
}
