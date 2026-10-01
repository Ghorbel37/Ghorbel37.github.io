import Section from "../Section";
import { experience } from "../../data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" note="newest first">
      <ol>
        {experience.map((item) => (
          <li
            key={item.title}
            className="grid gap-2 border-b border-dashed border-line py-6 first:pt-0 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
          >
            <p className="pt-1 font-mono text-xs text-green tabular-nums">{item.when}</p>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mb-2 text-sm text-muted">{item.where}</p>
              <p className="mb-3 max-w-2xl leading-relaxed">{item.description}</p>
              <p className="font-mono text-xs text-blue">{item.tech.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
