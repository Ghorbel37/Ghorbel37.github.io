import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  note?: string;
  aside?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, note, aside, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-14 sm:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          {/* Section path, like the directory in my prompt */}
          <p className="mb-2 font-mono text-xs text-muted">
            <span className="font-bold text-blue">~/{id}</span>
            {note && <span className="text-muted"> · {note}</span>}
          </p>
          <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title}
          </h2>
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}
