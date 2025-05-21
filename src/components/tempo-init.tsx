"use client";

import { TempoDevtools } from "tempo-devtools";
import { useEffect } from "react";

export function TempoInit() {
  useEffect(() => {
    // Only initialize in development mode
    if (
      process.env.NEXT_PUBLIC_TEMPO &&
      process.env.NODE_ENV === "development"
    ) {
      TempoDevtools.init();
    }
  }, []);

  return null;
}
