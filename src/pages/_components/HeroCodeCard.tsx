import { useRef, useState, useCallback, useEffect, type MouseEvent } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
}

const MAX_TILT = 10;

export default function HeroCodeCard({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id);
  const [codeHtml, setCodeHtml] = useState<Record<string, string>>({});
  const innerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Read pre-rendered code from <template> tags on mount
  useEffect(() => {
    const html: Record<string, string> = {};
    for (const tab of tabs) {
      const tpl = document.querySelector<HTMLTemplateElement>(
        `template[data-hero-code-tab="${tab.id}"]`
      );
      if (tpl) html[tab.id] = tpl.innerHTML;
    }
    setCodeHtml(html);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.style.transform = `perspective(1200px) rotateY(${(x * MAX_TILT).toFixed(1)}deg) rotateX(${(-y * MAX_TILT).toFixed(1)}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = "perspective(1200px) rotateY(-6deg) rotateX(2deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      className="hero-code-card"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className="rounded-2xl shadow-2xl ring-1 ring-content/10"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1200px) rotateY(-6deg) rotateX(2deg)",
          transition: "transform 0.4s ease",
          willChange: "transform",
        }}
      >
        {/* Tab bar */}
        <div className="flex items-center gap-1 rounded-t-2xl border-b border-content/10 bg-content/5 px-4 py-2">
          {/* Window dots */}
          <div className="mr-3 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              aria-selected={active === tab.id}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                active === tab.id
                  ? "bg-accent-1/15 text-accent-1"
                  : "text-content-2 hover:text-content-1"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code panels */}
        <div className="overflow-hidden rounded-b-2xl">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`hero-code-panel ${active === tab.id ? "block" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: codeHtml[tab.id] ?? "" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
