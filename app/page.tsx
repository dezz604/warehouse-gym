"use client";

import { type ReactNode, useMemo, useState } from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

type Plan = {
  name: string;
  sub: string;
  items: string[];
  cta: string;
};

type SimpleCard = {
  title: string;
  desc: string;
  image?: string;
};

type MethodItem = {
  num: string;
  title: string;
  desc: string;
};

function SliderRow({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: ReactNode;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
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
        onChange={(event) => onChange(Number(event.target.value))}
        className="calculator-slider w-full"
      />
    </div>
  );
}

function StrengthAgeCalculator() {
  const [age, setAge] = useState(62);
  const [strength, setStrength] = useState(91);
  const [power, setPower] = useState(93);
  const [conditioning, setConditioning] = useState(88);

  const result = useMemo(() => {
    const average = strength * 0.45 + power * 0.3 + conditioning * 0.25;

    const ageReduction = Math.round(((average - 60) / 40) * 28);
    const strengthAge = Math.max(25, Math.min(90, age - ageReduction));
    const delta = Math.max(0, age - strengthAge);

    return {
      strengthAge,
      reserve: Math.round(average),
      capacity: Math.round(average),
      delta,
    };
  }, [age, strength, power, conditioning]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
      <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-7">
        <div className="mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
          Strength Age Calculator
        </div>

        <div className="space-y-6">
          <SliderRow
            label="Chronological Age"
            value={age}
            min={18}
            max={85}
            onChange={setAge}
          />

          <SliderRow
            label="Strength Score"
            value={strength}
            min={30}
            max={100}
            onChange={setStrength}
          />

          <SliderRow
            label="Power Score"
            value={power}
            min={30}
            max={100}
            onChange={setPower}
          />

          <SliderRow
            label={
              <>
                VO
                <span className="relative top-[0.05em] text-[0.86em]">
                  2
                </span>{" "}
                Max / Conditioning
              </>
            }
            value={conditioning}
            min={30}
            max={100}
            onChange={setConditioning}
          />
        </div>
      </div>

      <div className="rounded-[1.4rem] border border-white/10 bg-white p-7 text-black">
        <div className="text-sm font-black uppercase tracking-[0.22em] text-black/45">
          Result Preview
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <div>
            <div className="text-sm uppercase tracking-[0.16em] text-black/45">
              Body Age
            </div>

            <div className="mt-2 text-6xl font-light tracking-[-0.08em]">
              {age}
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.16em] text-black/45">
              Strength Age
            </div>

            <div className="mt-2 text-6xl font-light tracking-[-0.08em]">
              {result.strengthAge}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-black px-5 py-4 text-white">
          <div className="text-xs uppercase tracking-[0.22em] text-white/45">
            Years Reclaimed
          </div>

          <div className="mt-1 text-4xl font-light tracking-[-0.05em]">
            {result.delta}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-black/10 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-black/45">
              Reserve
            </div>

            <div className="mt-1 text-3xl font-light">{result.reserve}</div>
          </div>

          <div className="rounded-xl border border-black/10 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-black/45">
              Capacity
            </div>

            <div className="mt-1 text-3xl font-light">{result.capacity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const method: MethodItem[] = [
    {
      num: "01",
      title: "Force Plate",
      desc: "測量垂直力、爆發力、RFD、左右不對稱。",
    },
    {
      num: "02",
      title: "Maximal Strength 1RM",
      desc: "反映全身力量儲備與神經肌肉狀態。",
    },
    {
      num: "03",
      title: "VO2 Max",
      desc: "評估心肺、代謝與長期訓練承受能力。",
    },
  ];

  const training: SimpleCard[] = [
    { title: "Strength", desc: "打造更強的力量基礎。" },
    { title: "Performance", desc: "更快、更強、更有效率。" },
    { title: "Longevity", desc: "延長健康壽命，享受更好的生活。" },
    { title: "AI Assessment", desc: "AI 追蹤評估，讓進步更具體。" },
  ];

const facilities: SimpleCard[] = [
    { title: "Warehouse Strength Floor", desc: "自由重量訓練區", image: "/floor.jpg" },
    { title: "Machine Training Zone", desc: "固定式器械區", image: "/machine.jpg" },
    { title: "Cardio Zone", desc: "心肺訓練區", image: "/cardio.jpg" },
    { title: "Group Class Studio", desc: "團課教室", image: "/class.jpg" },
    { title: "Yoga Studio", desc: "瑜珈教室", image: "/yoga.jpg" },
    { title: "Muay Thai Zone", desc: "泰拳區", image: "/muaythai.jpg" },
    { title: "Recovery Corner", desc: "恢復與放鬆區", image: "/recovery.jpg" },
    { title: "Performance Coaching", desc: "運動表現訓練", image: "/coaching.jpg" },
    { title: "Community", desc: "強者社群 / 共同進步", image: "/community.jpg" },
  ];
  const plans: Plan[] = [
    {
      name: "Essential",
      sub: "Independent training",
      items: ["基礎力量評估", "彈性自主訓練", "月度訓練記錄", "基礎設施使用"],
      cta: "SELECT PLAN",
    },
    {
      name: "Unlimited",
      sub: "Full access",
      items: ["無限次訓練", "高級評估", "團體課程", "優先預約"],
      cta: "START 7-DAY TRIAL",
    },
    {
      name: "Coached",
      sub: "Structured progression",
      items: ["一對一教練指導", "個性化訓練計劃", "周期化訓練", "專業評估追蹤"],
      cta: "APPLY NOW",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10 px-6 py-8 md:px-14 lg:px-20">
        {/* BASE */}
        <div className="absolute inset-0 bg-[#020202]" />

        {/* RIGHT SIDE WHITE GLOW */}
        {/* RIGHT SIDE WHITE GLOW - 將透明度調低，模糊值(blur)稍微加大以柔化邊緣 */}
<div className="absolute right-[-14%] top-[-12%] h-[1050px] w-[1120px] rounded-full bg-white/[0.08] blur-[220px]" /> 
<div className="absolute right-[2%] top-[18%] h-[760px] w-[900px] rounded-full bg-white/[0.05] blur-[180px]" />
<div className="absolute right-[18%] top-[42%] h-[500px] w-[650px] rounded-full bg-white/[0.03] blur-[150px]" />

{/* CENTER TRANSITION - 進一步調低 */}
<div className="absolute left-[28%] top-[18%] h-[620px] w-[760px] rounded-full bg-white/[0.02] blur-[160px]" />
        {/* LEFT SIDE DARKNESS */}
        <div className="absolute left-0 top-0 h-full w-[58%] bg-[linear-gradient(90deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.16)_58%,transparent_100%)]" />

        {/* DIAGONAL PREMIUM LIGHT */}
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.025)_26%,transparent_55%)]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.20)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* SOFT EDGE VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,transparent_0%,rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.44)_100%)]" />

  <header className="relative z-10 flex items-center justify-between">
          {/* 將 scale-[0.8] 改為 scale-[0.95] */}
          <div className="w-max origin-top-left scale-[0.95]">
            <div
              className={`${michroma.className} text-[16px] uppercase tracking-[0.18em] md:text-[22px] md:tracking-[0.22em] lg:text-[28px]`}
            >
              WAREHOUSE GYM
            </div>
         <div className="mt-2 flex gap-4 text-[8px] uppercase tracking-[0.15em] text-white/45 md:gap-6 md:text-[10px] md:tracking-[0.2em]">
              <span>Strength.</span>
              <span>Performance.</span>
              <span>Longevity.</span>
            </div>
          </div>

          <nav className="hidden gap-9 text-[10px] uppercase tracking-[0.22em] text-white/45 lg:flex">
            <a href="#calculator" className="transition hover:text-white">
              Strength Age
            </a>
            <a href="#training" className="transition hover:text-white">
              Training
            </a>
            <a href="#technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="#membership" className="transition hover:text-white">
              Membership
            </a>
          </nav>
        </header>

        <div className="relative z-10 flex min-h-[82vh] items-center pt-20 md:pt-32 lg:pt-36">
          <div className="w-full max-w-6xl">
            <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
              Taiwan Strength & Longevity Lab
            </div>

            <h1
              className="max-w-[820px] text-[15.2vw] font-normal uppercase leading-[0.76] tracking-[-0.075em] md:text-[9.8vw] lg:text-[6.25vw]"
              style={{
                fontFamily:
                  "'DIN Schablonierschrift', 'Bahnschrift', 'Arial Narrow', sans-serif",
                transform: "scaleX(0.92)",
                transformOrigin: "left center",
              }}
            >
              <span className="block text-white tracking-normal">
                <span className="inline-block ml-[-0.10em]">L</span>
                <span className="inline-block ml-[0.10em]">I</span>
                <span className="inline-block ml-[0.04em]">F</span>
                <span className="inline-block ml-[0.06em]">T</span>
              </span>

              <span className="block ml-[-0.10em] text-white tracking-[-0.075em]">
                HEAVY
              </span>
            </h1>

            <h2
              className={`${michroma.className} mt-2 max-w-[92vw] text-[12vw] uppercase leading-[1.05] tracking-[-0.04em] text-transparent md:max-w-[980px] md:text-[5.8vw] md:tracking-[-0.02em] lg:text-[3.8vw]`}
              style={{ WebkitTextStroke: "1.1px rgba(255,255,255,.52)" }}
            >
              STAY YOUNG.
            </h2>

            <p className="mt-9 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
              Your body is aging. Your strength does not have to.
              <br />
              Warehouse Gym measures strength, performance and longevity as one unified system.
              <br />
              <span className="mt-3 block text-white/48">
                Warehouse Gym 不只是健身房。我們將重訓、運動表現、健康老化與數據科學整合成一套可追蹤、可調整、能持續進步的訓練系統。
                年齡無法逆轉，但力量可以被訓練，而且不受年齡限制。
                透過肌力、爆發力、體能與心肺數據，我們幫助你建立一副能支撐未來的身體。
              </span>
            </p>

            <div className="mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                { title: "Data Driven", desc: "科學評估每日身體狀態，讓訓練更具邏輯。" },
                { title: "Built For Results", desc: "力量、速度、心肺能力都能被追蹤。" },
                { title: "Longevity Focus", desc: "從力量、肌肉量與最大攝氧量建立長期健康資本。" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="min-h-[92px] rounded-2xl border border-white/14 bg-white/[0.025] p-6 backdrop-blur-sm"
                >
                  <div className="text-base font-semibold">{card.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{card.desc}</p>
                </div>
              ))}
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
              strength, power and conditioning into one number people understand
              instantly.
              <br />
              你的生理年齡無法改變，但你的肌力年齡可以被訓練。
            </p>
          </div>

          <StrengthAgeCalculator />
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
              {method.map((item) => (
                <div key={item.title}>
                  <div className="mb-5 flex items-center gap-4">
                    <div className="text-[10px] text-white/35">
                      {item.num}
                    </div>

                    <div className="h-px flex-1 bg-white/35" />
                  </div>

                  <div className="text-lg font-semibold">{item.title}</div>

                  <p className="mt-3 text-xs leading-relaxed text-white/45">
                    {item.desc}
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
            專為自由重量訓練而設計的空間，盡情摔槓。
          </p>
        </div>

<div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-4">
  {facilities.map((item, index) => (
    <div
      key={item.title}
      className={`group facility-card relative flex min-h-[170px] overflow-hidden rounded-xl border border-white/10 p-6 ${
        index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[360px]" : ""
      }`}
    >
      {item.image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      <div className="relative z-10 mt-auto">
        <div className="text-xs font-semibold uppercase">{item.title}</div>
        <div className="mt-1 text-xs text-white/60">{item.desc}</div>
      </div>
    </div>
  ))}
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
          {training.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/12 bg-white/[0.02] p-6"
            >
              <div className="mb-10 h-12 w-12 rounded-full border border-white/20" />

              <div className="text-lg font-semibold">{item.title}</div>

              <p className="mt-3 text-xs leading-relaxed text-white/45">
                {item.desc}
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
              捕捉力量峰值、RFD、跳躍表現與左右不對稱，讓訓練不再靠感覺。
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
                VO
                <span className="relative top-[0.05em] text-[0.86em]">
                  2
                </span>{" "}
                Max
              </div>

              <div className="mt-4 text-3xl font-semibold leading-none">
                Engine Capacity.
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/45">
                評估心肺與代謝能力，最大攝氧量 VO2 Max。
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
                Strength Test
              </a>
            </div>
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
          {plans.map((plan, index) => (
            <div
              key={plan.name}
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

              <div className="text-2xl font-semibold">{plan.name}</div>

              <div
                className={`mt-1 text-xs ${
                  index === 1 ? "text-black/55" : "text-white/45"
                }`}
              >
                {plan.sub}
              </div>

              <div className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex gap-3 text-sm">
                    <span>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`mt-8 w-full rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  index === 1
                    ? "border-black text-black"
                    : "border-white/20 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-56 border-t border-white/10 px-6 py-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="w-max origin-top-left scale-[0.8]">
              <div
                className={`${michroma.className} text-[22px] uppercase tracking-[0.22em] text-white md:text-[26px] lg:text-[30px]`}
              >
                WAREHOUSE GYM
              </div>

              <div className="mt-3 flex w-full justify-between text-[11px] uppercase tracking-[0.15em] text-white/38 md:text-[13px] md:tracking-[0.2em]">
                <span>Strength.</span>
                <span>Performance.</span>
                <span>Longevity.</span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-10 gap-y-4 text-[12px] uppercase tracking-[0.24em] text-white/50 md:justify-end">
              <a href="#calculator" className="transition hover:text-white">
                Strength Age
              </a>

              <a href="#training" className="transition hover:text-white">
                Training
              </a>

              <a href="#technology" className="transition hover:text-white">
                Technology
              </a>

              <a href="#membership" className="transition hover:text-white">
                Membership
              </a>
            </nav>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
    <div className="h-[50px] w-[75px] shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_28px_rgba(255,255,255,0.14)]">
                  <svg
                    viewBox="0 0 900 600"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="中華民國國旗"
                  >
                    <rect width="900" height="600" fill="#FE0000" />
                    <rect width="450" height="300" fill="#000095" />
                    
                    {/* 完美比例的白日與 12 道光芒 */}
                    <g transform="translate(225, 150)">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <polygon
                          key={i}
                          points="0,-112.5 14.56,-54.33 -14.56,-54.33"
                          transform={`rotate(${i * 30})`}
                          fill="#FFFFFF"
                        />
                      ))}
                      {/* 藍色間隙與白色圓心 */}
                      <circle r="75" fill="#000095" />
                      <circle r="70" fill="#FFFFFF" />
                    </g>
                  </svg>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/32">
                    Republic of China
                  </div>

                  <div className="mt-1 text-sm tracking-[0.08em] text-white/65 md:text-base">
                    中華民國・台灣・桃園市楊梅區秀才路 162 號
                  </div>
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-[0.26em] text-white/28">
                Warehouse Gym · Yangmei · Taoyuan · Taiwan
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        body {
          background: #000;
        }

        .section-heading {
          font-size: clamp(3.2rem, 5.6vw, 5.4rem);
          line-height: 0.95;
          letter-spacing: -0.045em;
          font-weight: 650;
          text-transform: uppercase;
        }
.facility-card {
          display: flex;
          padding: 1.5rem;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1rem;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)),
            radial-gradient(circle at 70% 20%, rgba(255,255,255,0.04), transparent 40%);
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
<div style={{ 
  position: 'fixed', 
  right: '20px', 
  top: '50%', 
  color: 'white', 
  opacity: 0.3, 
  fontSize: '45px',
  fontFamily: 'Michroma, sans-serif'
}}>
  COMING SOON 敬請期待
</div>
    </main>
  );
}