import React, { useEffect, useRef } from "react";

const FuturisticCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && ringRef.current) {
        const { clientX, clientY } = e;
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        ringRef.current.animate(
          [
            { transform: `translate3d(${clientX}px, ${clientY}px, 0)` }
          ],
          { duration: 300, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[1000] w-16 h-16 rounded-full border border-cyan-400/40 backdrop-blur-sm animate-pulse"
        style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      ></div>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[1000] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"
        style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      ></div>
    </>
  );
};

export default FuturisticCursor;
