"use client";

import { useEffect, useMemo, useState } from "react";

function RollingStrengthAge() {
  const steps = [62, 58, 51, 44, 34];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 650);

    return () => clearTimeout(timer);
  }, [index, steps.length]);

  return (
    <div>
      <div className="text-xs tracking-[0.22em] text-white/35 uppercase">
        Strength Age
      </div>
      <div className="mt-2 text-7xl font-light tracking-[-0.06em] md:text-8xl">
        {steps[index]}
      </div>
      <div className="mt-3 text-[10px] font-semibold tracking-[0.28em] text-white/30 uppercase">
        {index === steps.length - 1 ? "Strength Age™" : "Calculating"}
      </div>
    </div>
  );
}

function StrengthAgeCalculator() {
  const [age, setAge] = useState(62);
  const [strength, setStrength] = useState(91);
  const [power, setPower] = useState(93);
  const [conditioning, setConditioning] = useState(88);
  const [recovery, setRecovery] = useState(79);

  const result = useMemo(() => {
    const average =
      strength * 0.35 + power * 0.25 + conditioning * 0.25 + recovery * 0.15;

    const ageReduction = Math.round(((average - 60) / 40) * 28);
    const strengthAge = Math.max(25, Math.min(90, age - ageReduction));
    const reserve = Math.round(average);

    return {
      strengthAge,
      reserve,
      average: Math.round(average),
      delta: age - strengthAge,
    };
  }, [age, strength, power, conditioning, recovery]);

  const sliders = [
    ["Chronological Age", age, setAge, 18, 85],
    ["Strength Score", strength, setStrength, 30, 100],
    ["Power Score", power, setPower, 30, 100],
    ["Conditioning Score", conditioning, setConditioning, 30, 100],
    ["Recovery Score", recovery, setRecovery, 30, 100],
  ] as const;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
      <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-6">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
          Strength Age Calculator
        </div>

        <div className="space-y-5">
          {sliders.map(([label, value, setter, min, max]) => (
            <div key={label}>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {label}
                </div>
                <div className="font-mono text-sm text-white/80">{value}</div>
              </div>

              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
                className="calculator-slider w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.4rem] border border-white/10 bg-white text-black p-6">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black/45">
          Result Preview
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-black/45">
              Body Age
            </div>
            <div className="mt-2 text-6xl font-light tracking-[-0.08em]">
              {age}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-black/45">
              Strength Age
            </div>
            <div className="mt-2 text-6xl font-light tracking-[-0.08em]">
              {result.strengthAge}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-black px-5 py-4 text-white">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            Years Reclaimed
          </div>
          <div className="mt-1 text-4xl font-light tracking-[-0.05em]">
            {result.delta > 0 ? result.delta : 0}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-black/10 p-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-black/45">
              Reserve
            </div>
            <div className="mt-1 text-3xl font-light">{result.reserve}</div>
          </div>

          <div className="rounded-xl border border-black/10 p-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-black/45">
              Capacity
            </div>
            <div className="mt-1 text-3xl font-light">{result.average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const method = [
    ["01", "Force Plate", "測量垂直力、爆發力、RFD、左右不對稱。"],
    ["02", "Grip Strength", "反映全身力量儲備與神經肌肉狀態。"],
    ["03", "Conditioning", "提升心肺、恢復、代謝與長期承受能力。"],
  ];

  const training = [
    ["Strength", "打造更強的力量基礎。"],
    ["Performance", "更快、更強、更有效。"],
    ["Longevity", "延長健康壽命，享受更好的生活。"],
    ["AI Assessment", "AI 追蹤評估，讓進步更具體。"],
  ];

  const plans = [
    ["Essential", "Independent training", ["基礎力量評估", "彈性自主訓練", "月度訓練記錄", "基礎設施使用"], "SELECT PLAN"],
    ["Unlimited", "Full access", ["無限次訓練", "高級評估", "恢復追蹤", "團體課程", "優先預約"], "START 7-DAY TRIAL"],
    ["Coached", "Structured progression", ["一對一教練指導", "個性化訓練計劃", "周期化訓練", "專業評估追蹤"], "APPLY NOW"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10 px-6 py-8 md:px-14 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_22%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,#111_0%,#030303_50%,#000_100%)]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <header className="relative z-10 flex items-center justify-between">
          <div>
            <div
              className="text-xl tracking-[0.18em] md:text-2xl"
              style={{
                fontFamily:
                  "'DIN Schablonierschrift', 'Bahnschrift', 'Arial Narrow', sans-serif",
              }}
            >
              WAREHOUSE GYM
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.32em] text-white/38">
              Strength. Performance. Longevity.
            </div>
          </div>

          <nav className="hidden gap-9 text-[10px] uppercase tracking-[0.22em] text-white/45 lg:flex">
            <a href="#training">Training</a>
            <a href="#calculator">Strength Age</a>
            <a href="#technology">Technology</a>
            <a href="#membership">Membership</a>
          </nav>

          <a
            href="#calculator"
            className="rounded-full border border-white/25 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Join Now
          </a>
        </header>

        <div className="relative z-10 flex min-h-[82vh] items-center">
          <div className="max-w-5xl">
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              The Warehouse Method
            </div>

            <h1
              className="text-[15vw] font-normal uppercase leading-[0.84] tracking-[-0.045em] md:text-[10vw] lg:text-[6.6vw]"
              style={{
                fontFamily:
                  "'DIN Schablonierschrift', 'Bahnschrift', 'Arial Narrow', sans-serif",
              }}
            >
              <span className="block">Age is real.</span>
              <span className="block">Weakness is</span>
              <span
                className="block text-transparent"
                style={{
                  WebkitTextStroke: "1.2px rgba(255,255,255,.52)",
                }}
              >
                Optional.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              We use data, science and world-class equipment to help you build
              strength, performance and longevity that last a lifetime.
              <br />
              年紀無法逆轉，但你能選擇可以支撐未來的身體。
            </p>

            <div className="mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
              {[
                ["Data Driven", "科學評估每日身體狀態，讓訓練更具邏輯。"],
                ["Built For Results", "力量、速度、恢復能力都能被追蹤。"],
                ["Longevity Focus", "從力量與肌肉量建立長期健康資本。"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/12 bg-white/[0.025] p-5"
                >
                  <div className="text-sm font-semibold">{title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEASURE TRAIN EVOLVE */}
      <section
        id="training"
        className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Strength By Design
            </div>

            <h2 className="section-heading">
              Measure.
              <br />
              Train. Evolve.
            </h2>
          </div>

          <div>
            <p className="max-w-md text-sm leading-relaxed text-white/48">
              Every program starts with assessment. We track the metrics that
              matter and build training that evolves with you.
              <br />
              每一次訓練都有方向，我們追蹤你真正該進步的能力。
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {method.map(([num, title, desc]) => (
                <div key={title}>
                  <div className="mb-5 flex items-center gap-4">
                    <div className="text-[10px] text-white/35">{num}</div>
                    <div className="h-px flex-1 bg-white/35" />
                  </div>

                  <div className="text-lg font-semibold">{title}</div>
                  <p className="mt-3 text-xs leading-relaxed text-white/45">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPACE */}
      <section className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Built For Serious Training
            </div>

            <h2 className="section-heading">
              Space To
              <br />
              Train Seriously.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/48">
            A purpose-built warehouse with everything serious lifters need to
            perform and recover.
            <br />
            專為認真訓練而設計的倉庫式空間。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="facility-card min-h-[360px] md:col-span-1 md:row-span-2">
            <div className="mt-auto">
              <div className="text-xs font-semibold uppercase">
                Warehouse Strength Floor
              </div>
              <div className="mt-1 text-xs text-white/45">倉儲式力量訓練區</div>
            </div>
          </div>

          <div className="facility-card min-h-[170px]">
            <div className="mt-auto">
              <div className="text-xs font-semibold uppercase">
                Recovery Corner
              </div>
              <div className="mt-1 text-xs text-white/45">恢復與放鬆區</div>
            </div>
          </div>

          <div className="facility-card min-h-[170px]">
            <div className="mt-auto">
              <div className="text-xs font-semibold uppercase">
                Performance Coaching
              </div>
              <div className="mt-1 text-xs text-white/45">表現提升指導</div>
            </div>
          </div>

          <div className="facility-card min-h-[170px] md:col-span-2">
            <div className="mt-auto">
              <div className="text-xs font-semibold uppercase">Community</div>
              <div className="mt-1 text-xs text-white/45">強者社群 / 共同進步</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTH AGE CALCULATOR */}
      <section
        id="calculator"
        className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Signature Product
            </div>

            <h2 className="section-heading">
              Strength Age
              <br />
              Calculator.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/50">
              Not BMI. Not bodyweight. Not just InBody. Strength Age™ turns
              strength, power, conditioning and recovery into one number people
              understand instantly.
              <br />
              你的生日年齡固定，但你的肌力年齡可以被訓練。
            </p>
          </div>

          <div>
            <StrengthAgeCalculator />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section
        id="membership"
        className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Membership
            </div>

            <h2 className="section-heading">
              Choose Your
              <br />
              Level.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/48">
            Flexible plans. Clear benefits. Choose what fits your goals.
            <br />
            從基礎自主訓練、無限使用，到個人化教練指導。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {plans.map(([name, sub, items, cta], index) => (
            <div
              key={name}
              className={`rounded-xl border p-6 ${
                index === 1
                  ? "border-white bg-white text-black"
                  : "border-white/12 bg-white/[0.02] text-white"
              }`}
            >
              {index === 1 && (
                <div className="mb-5 inline-flex rounded-full bg-black px-4 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                  Most Popular
                </div>
              )}

              <div className="text-2xl font-semibold">{name}</div>
              <div
                className={`mt-1 text-xs ${
                  index === 1 ? "text-black/55" : "text-white/45"
                }`}
              >
                {sub}
              </div>

              <div className="mt-6 space-y-3">
                {(items as string[]).map((item) => (
                  <div key={item} className="flex gap-3 text-sm">
                    <span>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 w-full rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  index === 1
                    ? "border-black text-black"
                    : "border-white/20 text-white"
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ENTER */}
      <section className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="section-heading">
            Enter The
            <br />
            Warehouse.
          </h2>

          <div>
            <p className="max-w-md text-sm leading-relaxed text-white/50">
              This is more than a gym. This is where strength is built, and
              legacy begins.
              <br />
              這不是健身房。這是力量資產建立的開始。
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#membership"
                className="rounded-full bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black"
              >
                Join Now
              </a>
              <a
                href="#calculator"
                className="rounded-full border border-white/20 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Book A Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRAIN FOR WHAT LASTS */}
      <section className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Training Philosophy
            </div>

            <h2 className="section-heading">
              Train For
              <br />
              What Lasts.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/48">
            We train attributes that protect your body, enhance performance and
            extend your edge.
            <br />
            我們訓練會真正留下來的能力。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-4">
          {training.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-white/12 bg-white/[0.02] p-6"
            >
              <div className="mb-10 h-12 w-12 rounded-full border border-white/20" />
              <div className="text-lg font-semibold">{title}</div>
              <p className="mt-3 text-xs leading-relaxed text-white/45">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DATA */}
      <section
        id="technology"
        className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
              Technology Advantage
            </div>

            <h2 className="section-heading">
              Data Meets
              <br />
              Power.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/48">
            We combine advanced testing with intelligent insights to help you
            train smarter and get stronger.
            <br />
            結合先進設備與智慧分析，讓訓練每一次都更有意義。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-white/12 bg-white/[0.02] p-7">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Hawkin Dynamics
            </div>
            <div className="mt-4 text-3xl font-semibold leading-none">
              Force Plate
              <br />
              Intelligence
            </div>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-white/45">
              捕捉峰值力量、RFD、跳躍表現與左右不對稱，讓訓練不再靠感覺。
            </p>

            <div className="mt-14 grid gap-3 md:grid-cols-4">
              {["Peak Force", "RFD", "Asymmetry", "Stability"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.14em] text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-xl border border-white/12 bg-white/[0.02] p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                VO₂ Max
              </div>
              <div className="mt-4 text-3xl font-semibold leading-none">
                Engine Capacity.
              </div>
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                評估心肺與代謝能力，提升耐力與恢復力。
              </p>
            </div>

            <div className="rounded-xl border border-white/12 bg-white/[0.02] p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Speed
              </div>
              <div className="mt-4 text-3xl font-semibold leading-none">
                Build Speed.
              </div>
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                透過速度與爆發力訓練，讓力量轉化為表現。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-[10px] uppercase tracking-[0.28em] text-white/35 md:flex-row">
          <div>
            <div
              className="text-white"
              style={{
                fontFamily:
                  "'DIN Schablonierschrift', 'Bahnschrift', 'Arial Narrow', sans-serif",
              }}
            >
              Warehouse Gym
            </div>
            <div className="mt-1">Strength. Performance. Longevity.</div>
          </div>

          <div className="flex gap-8">
            <a href="#training">Training</a>
            <a href="#membership">Membership</a>
            <a href="#technology">Technology</a>
            <a href="#calculator">Strength Age</a>
          </div>
        </div>
      </footer>

      <style>{`
        body {
          background: #000;
        }

        .section-heading {
          font-size: clamp(3rem, 6vw, 5.8rem);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 800;
          text-transform: uppercase;
        }

        .facility-card {
          display: flex;
          padding: 1.5rem;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1rem;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.015)),
            radial-gradient(circle at 70% 20%, rgba(255,255,255,0.11), transparent 30%);
          overflow: hidden;
        }

        .calculator-slider {
          appearance: none;
          height: 2px;
          background: rgba(255,255,255,0.22);
          outline: none;
        }

        .calculator-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: #fff;
          cursor: pointer;
        }

        .calculator-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: #fff;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </main>
  );
}