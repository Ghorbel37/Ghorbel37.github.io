import Section from "../Section";
import { stack } from "../../data/profile";

export default function Stack() {
  return (
    <Section id="stack" title="Stack" note="what I reach for">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stack.map(({ group, items }) => (
          <div key={group} className="bg-surface p-5">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">{group}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li key={item} className="rounded-md bg-raised px-2.5 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
