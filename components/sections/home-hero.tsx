"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0, 0, 1], delay },
});

export function HomeHeroSection({
  description,
  profilePhoto,
  heroVideoId,
}: {
  description: string;
  profilePhoto: string | null;
  heroVideoId: string | null;
}) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-[68px] overflow-hidden">
      {/* Gradient veil — stops navbar text clashing with hero display text */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-bg-primary via-bg-primary/60 to-transparent pointer-events-none z-10" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10 lg:gap-14 items-stretch">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <motion.p
              {...fadeUp(0.15)}
              className="text-[11px] font-body font-600 text-accent-gold uppercase tracking-[0.28em] mb-6"
            >
              Choreographer &amp; Artistic Director
            </motion.p>

            {/* Photo alongside Glenn Hudson heading */}
            <div className="flex items-stretch gap-5 md:gap-7">
              {profilePhoto && (
                <motion.div
                  {...fadeUp(0.2)}
                  className="flex-shrink-0 overflow-hidden border border-border-subtle"
                  style={{ width: "clamp(90px, 12vw, 160px)" }}
                >
                  <img
                    src={profilePhoto}
                    alt="Glenn Hudson"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              )}

              <div>
                <motion.h1
                  {...fadeUp(0.3)}
                  className="font-display font-600 text-text-primary leading-[0.88] select-none"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 11rem)", letterSpacing: "-0.03em" }}
                >
                  Glenn
                </motion.h1>
                <motion.h1
                  {...fadeUp(0.46)}
                  className="font-display font-600 text-text-muted leading-[0.88] select-none"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 11rem)", letterSpacing: "-0.03em" }}
                >
                  Hudson
                </motion.h1>
              </div>
            </div>

            <motion.div {...fadeUp(0.65)} className="mt-12 max-w-sm">
              <p className="text-[15px] font-body text-text-secondary leading-relaxed mb-10">
                {description}
              </p>
              <div className="flex items-center gap-10">
                <Link
                  href="/work"
                  className="group flex items-center gap-3 text-[11px] font-body font-600 uppercase tracking-[0.22em] text-text-primary hover:text-accent-gold transition-colors duration-300"
                >
                  View Work
                  <span className="block h-px bg-current w-6 group-hover:w-10 transition-all duration-500 ease-out" />
                </Link>
                <Link
                  href="/contact"
                  className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold hover:opacity-60 transition-opacity duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — background video */}
          <motion.div
            {...fadeUp(0.5)}
            className="hidden md:flex md:self-stretch"
          >
            <motion.div
              className="w-full h-full min-h-[420px] bg-bg-tertiary border border-border-subtle overflow-hidden relative"
              initial={{ clipPath: "inset(12% 38% 12% 38%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 2.2, ease: [0.25, 0, 0, 1], delay: 1.0 }}
            >
              {/* Background video layer */}
              {heroVideoId && (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&playsinline=1&rel=0&enablejsapi=0`}
                    className="absolute pointer-events-none"
                    style={{
                      width: "133%",
                      height: "133%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      border: "none",
                    }}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    title="Background video"
                  />
                  {/* Block iframe interaction */}
                  <div className="absolute inset-0 z-10" />
                </>
              )}

              {/* Silhouette placeholder when no video is set */}
              {!heroVideoId && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    className="text-border-low"
                  >
                    <circle cx="30" cy="22" r="12" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6 54c0-13.255 10.745-24 24-24s24 10.745 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="text-[10px] font-body uppercase tracking-[0.22em] text-text-light">
                    Video
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom metadata strip */}
      <motion.div
        {...fadeUp(0.85)}
        className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-10"
      >
        <div className="w-full h-px bg-border-subtle mb-7" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light">
            London, UK
          </span>
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light hidden sm:block">
            Stage &middot; Screen &middot; Direction
          </span>
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light">
            Est. 2010
          </span>
        </div>
      </motion.div>
    </section>
  );
}
