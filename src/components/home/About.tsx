import Section from "../Section";
import { about, facts } from "../../data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-[1.05rem] leading-relaxed">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="max-w-2xl">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="text-sm">
          {facts.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-dashed border-line py-2.5">
              <dt className="pt-0.5 font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
