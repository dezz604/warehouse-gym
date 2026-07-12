"use client";

import { useEffect, useState } from "react";

// 內部計數動畫元件
function RollingStrengthAge() {
  const steps = [62, 58, 51, 44, 34];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [index, steps.length]);

  return (
    <div>
      <div className="text-xs tracking-wider text-white/40 uppercase font-medium">Strength Age</div>
      <div className="mt-2 text-6xl font-light tracking-tight md:text-7xl font-sans">
        {steps[index]}
      </div>
      <div className="mt-4 text-[10px] font-semibold tracking-[0.25em] text-white/30 font-mono">
        {index === steps.length - 1 ? "STRENGTH AGE™" : "CALCULATING"}
      </div>
    </div>
  );
}

// Next.js 根路由主頁面
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
    <main className="min-h-screen overflow-hidden bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen px-6 py-8 md:px-14 lg:px-20 flex flex-col justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_30%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,#0d0d0d_0%,#030303_48%,#000_100%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.9)_80%)]" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/5 pb-6">
          <div>
            {/* 🛠️ 左上角 Logo 區：維持 BankGothic Md BT */}
            <div 
              className="text-2xl tracking-[0.18em] sm:text-[28px]"
              style={{ fontFamily: "'BankGothic Md BT', 'Bank Gothic Medium', sans-serif" }}
            >
              WAREHOUSE GYM
            </div>
            <div className="mt-1.5 text-[9px] font-medium tracking-[0.4em] text-white/40 font-sans uppercase">
              Strength · Performance · Longevity
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-[10px] font-medium tracking-[0.25em] text-white/40 lg:flex">
            <a href="#strength-age" className="hover:text-white transition-colors duration-300">STRENGTH AGE</a>
            <a href="#method" className="hover:text-white transition-colors duration-300">METHOD</a>
            <a href="#dashboard" className="hover:text-white transition-colors duration-300">DASHBOARD</a>
            <a href="#vision" className="hover:text-white transition-colors duration-300">VISION</a>
          </nav>

          <a
            href="#strength-age"
            className="rounded-full bg-white px-6 py-2.5 text-[10px] font-semibold tracking-[0.15em] text-black transition-all duration-300 hover:bg-white/90 font-sans"
          >
            BOOK TEST
          </a>
        </header>

        <div className="relative z-10 grid my-auto min-h-[75vh] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] pt-8 pb-12">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-white/30">
              <span className="h-px w-8 bg-white/20" />
              TAIWAN STRENGTH & LONGEVITY LAB
            </div>

            {/* 🛠️ 正中央大標題：軍事工業風 DIN Schablonierschrift */}
            <div className="w-full flex flex-col items-start select-none">
              <h1 
                className="text-[16vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[7vw] font-normal leading-[0.85] tracking-wide uppercase"
                style={{ 
                  fontFamily: "'DIN Schablonierschrift', sans-serif" 
                }}
              >
                <div className="text-white">LIFT</div>
                <div className="text-white">HEAVY.</div>
                <div
                  style={{
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)", // 調整為 1px 與 0.4 透明度，呈現極細緻外框
                    color: "transparent",
                  }}
                >
                  STAY YOUNG.
                </div>
              </h1>
            </div>

            <p className="mt-10 max-w-md text-sm md:text-base leading-relaxed text-white/50 font-normal tracking-wide">
              Your body is aging. Your strength does not have to.
              <br />
              Warehouse Gym measures strength, performance and longevity as one unified system.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#strength-age"
                className="rounded-full bg-white px-6 py-3.5 text-center text-[11px] font-semibold tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.01] hover:bg-white/95"
              >
                DISCOVER STRENGTH AGE™
              </a>

              <a
                href="#vision"
                className="rounded-full border border-white/10 px-6 py-3.5 text-center text-[11px] font-medium tracking-[0.15em] text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                INVESTOR VISION
              </a>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-md md:p-8">
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/30 uppercase">
              Core Product
            </div>

            <div className="mt-6 rounded-[1.2rem] border border-white/5 bg-black/40 p-6">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/30 font-mono uppercase">
                STRENGTH AGE™
              </div>

              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                <div>
                  <div className="text-xs tracking-wider text-white/40 uppercase font-medium">Body Age</div>
                  <div className="mt-2 text-6xl font-light tracking-tight md:text-7xl font-sans">
                    62
                  </div>
                </div>

                <div className="text-2xl font-light text-white/20">&rarr;</div>

                <RollingStrengthAge />
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/40 tracking-wide font-normal">
                Not BMI. Not bodyweight. Not just InBody. A measurable index for how well your body is built to handle aging.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Strength", "91"],
                ["Power", "93"],
                ["Longevity", "88"],
                ["Recovery", "79"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1rem] border border-white/5 bg-black/20 p-4 transition-all duration-300 hover:bg-white/[0.01]"
                >
                  <div className="text-3xl font-light tracking-tight font-sans">
                    {value}
                  </div>
                  <div className="mt-2 text-[10px] font-medium tracking-[0.15em] text-white/30 uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* STRENGTH AGE SECTION */}
      <section
        id="strength-age"
        className="relative min-h-screen border-t border-white/5 bg-[#030303] px-6 py-24 md:px-14 lg:px-20 flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.05),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-white/30">
            <span className="h-px w-8 bg-white/20" />
            THE SIGNATURE METRIC
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] font-sans">
                THIS IS <br />
                <span className="font-normal text-white/40">NOT BMI.</span> <br />
                <span className="font-normal text-white/40">NOT INBODY.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/50 tracking-wide font-normal">
                Strength Age™ converts compound strength, rate of force development, peak power, and cellular capacity into one clean metrics.
              </p>

              <div className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
                Measure what actually matters
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/5 bg-black/50 p-6 shadow-2xl md:p-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-5">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.25em] text-white/30 uppercase">
                    AGE TRANSFORMATION
                  </div>
                  <div className="mt-1 text-xs text-white/40">
                    The single metrics that redefines progress.
                  </div>
                </div>

                <div className="rounded-full bg-white/[0.05] border border-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-white/60 uppercase">
                  CORE IP
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {ageSteps.map((age, idx) => (
                  <div key={age} className="flex items-center gap-5">
                    <div
                      className={`w-20 text-4xl font-light tracking-tight md:text-5xl font-sans ${
                        idx === ageSteps.length - 1 ? "text-white font-normal" : "text-white/15"
                      }`}
                    >
                      {age}
                    </div>

                    <div className="h-px flex-1 bg-white/5" />

                    {idx === ageSteps.length - 1 ? (
                      <div className="rounded-full bg-white px-4 py-2 text-[9px] font-semibold tracking-[0.15em] text-black uppercase font-sans shadow-md">
                        STRENGTH AGE™
                      </div>
                    ) : (
                      <div className="text-xl text-white/10">&darr;</div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-white/40 tracking-wide font-normal">
                Your chronological age is fixed. Your Strength Age™ is asset-backed and trainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD SECTION */}
      <section
        id="method"
        className="border-t border-white/5 bg-black px-6 py-24 md:px-14 lg:px-20 flex flex-col justify-center"
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-white/30">
            <span className="h-px w-8 bg-white/20" />
            THE WAREHOUSE METHOD
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] font-sans">
                MEASURE. <br />
                TRAIN. <br />
                RETEST.
              </h2>

              <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/50 tracking-wide font-normal">
                Every member enters a continuous optimization loop: precise laboratory grade assessment, purpose-built training, adaptation mapping, and systematic testing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {method.map(([num, title, desc]) => (
                <div
                  key={title}
                  className="rounded-[1.2rem] border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div>
                    <div className="text-xs font-mono font-medium text-white/20">{num}</div>
                    <div className="mt-4 text-lg font-normal tracking-wide font-sans">
                      {title}
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-white/40 font-normal tracking-wide">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section
        id="dashboard"
        className="relative border-t border-white/5 bg-[#040404] px-6 py-24 md:px-14 lg:px-20 flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.04),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] w-full">
          <div>
            <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-white/30">
              <span className="h-px w-8 bg-white/20" />
              DATA PLATFORM
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] font-sans">
              EVERY MEMBER <br />
              LEAVES WITH <br />
              <span className="font-normal text-white/30">BIOLOGICAL DATA.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/50 tracking-wide font-normal">
              This is not a traditional fitness report. This forms the base layer of a long-term medical grade strength and longevity record.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/5 bg-black/60 p-6 shadow-2xl md:p-8">
            <div className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-white/30 uppercase">
              MEMBER DASHBOARD PREVIEW
            </div>

            {dashboard.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/5 py-4 last:border-b-0"
              >
                <div className="text-sm font-medium text-white/55 tracking-wide">{label}</div>
                <div className="text-4xl font-light tracking-tight font-sans">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section
        id="vision"
        className="border-t border-white/5 bg-black px-6 py-24 md:px-14 lg:px-20 flex flex-col justify-center"
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] text-white/30">
            <span className="h-px w-8 bg-white/20" />
            INVESTOR VISION
          </div>

          <h2 className="max-w-4xl text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] font-sans">
            WE ARE NOT BUILDING <br />
            <span className="font-normal text-white/30">ANOTHER FITNESS GYM.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-xl font-light leading-snug tracking-tight text-white/70 md:text-2xl font-sans">
            We are engineering the commercial architecture and ecosystem for <span className="text-white font-normal">Strength Age™</span>.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["Strength Reserve™", "Warehouse OS", "Longevity Platform"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="text-base font-normal tracking-wide text-white/80">{item}</div>
                </div>
              )
            )}
          </div>

          <div className="mt-20 text-[9px] font-medium tracking-[0.35em] text-white/30 font-sans uppercase">
            WAREHOUSE GYM · YANGMEI · TAOYUAN · TAIWAN
          </div>
        </div>
      </section>
    </main>
  );
}