import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { profile } from "../../data/profile";

export default function Contact() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ].filter((link) => link.href);

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-14 sm:py-16">
      <div className="grid items-center gap-8 rounded-2xl bg-blue p-7 text-bg sm:p-10 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="mb-2 font-mono text-xs font-bold opacity-80">~/contact</p>
          <h2 id="contact-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's build something
          </h2>
          <p className="mt-3 max-w-lg opacity-90">
            I'm open to full-stack and AI engineering work. The fastest way to reach me is through GitHub.
          </p>
          {profile.email && <p className="mt-3 font-mono text-sm select-all">{profile.email}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full bg-bg px-5 py-2.5 font-mono text-sm text-fg transition-transform hover:-translate-y-0.5"
            >
              {link.label} <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
