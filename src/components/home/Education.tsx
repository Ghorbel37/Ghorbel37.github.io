import Section from "../Section";
import { education } from "../../data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education" note="newest first">
      <ol>
        {education.map((item) => (
          <li
            key={item.title}
            className="grid gap-1 border-b border-dashed border-line py-4 first:pt-0 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
          >
            <p className="pt-1 font-mono text-xs text-green tabular-nums">{item.when}</p>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.where}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
