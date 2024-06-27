"use client";
import { useRef } from "react";

function usePricingScroll() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    ref: ref,
    handleScrollToComponent: handleScrollToComponent,
  };
}

export default usePricingScroll;
