import { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
}

export default function HeroCodeCard({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id);
  const [codeHtml, setCodeHtml] = useState<Record<string, string>>({});

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

  return (
    <div
      className="group rounded-2xl shadow-2xl ring-1 ring-content/10 transition-transform duration-500 ease-out [transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)] hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)]"
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
  );
}
