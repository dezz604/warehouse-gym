"use client";

import { useMemo } from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const facilities = [
    { title: "Warehouse Strength Floor", desc: "自由重量訓練區", image: "/floor.jpg" },
    { title: "Machine Training Zone", desc: "固定式器械區", image: "/machine.jpg" },
    { title: "Cardio Zone [TEST]", desc: "心肺訓練區", image: "/cardio.jpg" },
    { title: "Group Class Studio", desc: "團課教室", image: "/class.jpg" },
    { title: "Yoga Studio", desc: "瑜珈教室", image: "/yoga.jpg" },
    { title: "Muay Thai Zone", desc: "泰拳區", image: "/muaythai.jpg" },
    { title: "Recovery Corner", desc: "恢復與放鬆區", image: "/recovery.jpg" },
    { title: "Performance Coaching", desc: "運動表現訓練", image: "/coaching.jpg" },
    { title: "Community", desc: "強者社群 / 共同進步", image: "/community.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white antialiased">
      {/* 設施展示區 */}
      <section className="border-b border-white/10 px-6 py-24 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold uppercase">Space To Train Seriously.</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-4">
          {facilities.map((item, index) => (
            <div
              key={item.title}
              className={`group facility-card relative flex min-h-[170px] overflow-hidden rounded-xl border border-white/10 p-6 ${
                index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[360px]" : ""
              }`}
            >
              {/* 圖片層：利用 group 類別與 group-hover 觸發變亮 */}
              {item.image && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              )}
              
              {/* 漸層遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* 卡片內容 */}
              <div className="relative z-10 mt-auto">
                <div className="text-xs font-semibold uppercase">{item.title}</div>
                <div className="mt-1 text-xs text-white/60">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 必要的自定義樣式 */}
      <style jsx global>{`
        .facility-card {
          border: 1px solid rgba(255,255,255,0.12);
        }
      `}</style>
    </main>
  );
}