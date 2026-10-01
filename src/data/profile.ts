export const profile = {
  name: "Mahdi Ghorbel",
  handle: "Ghorbel37",
  user: "mahdi",
  host: "sfax",
  role: "Full-stack & AI engineer",
  location: "Sfax, Tunisia",
  coordinates: "34.74°N 10.76°E",
  school: "ENIS, National Engineering School of Sfax",
  github: "https://github.com/Ghorbel37",
  // TODO: add LinkedIn and a contact email
  linkedin: "",
  email: "",
};

export const about = [
  "I studied engineering at ENIS, the National Engineering School of Sfax. For my final-year project I built AI-powered search features for a B2B e-commerce platform that serves several European countries.",
  "I like projects that cross layers: a Flutter app talking to an LLM that writes its validated results to Ethereum, or a fraud model that runs on fog nodes and reports back over MQTT. Most of my side projects start because something in my own day annoyed me enough to automate it.",
];

export const facts: [string, string][] = [
  ["Based in", "Sfax, Tunisia"],
  ["School", "ENIS, Sfax"],
  ["Focus", "Full-stack web, applied ML, LLM systems"],
  ["Also into", "IoT, blockchain, automation"],
  ["Languages", "Java, Python, TypeScript, Dart, Solidity, C++"],
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Flask"] },
  { group: "Frontend & mobile", items: ["Angular", "React", "TypeScript", "Tailwind", "Flutter"] },
  { group: "AI & data", items: ["TensorFlow", "Keras", "scikit-learn", "LLMs", "RAG · pgvector", "Power BI"] },
  { group: "Databases & messaging", items: ["MySQL", "PostgreSQL", "RabbitMQ", "MQTT"] },
  { group: "Infra & tools", items: ["Docker", "nginx", "Git", "Firebase", "WSL"] },
  { group: "Hardware & web3", items: ["ESP32", "ESP8266", "Arduino", "Solidity", "Hardhat"] },
];

export type Experience = {
  when: string;
  title: string;
  where: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    when: "2025 – 2026",
    title: "AI search, final-year engineering project",
    where: "ENIS · industry internship",
    description:
      "Built AI-powered search features for a multi-country European B2B e-commerce platform: LLM agents that diagnose searches with no results, mass translation of product sheets, and a guided question-by-question search for non-experts, all traced in an LLM observability back office.",
    tech: ["Python", "LLMs", "Solr", "Langfuse", "Docker"],
  },
  {
    when: "2025",
    title: "DentiPlus",
    where: "Master's final-year project · team of two",
    description:
      "A dental consultation app where an LLM drafts a diagnosis, a dentist validates it, and the validated result is recorded on Ethereum.",
    tech: ["FastAPI", "Flutter", "LLMs", "Ethereum"],
  },
  {
    when: "2023",
    title: "RestoQR",
    where: "End-of-studies project",
    description: "QR-code restaurant ordering with a phone menu per table and a staff back office.",
    tech: ["Spring Boot", "Angular", "MySQL", "Docker"],
  },
  {
    when: "Summer 2022",
    title: "Full-stack intern",
    where: "Spark-It",
    description: "Built StaffMessenger, an employee management app with a chat between colleagues over RabbitMQ.",
    tech: ["Spring Boot", "Angular", "RabbitMQ"],
  },
];

export const interests: { title: string; description: string }[] = [
  {
    title: "Photography",
    description:
      "I built an Arduino IR remote for my Nikon and a toolkit to shrink my photo and video library without losing metadata.",
  },
  {
    title: "Gaming",
    description: "My backlog got big enough that I wrote Backlog Breaker to look up how long each game takes to finish.",
  },
  {
    title: "Plants & sensors",
    description: "Smart irrigation on an ESP8266 and a greenhouse monitor on an ESP32, both controlled from a phone.",
  },
  {
    title: "A tidy terminal",
    description: "WSL, Windows Terminal, starship and fastfetch, tuned and kept in a dotfiles repo. You're looking at its colors.",
  },
];
