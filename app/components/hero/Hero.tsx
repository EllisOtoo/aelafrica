"use client";

import { useEffect, useRef } from "react";

/**
 * Immersive hero with animated blueprint lines and flush-right architecture layout.
 */
const Hero = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const content = contentRef.current;
    if (!svg || !content) return undefined;

    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const timeouts: number[] = [];

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

      void path.getBoundingClientRect(); // force layout so transitions run
      const timeoutId = window.setTimeout(() => {
        path.classList.remove(direction);
        path.style.opacity = type === "line-structure" ? "0.9" : "0.7";
      }, delay);
      timeouts.push(timeoutId);
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
      const cornerY_Top = floorHeightsCorner[f];
      const cornerY_Bot = floorHeightsCorner[f] + floorH * 0.85;
      const floorDelay = 600 + f * 120;

      for (let c = 0; c < colX.length - 1; c += 1) {
        const colLeft = colX[c] + 15;
        const colRight = colX[c + 1];

        const yTL = projectY(colLeft, CORNER_X, cornerY_Top, VP_L);
        const yTR = projectY(colRight, CORNER_X, cornerY_Top, VP_L);
        const yBL = projectY(colLeft, CORNER_X, cornerY_Bot, VP_L);
        const yBR = projectY(colRight, CORNER_X, cornerY_Bot, VP_L);

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
        const inY_Top = yTL + 8;
        const inY_Bot = yBL - 8;

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
          inY_Top,
          inX,
          inY_Bot,
          "line-detail",
          "from-bottom",
          cellDelay + 250
        );
        createFlyInLine(
          colLeft,
          yTL,
          inX,
          inY_Top,
          "line-detail",
          "from-left",
          cellDelay + 300
        );
        createFlyInLine(
          colLeft,
          yBL,
          inX,
          inY_Bot,
          "line-detail",
          "from-left",
          cellDelay + 300
        );
      }

      const sTopY_1 = projectY(CORNER_X, CORNER_X, cornerY_Top, VP_R);
      const sTopY_2 = projectY(sideEdgeX, CORNER_X, cornerY_Top, VP_R);
      const sBotY_1 = projectY(CORNER_X, CORNER_X, cornerY_Bot, VP_R);
      const sBotY_2 = projectY(sideEdgeX, CORNER_X, cornerY_Bot, VP_R);

      createFlyInLine(
        CORNER_X,
        sTopY_1,
        sideEdgeX,
        sTopY_2,
        "line-detail",
        "from-right",
        floorDelay + 200
      );
      createFlyInLine(
        CORNER_X,
        sBotY_1,
        sideEdgeX,
        sBotY_2,
        "line-detail",
        "from-right",
        floorDelay + 250
      );
    }

    const roofY = floorHeightsCorner[0];
    const roofY_Upper = roofY - 25;
    const roofDelay = 2200;

    const L_leftX = colX[0];
    const L_y_hi_1 = projectY(L_leftX, CORNER_X, roofY_Upper, VP_L);
    const L_y_hi_2 = roofY_Upper;
    createFlyInLine(
      L_leftX,
      L_y_hi_1,
      CORNER_X,
      L_y_hi_2,
      "line-structure",
      "from-left",
      roofDelay
    );

    const R_rightX = sideEdgeX;
    const R_y_hi_1 = roofY_Upper;
    const R_y_hi_2 = projectY(R_rightX, CORNER_X, roofY_Upper, VP_R);
    const R_y_low_2 = projectY(R_rightX, CORNER_X, roofY, VP_R);

    createFlyInLine(
      CORNER_X,
      R_y_hi_1,
      R_rightX,
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

    const activation = window.setTimeout(() => {
      content.classList.add("active");
    }, 800);
    timeouts.push(activation);

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      content.classList.remove("active");
    };
  }, []);

  return (
    <section className="hero-shell">
      <svg
        ref={svgRef}
        id="blueprint-canvas"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      />

      <div ref={contentRef} className="hero-content">
        <h1>
          Architecture
          <br />
          <span>In Motion.</span>
        </h1>
        <p>
          Where precision engineering meets tranquil design. Building the
          future, one line at a time.
        </p>
      </div>

      <style jsx>{`
        .hero-shell {
          --bg-color: #3e1e0b;
          --bg-grad-start: #5c3012;
          --bg-grad-end: #261005;
          --line-primary: #bd7b52;
          --line-secondary: #8a563a;
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--bg-color);
          background: radial-gradient(
            circle at 40% 50%,
            var(--bg-grad-start),
            var(--bg-grad-end)
          );
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        :global(#blueprint-canvas) {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: visible;
          pointer-events: none;
        }

        :global(#blueprint-canvas path) {
          fill: none;
          stroke-linecap: square;
          vector-effect: non-scaling-stroke;
          transition: transform 2.4s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 2.4s ease-out;
          will-change: transform, opacity;
        }

        :global(.line-structure) {
          stroke: var(--line-primary);
          stroke-width: 1.5px;
          opacity: 0.9;
        }

        :global(.line-detail) {
          stroke: var(--line-secondary);
          stroke-width: 1px;
          opacity: 0.7;
        }

        :global(.from-bottom) {
          transform: translateY(1500px);
          opacity: 0;
        }

        :global(.from-left) {
          transform: translateX(-3000px);
          opacity: 0;
        }

        :global(.from-right) {
          transform: translateX(1000px);
          opacity: 0;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          margin-left: 8vw;
          max-width: 600px;
          pointer-events: none;
        }

        .hero-content h1 {
          font-size: 5rem;
          line-height: 1.1;
          font-weight: 300;
          color: #ffffff;
          margin: 0 0 25px 0;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.5s ease,
            transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-content h1 span {
          color: var(--line-primary);
          font-weight: 600;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          border-left: 2px solid var(--line-primary);
          padding-left: 24px;
          margin: 0;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.5s ease 0.2s,
            transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }

        .hero-content.active h1,
        .hero-content.active p {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          :global(#blueprint-canvas) {
            height: 80%;
            top: 10%;
            right: -10%;
          }

          .hero-content {
            margin-left: 5vw !important;
            margin-top: -20vh;
            max-width: 80% !important;
          }

          .hero-content h1 {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
