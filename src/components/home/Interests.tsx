import Section from "../Section";
import { interests } from "../../data/profile";

export default function Interests() {
  return (
    <Section id="interests" title="Off the clock" note="the side projects give me away">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((interest) => (
          <li key={interest.title} className="border-t-2 border-purple pt-4">
            <h3 className="mb-1.5 font-semibold">{interest.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{interest.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
