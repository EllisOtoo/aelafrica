declare module "@splidejs/react-splide" {
  import type { ComponentType, ReactNode } from "react";

  export interface SplideProps {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
    children?: ReactNode;
    className?: string;
    ariaLabel?: string;
  }

  export interface SplideSlideProps {
    className?: string;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

