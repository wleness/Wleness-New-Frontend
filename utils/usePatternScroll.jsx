import { useRef } from "react";

export default function usePatternScroll() {
  const ref = useRef(null);

  const scrollToPattern = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    ref: ref,
    scrollToPattern: scrollToPattern,
  };
}
