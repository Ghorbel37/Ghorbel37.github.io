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
  linkedin: "https://www.linkedin.com/in/mahdighorbel",
  email: "",
};

export const about = [
  "My degrees come from two countries: a computer science bachelor's from Le Mans University in France, earned alongside one from Sfax, then a master's in data science and an engineering degree from ENIS, with a blockchain summer school run by the University of Zurich along the way. My last big project shipped AI search to a shop that sells across Europe, so code, teammates and users from different places are normal to me.",
  "Most of my side projects start because something in my own day annoyed me enough to automate it: a photo library too big for my disk, a game backlog too long to finish, plants that needed water while I was away.",
];

export const facts: [string, string][] = [
  ["Based in", "Sfax, Tunisia"],
  ["Degrees from", "Tunisia, France"],
  ["Focus", "Full-stack web, applied ML, LLM systems"],
  ["Also into", "IoT, blockchain, automation"],
  ["Languages", "Java, Python, TypeScript, Dart, Solidity, C++"],
  ["Spoken", "Arabic, English (C2), French"],
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express", "Flask"] },
  { group: "Frontend & mobile", items: ["Angular", "React", "TypeScript", "Tailwind", "Flutter"] },
  { group: "AI", items: ["TensorFlow", "Keras", "scikit-learn", "Transformers", "llama.cpp", "LLMs", "RAG · pgvector"] },
  { group: "Data & BI", items: ["Spark", "Hadoop", "HiveQL", "SSIS", "SSAS", "Power BI", "Talend"] },
  { group: "Databases & messaging", items: ["MySQL", "PostgreSQL", "RabbitMQ", "MQTT"] },
  { group: "Infra & tools", items: ["Docker", "nginx", "Git", "Firebase", "WSL"] },
  { group: "Hardware & web3", items: ["ESP32", "ESP8266", "Arduino", "Solidity", "Hardhat", "Hyperledger Caliper"] },
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
    when: "Feb – Jul 2026",
    title: "AI search, engineering final internship",
    where: "DECADE, Sfax",
    description:
      "Built AI-powered search features for a multi-country European B2B e-commerce platform: LLM agents that diagnose searches with no results, automatic product enrichment, and a guided question-by-question search for non-experts, all traced in an LLM observability back office.",
    tech: ["Python", "LLMs", "Solr", "Langfuse", "Docker"],
  },
  {
    when: "Jul – Aug 2025",
    title: "Blockchain benchmarking intern",
    where: "DESLab, Sfax",
    description: "Compared the performance of blockchains for medical records, benchmarked with Hyperledger Caliper.",
    tech: ["Hyperledger Caliper", "Blockchain"],
  },
  {
    when: "2025",
    title: "Blockchain tax control system",
    where: "Freelance",
    description: "A Web3 app that lets tax administrations monitor and manage taxes on an immutable, transparent ledger.",
    tech: ["Ethereum", "Solidity", "Hardhat"],
  },
  {
    when: "Feb – May 2025",
    title: "DentiPlus, master's final internship",
    where: "Zettaspark, Sfax · team of two",
    description:
      "A dental consultation app where an LLM drafts a diagnosis, a dentist validates it, and the validated result is recorded on Ethereum.",
    tech: ["FastAPI", "Flutter", "LLMs", "Ethereum"],
  },
  {
    when: "Feb – May 2023",
    title: "RestoQR, bachelor's final internship",
    where: "DK Soft, Sfax",
    description: "QR-code restaurant ordering with a phone menu per table and a staff back office.",
    tech: ["Spring Boot", "Angular", "MySQL", "Docker"],
  },
  {
    when: "Jul 2022",
    title: "Full-stack intern",
    where: "Spark-IT, Sfax",
    description: "Built StaffMessenger, an employee management app with a chat between colleagues over RabbitMQ.",
    tech: ["Spring Boot", "Angular", "RabbitMQ"],
  },
  {
    when: "Jun – Jul 2021",
    title: "Test automation intern",
    where: "PRIMATEC Engineering, Sfax",
    description: "Ran automatic and semi-automatic test scenarios on a CAN bus with Arduino.",
    tech: ["Arduino", "CAN bus"],
  },
];

export const education: { when: string; title: string; where: string }[] = [
  { when: "2024 – 2026", title: "Computer science engineering", where: "ENIS, National Engineering School of Sfax" },
  { when: "Jul 2025", title: "Summer school: Deep Dive into Blockchain", where: "University of Zurich, online" },
  { when: "2023 – 2025", title: "Master's in data science and data engineering", where: "FSEGS, Sfax" },
  { when: "2020 – 2023", title: "Bachelor's in computer science", where: "Le Mans University, France, double degree with a business computing bachelor's from FSEGS" },
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
