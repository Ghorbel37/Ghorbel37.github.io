import { profile } from "../../data/profile";
import { projects } from "../../data/projects";

// Laid out like my fastfetch config: a rounded box with grouped modules
const groups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Developer Information",
    rows: [
      ["Role", profile.role],
      ["School", "ENIS, Sfax"],
      ["Location", `${profile.location} · ${profile.coordinates}`],
      ["Projects", `${projects.length} on GitHub`],
    ],
  },
  {
    title: "Stack",
    rows: [
      ["Backend", "Spring Boot, FastAPI, Node.js"],
      ["Frontend", "Angular, React, Flutter"],
      ["AI", "TensorFlow, LLMs, RAG"],
      ["Hardware", "ESP32, Arduino"],
    ],
  },
];

const swatches = ["bg-red", "bg-orange", "bg-green", "bg-blue", "bg-purple", "bg-fg"];

const logo = [
  "  ███╗   ███╗",
  "  ████╗ ████║",
  "  ██╔████╔██║",
  "  ██║╚██╔╝██║",
  "  ██║ ╚═╝ ██║",
  "  ╚═╝     ╚═╝",
];

export default function Fastfetch() {
  return (
    <div className="mt-3 flex gap-6">
      {/* Logo */}
      <pre aria-hidden="true" className="hidden pt-6 leading-tight text-blue sm:block">
        {logo.join("\n")}
      </pre>

      {/* Modules */}
      <div className="min-w-0 flex-1">
        <p className="whitespace-nowrap">
          <span className="text-muted">╭──── </span>
          <span className="font-bold text-green">{profile.user}</span>
          <span>@</span>
          <span className="font-bold text-blue">{profile.host}</span>
        </p>
        {groups.map((group) => (
          <div key={group.title}>
            <p>
              <span className="text-muted">│ </span>
              <span className="font-bold">{group.title}</span>
            </p>
            {group.rows.map(([key, value]) => (
              <p key={key} className="flex">
                <span className="shrink-0 text-muted">│ </span>
                <span className="w-20 shrink-0 pl-2 text-purple">{key}</span>
                <span className="min-w-0">{value}</span>
              </p>
            ))}
            <p className="text-muted">│</p>
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-muted">│ </span>
          {swatches.map((swatch) => (
            <span key={swatch} className={`h-3 w-3 rounded-full ${swatch}`} />
          ))}
        </p>
        <p className="text-muted">╰────</p>
      </div>
    </div>
  );
}
