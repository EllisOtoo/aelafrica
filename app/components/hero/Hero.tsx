"use client";

import { useEffect, useRef } from "react";
import HeroContent from "./HeroContent";

/**
 * Full-screen hero with animated blueprint lines anchored to the right while preserving the existing copy.
 */
const Hero = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    type Timeout = ReturnType<typeof setTimeout>;
    const timers: Timeout[] = [];

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timers.push(id);
    };

    svg.innerHTML = "";

    const CANVAS_WIDTH = 1920;
    const ORIGINAL_EDGE = 1450;
    const X_SHIFT = CANVAS_WIDTH - ORIGINAL_EDGE - 2;

    const CORNER_X = 1250 + X_SHIFT;
    const sideEdgeX = 1450 + X_SHIFT;

    const VP_L = { x: -3000 + X_SHIFT, y: 1500 };
    const VP_R = { x: 5000 + X_SHIFT, y: 1300 };

    const colXBase = [600, 760, 920, 1080, 1250];
    const colX = colXBase.map((x) => x + X_SHIFT);

    const numFloors = 9;
    const startY = 150;
    const floorH = 130;
    const floorHeightsCorner: number[] = [];
    for (let i = 0; i <= numFloors; i += 1) {
      floorHeightsCorner.push(startY + i * floorH);
    }

    const projectY = (
      targetX: number,
      sourceX: number,
      sourceY: number,
      vp: { x: number; y: number }
    ) => {
      const m = (vp.y - sourceY) / (vp.x - sourceX);
      return m * (targetX - sourceX) + sourceY;
    };

    const createFlyInLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      type: "line-structure" | "line-detail",
      direction: "from-bottom" | "from-left" | "from-right",
      delay: number
    ) => {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(
        1
      )} ${y2.toFixed(1)}`;
      path.setAttribute("d", d);
      path.setAttribute("class", `${type} ${direction}`);
      svg.appendChild(path);
      void path.getBoundingClientRect();
      schedule(() => {
        path.classList.remove(direction);
        path.style.opacity = type === "line-structure" ? "0.9" : "0.7";
      }, delay);
    };

    const allVerticals = [...colX, sideEdgeX];
    allVerticals.forEach((x, i) => {
      const isSide = x > CORNER_X;
      const vp = isSide ? VP_R : VP_L;
      const topY = projectY(x, CORNER_X, floorHeightsCorner[0], vp);
      const baseDelay = 100 + i * 120;

      createFlyInLine(
        x,
        topY - 50,
        x,
        1200,
        "line-structure",
        "from-bottom",
        baseDelay
      );

      if (x < CORNER_X) {
        const thickX = x + 15;
        const thickTopY = projectY(thickX, CORNER_X, floorHeightsCorner[0], vp);
        createFlyInLine(
          thickX,
          thickTopY - 50,
          thickX,
          1200,
          "line-detail",
          "from-bottom",
          baseDelay + 50
        );
      }
    });

    for (let f = 0; f < numFloors; f += 1) {
      const cornerYTop = floorHeightsCorner[f];
      const cornerYBot = floorHeightsCorner[f] + floorH * 0.85;
      const floorDelay = 600 + f * 120;

      for (let c = 0; c < colX.length - 1; c += 1) {
        const colLeft = colX[c] + 15;
        const colRight = colX[c + 1];

        const yTL = projectY(colLeft, CORNER_X, cornerYTop, VP_L);
        const yTR = projectY(colRight, CORNER_X, cornerYTop, VP_L);
        const yBL = projectY(colLeft, CORNER_X, cornerYBot, VP_L);
        const yBR = projectY(colRight, CORNER_X, cornerYBot, VP_L);

        const cellDelay = floorDelay + c * 50;

        createFlyInLine(
          colLeft,
          yTL,
          colRight,
          yTR,
          "line-detail",
          "from-left",
          cellDelay
        );
        createFlyInLine(
          colLeft,
          yBL,
          colRight,
          yBR,
          "line-detail",
          "from-left",
          cellDelay + 50
        );

        const inX = colLeft + 12;
        const inYTop = yTL + 8;
        const inYBot = yBL - 8;

        createFlyInLine(
          colLeft,
          yTL,
          colLeft,
          yBL,
          "line-detail",
          "from-bottom",
          cellDelay + 200
        );
        createFlyInLine(
          inX,
          inYTop,
          inX,
          inYBot,
          "line-detail",
          "from-bottom",
          cellDelay + 250
        );
        createFlyInLine(
          colLeft,
          yTL,
          inX,
          inYTop,
          "line-detail",
          "from-left",
          cellDelay + 300
        );
        createFlyInLine(
          colLeft,
          yBL,
          inX,
          inYBot,
          "line-detail",
          "from-left",
          cellDelay + 300
        );
      }

      const sTopY1 = projectY(CORNER_X, CORNER_X, cornerYTop, VP_R);
      const sTopY2 = projectY(sideEdgeX, CORNER_X, cornerYTop, VP_R);
      const sBotY1 = projectY(CORNER_X, CORNER_X, cornerYBot, VP_R);
      const sBotY2 = projectY(sideEdgeX, CORNER_X, cornerYBot, VP_R);

      createFlyInLine(
        CORNER_X,
        sTopY1,
        sideEdgeX,
        sTopY2,
        "line-detail",
        "from-right",
        floorDelay + 200
      );
      createFlyInLine(
        CORNER_X,
        sBotY1,
        sideEdgeX,
        sBotY2,
        "line-detail",
        "from-right",
        floorDelay + 250
      );
    }

    const roofY = floorHeightsCorner[0];
    const roofYUpper = roofY - 25;
    const roofDelay = 2200;

    const LLeftX = colX[0];
    const L_y_hi_1 = projectY(LLeftX, CORNER_X, roofYUpper, VP_L);
    const L_y_hi_2 = roofYUpper;
    createFlyInLine(
      LLeftX,
      L_y_hi_1,
      CORNER_X,
      L_y_hi_2,
      "line-structure",
      "from-left",
      roofDelay
    );

    const RRightX = sideEdgeX;
    const R_y_hi_1 = roofYUpper;
    const R_y_hi_2 = projectY(RRightX, CORNER_X, roofYUpper, VP_R);
    const R_y_low_2 = projectY(RRightX, CORNER_X, roofY, VP_R);

    createFlyInLine(
      CORNER_X,
      R_y_hi_1,
      RRightX,
      R_y_hi_2,
      "line-structure",
      "from-right",
      roofDelay + 100
    );
    createFlyInLine(
      sideEdgeX,
      R_y_hi_2,
      sideEdgeX,
      R_y_low_2,
      "line-structure",
      "from-bottom",
      roofDelay + 200
    );

    return () => {
      timers.forEach(clearTimeout);
      svg.innerHTML = "";
    };
  }, []);

  return (
    <section className="hero-shell relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#3e1e0b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,#5c3012,#261005)]" />
      <svg
        ref={svgRef}
        className="blueprint-canvas"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl px-6 py-16 sm:px-8 md:px-10 lg:px-16">
        <div className="relative z-10 mt-14 max-w-3xl md:mt-0 md:max-w-4xl">
          <HeroContent />
        </div>
      </div>
      <style jsx global>{`
        .blueprint-canvas {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: visible;
          pointer-events: none;
        }

        .blueprint-canvas path {
          fill: none;
          stroke-linecap: square;
          vector-effect: non-scaling-stroke;
          transition: transform 2.4s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 2.4s ease-out;
          will-change: transform, opacity;
        }

        .line-structure {
          stroke: #bd7b52;
          stroke-width: 1.5px;
          opacity: 0.9;
        }

        .line-detail {
          stroke: #8a563a;
          stroke-width: 1px;
          opacity: 0.7;
        }

        .from-bottom {
          transform: translateY(1500px);
          opacity: 0;
        }

        .from-left {
          transform: translateX(-3000px);
          opacity: 0;
        }

        .from-right {
          transform: translateX(1000px);
          opacity: 0;
        }

        @media (max-width: 768px) {
          .blueprint-canvas {
            height: 80%;
            top: 10%;
            bottom: auto;
            right: -10%;
          }

          .hero-shell {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
