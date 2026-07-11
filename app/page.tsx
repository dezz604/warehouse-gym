"use client";

import { useEffect, useState } from "react";

function RollingStrengthAge() {
  const steps = [62, 58, 51, 44, 34];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <div className="text-sm text-white/35">Strength Age</div>
      <div className="mt-3 text-6xl font-extrabold tracking-[-0.035em] md:text-7xl">
        {steps[index]}
      </div>
      <div className="mt-4 text-[10px] font-black tracking-[0.22em] text-white/35">
        {index === steps.length - 1 ? "STRENGTH AGE™" : "CALCULATING"}
      </div>
    </div>
  );
}

export default function Home() {
  const ageSteps = [62, 58, 51, 44, 34];

  const method = [
    [
      "01",
      "MEASURE",
      "Force plate, grip strength, VO₂max, body composition, walking speed.",
    ],
    [
      "02",
      "TRAIN",
      "Strength, power, muscle, mobility and conditioning programmed with purpose.",
    ],
    [
      "03",
      "ADAPT",
      "Training changes the body. Data shows what actually improved.",
    ],
    [
      "04",
      "RETEST",
      "Every member builds a long-term record of capacity.",
    ],
  ];

  const dashboard = [
    ["Strength Age™", "34"],
    ["Strength Reserve™", "91"],
    ["Relative Strength", "96"],
    ["Grip Strength", "91"],
    ["Jump Power", "93"],
    ["Recovery", "94"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen px-6 py-8 md:px-14 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_30%,rgba(255,255,255,0.13),transparent_30%),linear-gradient(135deg,#181818_0%,#050505_48%,#000_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.84)_78%)]" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <div className="text-2xl font-black tracking-[0.24em] md:text-3xl">
              WAREHOUSE GYM
            </div>
            <div className="mt-2 text-[10px] font-bold tracking-[0.38em] text-white/42 md:text-xs">
              STRENGTH · PERFORMANCE · LONGEVITY
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-white/50 lg:flex">
            <a href="#strength-age">STRENGTH AGE</a>
            <a href="#method">METHOD</a>
            <a href="#dashboard">DASHBOARD</a>
            <a href="#vision">VISION</a>
          </nav>

          <a
            href="#strength-age"
            className="rounded-full bg-white px-5 py-3 text-[11px] font-black tracking-[0.16em] text-black"
          >
            BOOK TEST
          </a>
        </header>

        <div className="relative z-10 grid min-h-[82vh] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.32em] text-white/42">
              <span className="h-px w-12 bg-white/35" />
              TAIWAN STRENGTH & LONGEVITY LAB
            </div>

            <h1 className="hero-lift-heavy text-[16vw] leading-[0.88] md:text-[11.2vw] lg:text-[7.5vw]">
              <span className="block">LIFT</span>
              <span className="block">HEAVY.</span>
            </h1>

            <h2
              className="mt-8 text-[9.5vw] font-black leading-[1] tracking-[-0.025em] text-transparent md:text-[6.4vw] lg:text-[4vw]"
              style={{
                WebkitTextStroke: "1.8px rgba(255,255,255,.58)",
              }}
            >
              STAY
              <br />
              YOUNG.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
              Your body is aging. Your strength does not have to.
              <br />
              Warehouse Gym measures strength, performance and longevity as one system.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#strength-age"
                className="rounded-full bg-white px-7 py-4 text-center text-xs font-black tracking-[0.16em] text-black transition hover:scale-[1.03]"
              >
                DISCOVER STRENGTH AGE™
              </a>

              <a
                href="#vision"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-xs font-bold tracking-[0.16em] text-white/75 transition hover:bg-white/10"
              >
                INVESTOR VISION
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="text-[11px] font-black tracking-[0.3em] text-white/36">
              CORE PRODUCT
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/45 p-7">
              <div className="text-[11px] font-black tracking-[0.32em] text-white/35">
                STRENGTH AGE™
              </div>

              <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                <div>
                  <div className="text-sm text-white/35">Body Age</div>
                  <div className="mt-3 text-6xl font-extrabold tracking-[-0.035em] md:text-7xl">
                    62
                  </div>
                </div>

                <div className="text-4xl text-white/25">↓</div>

                <RollingStrengthAge />
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/55">
                Not BMI. Not bodyweight. Not just InBody. A measurable index for how well your body is built to age.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["Strength", "91"],
                ["Power", "93"],
                ["Longevity", "88"],
                ["Recovery", "79"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-black/35 p-5"
                >
                  <div className="text-4xl font-extrabold tracking-[-0.02em]">
                    {value}
                  </div>
                  <div className="mt-3 text-[11px] font-bold tracking-[0.22em] text-white/36">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* STRENGTH AGE */}
      <section
        id="strength-age"
        className="relative min-h-screen border-t border-white/10 bg-[#050505] px-6 py-28 md:px-14 lg:px-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.09),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.36em] text-white/38">
            <span className="h-px w-12 bg-white/35" />
            THE SIGNATURE METRIC
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="section-title text-5xl md:text-7xl lg:text-7xl">
                THIS IS
                <br />
                NOT BMI.
                <br />
                NOT INBODY.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/58 md:text-xl">
                Strength Age™ converts strength, force, power, muscle and capacity into one number people instantly understand.
              </p>

              <div className="mt-10 inline-flex rounded-full border border-white/15 px-6 py-3 text-[11px] font-black tracking-[0.22em] text-white/55">
                MEASURE WHAT ACTUALLY MATTERS
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-black/70 p-7 shadow-2xl md:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <div className="text-[11px] font-black tracking-[0.35em] text-white/35">
                    AGE TRANSFORMATION
                  </div>
                  <div className="mt-2 text-sm text-white/45">
                    The number investors will remember.
                  </div>
                </div>

                <div className="rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-[0.18em] text-black">
                  CORE IP
                </div>
              </div>

              <div className="mt-10 space-y-7">
                {ageSteps.map((age, index) => (
                  <div key={age} className="flex items-center gap-5">
                    <div
                      className={`w-28 text-6xl font-extrabold tracking-[-0.035em] md:text-7xl ${
                        index === ageSteps.length - 1
                          ? "text-white"
                          : "text-white/28"
                      }`}
                    >
                      {age}
                    </div>

                    <div className="h-px flex-1 bg-white/10" />

                    {index === ageSteps.length - 1 ? (
                      <div className="rounded-full bg-white px-5 py-3 text-[10px] font-black tracking-[0.18em] text-black">
                        STRENGTH AGE™
                      </div>
                    ) : (
                      <div className="text-3xl text-white/20">↓</div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-10 text-lg leading-relaxed text-white/55">
                Your birthday is fixed. Your Strength Age™ is trainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section
        id="method"
        className="border-t border-white/10 bg-black px-6 py-28 md:px-14 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.36em] text-white/38">
            <span className="h-px w-12 bg-white/35" />
            THE WAREHOUSE METHOD
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="section-title text-5xl md:text-7xl lg:text-7xl">
                MEASURE.
                <br />
                TRAIN.
                <br />
                RETEST.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/58 md:text-xl">
                Every member enters a feedback loop: assessment, training, adaptation, and retesting. Progress becomes visible.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {method.map(([num, title, desc]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="text-sm font-black text-white/24">{num}</div>
                  <div className="mt-8 text-xl font-black tracking-[0.06em]">
                    {title}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/48">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section
        id="dashboard"
        className="relative border-t border-white/10 bg-[#070707] px-6 py-28 md:px-14 lg:px-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.07),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.36em] text-white/38">
              <span className="h-px w-12 bg-white/35" />
              DATA PLATFORM
            </div>

            <h2 className="section-title text-5xl md:text-7xl lg:text-7xl">
              EVERY
              <br />
              MEMBER
              <br />
              LEAVES
              <br />
              WITH DATA.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/58 md:text-xl">
              This is not a normal gym report. This is the beginning of a long-term strength and longevity record.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-black/70 p-8">
            <div className="mb-6 text-[11px] font-black tracking-[0.35em] text-white/35">
              MEMBER DASHBOARD PREVIEW
            </div>

            {dashboard.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/10 py-6 last:border-b-0"
              >
                <div className="text-base font-bold text-white/55">{label}</div>
                <div className="text-5xl font-extrabold tracking-[-0.02em]">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="border-t border-white/10 bg-black px-6 py-28 md:px-14 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.36em] text-white/38">
            <span className="h-px w-12 bg-white/35" />
            INVESTOR VISION
          </div>

          <h2 className="section-title max-w-6xl text-5xl md:text-7xl lg:text-7xl">
            WE ARE NOT
            <br />
            BUILDING
            <br />
            ANOTHER GYM.
          </h2>

          <p className="mt-10 max-w-3xl text-2xl font-black leading-[1.15] tracking-[-0.015em] text-white/80 md:text-4xl">
            We are building the home of Strength Age™.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {["Strength Reserve™", "Warehouse OS", "Longevity Platform"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="text-xl font-black">{item}</div>
                </div>
              )
            )}
          </div>

          <div className="mt-20 text-[11px] font-bold tracking-[0.35em] text-white/35">
            WAREHOUSE GYM · YANGMEI · TAOYUAN · TAIWAN
          </div>
        </div>
      </section>

      <style>{`
        .hero-lift-heavy {
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-weight: 780;
          letter-spacing: -0.02em;
          transform: scaleX(1.22) scaleY(1.04);
          transform-origin: left center;
          text-transform: uppercase;
        }

        .section-title {
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: -0.025em;
        }
      `}</style>
    </main>
  );
}