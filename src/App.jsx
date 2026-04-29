import React from "react";

const stats = [
  { value: "30+", label: "AI漫剧项目" },
  { value: "200+", label: "角色设定" },
  { value: "10+", label: "AI工具熟练度" },
  { value: "98%", label: "项目交付满意度" },
];

const projects = [
  {
    id: "01",
    title: "AI漫剧短剧内容生产",
    desc: "从剧本策划到视频交付，构建完整 AI 漫剧生产链路，实现稳定规模化内容输出。",
    tools: ["ChatGPT", "Midjourney", "Runway", "CapCut"],
  },
  {
    id: "02",
    title: "Midjourney角色设定系统",
    desc: "建立统一角色 Prompt 模板体系，确保跨场景角色视觉一致性与风格统一。",
    tools: ["Midjourney", "Prompt工程", "Nano Banana2"],
  },
  {
    id: "03",
    title: "Coze智能工作流系统",
    desc: "通过 Prompt + Coze 工作流实现 AI 内容生产自动化与多节点协同。",
    tools: ["Coze", "API集成", "自动化流程"],
  },
];

const workflow = [
  "剧本策划",
  "角色设定",
  "视觉Prompt",
  "分镜设计",
  "视频生成",
  "配音剪辑",
  "成片交付",
];

const skills = {
  Creative: ["角色设定", "分镜设计", "视觉表达", "内容策划"],
  AI_Tools: ["ChatGPT", "Midjourney", "即梦", "可灵", "Coze"],
  Workflow: ["Prompt工程", "工作流设计", "内容SOP", "剧本分析"],
  Production: ["视频剪辑", "剪映", "内容交付", "质量把控"],
};

export default function PortfolioV4() {
  return (
    <div className="min-h-screen bg-[#f8f8fa] text-[#111] font-sans">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex w-[120px] min-h-screen bg-black text-white flex-col justify-between px-6 py-10 fixed left-0 top-0">
          <div>
            <h1 className="text-2xl font-black tracking-tight mb-14">KX.</h1>
            <div className="space-y-6 text-sm text-white/80">
              <p>01 HOME</p>
              <p>02 PROJECTS</p>
              <p>03 WORKFLOW</p>
              <p>04 SKILLS</p>
              <p>05 CONTACT</p>
            </div>
          </div>

          <div className="text-xs text-white/50 space-y-3">
            <p>AVAILABLE</p>
            <p>求职中</p>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 lg:ml-[120px]">
          {/* Hero */}
          <section className="px-8 md:px-14 pt-16 pb-14">
            <p className="text-sm font-medium text-violet-600 mb-6">
              AIGC CONTENT CREATOR / AIGC DESIGNER
            </p>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-6">
                  KONG
                  <br />
                  XIAOYA
                </h2>

                <p className="text-xl font-medium mb-4">
                  AI内容创作者 · AI漫剧制作人 · 智能工作流设计师
                </p>

                <p className="text-neutral-600 leading-8 max-w-xl mb-8">
                  专注于AI内容创作、AI漫剧制作和智能工作流设计，
                  将创意与技术结合，探索AI在视觉叙事与内容生产中的无限可能。
                </p>

                <div className="flex gap-4 mb-12">
                  <button className="px-7 py-3 rounded-full bg-violet-600 text-white text-sm font-medium">
                    VIEW MY WORK
                  </button>
                  <button className="px-7 py-3 rounded-full border border-black/10 text-sm font-medium">
                    GET IN TOUCH
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((item) => (
                    <div key={item.label}>
                      <p className="text-4xl font-bold text-violet-600">{item.value}</p>
                      <p className="text-sm text-neutral-500 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-[28px] bg-white border border-black/5 p-4 shadow-sm">
                  <div className="aspect-[4/5] rounded-[24px] bg-gradient-to-br from-violet-100 to-white flex items-center justify-center text-center">
                    <div>
                      <p className="text-sm text-neutral-500 mb-2">Hero Visual</p>
                      <p className="text-lg font-semibold">AI人物视觉 + 科技感装置</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="px-8 md:px-14 py-12 border-t border-black/5">
            <h3 className="text-3xl font-bold mb-10">FEATURED PROJECTS</h3>

            <div className="grid lg:grid-cols-3 gap-6">
              {projects.map((item) => (
                <div key={item.id} className="bg-white rounded-[24px] p-7 border border-black/5">
                  <p className="text-sm text-violet-600 font-medium mb-6">{item.id}</p>
                  <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                  <p className="text-neutral-600 leading-7 text-sm mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-xs border border-black/5 bg-[#fafafa]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Workflow */}
          <section className="px-8 md:px-14 py-14 border-t border-black/5 bg-white">
            <h3 className="text-3xl font-bold mb-10">AI WORKFLOW PROCESS</h3>

            <div className="grid md:grid-cols-7 gap-4">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/5 p-5 text-center"
                >
                  <p className="text-xs text-neutral-400 mb-2">0{index + 1}</p>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="px-8 md:px-14 py-14 border-t border-black/5">
            <h3 className="text-3xl font-bold mb-10">SKILLS & TOOLS</h3>

            <div className="grid lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([title, list]) => (
                <div key={title} className="bg-white rounded-[24px] p-7 border border-black/5">
                  <h4 className="text-lg font-semibold mb-5">{title}</h4>
                  <div className="space-y-3">
                    {list.map((item) => (
                      <p key={item} className="text-sm text-neutral-600">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="px-8 md:px-14 py-16 border-t border-black/5">
            <div className="bg-black text-white rounded-[28px] p-10 md:p-14">
              <p className="text-sm text-white/60 mb-4">LET'S CREATE TOGETHER</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                READY TO START
                <br />
                YOUR NEXT PROJECT?
              </h3>

              <div className="space-y-4 text-lg">
                <p>邮箱：2457007921@qq.com</p>
                <p>电话：请填写你的手机号</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
