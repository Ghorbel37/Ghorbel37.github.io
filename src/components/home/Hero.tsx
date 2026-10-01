import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Terminal from "../terminal/Terminal";
import { profile } from "../../data/profile";
import type { Theme } from "../../hooks/useTheme";

export default function Hero({ onSetTheme }: { onSetTheme: (theme: Theme) => void }) {
  return (
    <div id="top" className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <div className="animate-rise">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted">
          {profile.role} · <span className="text-green">{profile.location}</span>
        </p>
        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl">
          Mahdi
          <br />
          <span className="text-blue">Ghorbel</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I build <strong className="font-semibold text-fg">web applications</strong> with Spring Boot, Angular and React, and I
          work on <strong className="font-semibold text-fg">machine learning, RAG and explainable AI</strong>. On the side I wire
          up ESP32 boards and write smart contracts.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            See projects <ArrowDownIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 transition-colors hover:border-blue"
          >
            github.com/{profile.handle} <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="min-w-0 animate-rise [animation-delay:150ms]">
        <Terminal onSetTheme={onSetTheme} />
        <p className="mt-3 text-center font-mono text-xs text-muted">
          It's a real prompt. Type <span className="text-green">help</span>.
        </p>
      </div>
    </div>
  );
}
