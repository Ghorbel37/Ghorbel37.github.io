import type { ComponentType, SVGProps } from "react";
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  GiftIcon,
  LinkIcon,
  ShoppingBagIcon,
  SpeakerWaveIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

export type Category = "web" | "ai" | "iot" | "web3" | "games" | "tools";

export type Screenshot = {
  file: string;
  alt: string;
  // Only show this screenshot in one theme
  theme?: "light" | "dark";
};

export type Project = {
  name: string;
  // The repo's own icon in public/icons (or its URL), or a heroicon when the repo has none
  icon: string | ComponentType<SVGProps<SVGSVGElement>>;
  repo: string;
  category: Category;
  tags: Category[];
  description: string;
  tech: string[];
  year?: string;
  highlight?: string;
  // A live version people can try
  demo?: string;
  featured?: boolean;
  screenshots?: Screenshot[];
  wideScreenshots?: boolean;
  // Whether the repo is public, checked at build time: private repos get no link
  codePublic: boolean;
};

type ProjectEntry = Omit<Project, "codePublic">;

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI & data" },
  { id: "iot", label: "IoT" },
  { id: "web3", label: "Blockchain" },
  { id: "games", label: "Games" },
  { id: "tools", label: "Tools" },
];

export const categoryLabel: Record<Category, string> = {
  web: "Web",
  ai: "AI & data",
  iot: "IoT",
  web3: "Blockchain",
  games: "Games",
  tools: "Tools",
};

const allProjects: ProjectEntry[] = [
  {
    name: "DentiPlus",
    icon: ChatBubbleLeftRightIcon,
    repo: "DentiPlus",
    category: "ai",
    tags: ["ai", "web3"],
    year: "2025",
    featured: true,
    description:
      "Dental consultations with an AI assistant. Patients describe their symptoms in a chat, an LLM suggests likely conditions with a confidence score, and a dentist reviews and validates. Validated diagnoses are recorded on Ethereum.",
    highlight: "Master's final-year project",
    tech: ["FastAPI", "Flutter", "LLMs", "Ethereum"],
    screenshots: [
      { file: "dentiplus-chat.webp", alt: "Patient chatting with the AI assistant" },
      { file: "dentiplus-doctor.webp", alt: "Dentist reviewing consultations" },
    ],
  },
  {
    name: "ScanNServe",
    icon: "ScanNServe.svg",
    repo: "ScanNServe",
    category: "web",
    tags: ["web"],
    year: "2023",
    featured: true,
    description:
      "Restaurant ordering by QR code. Each table has its own code that opens its menu on the customer's phone, and staff run the menu, tables and orders from a back office.",
    highlight: "End-of-studies project",
    tech: ["Spring Boot", "Angular", "MySQL", "Docker"],
    screenshots: [{ file: "restoqr-menu.webp", alt: "Customer menu for one table on a phone" }],
  },
  {
    name: "Tunichain",
    icon: "Tunichain.svg",
    repo: "Tunichain",
    year: "2025",
    category: "web3",
    tags: ["web3", "web"],
    featured: true,
    description:
      "Invoices, VAT and payments between sellers, banks and the tax administration, recorded on Ethereum. Everyone signs in with their wallet and gets the dashboard for their role.",
    highlight: "Freelance project",
    tech: ["React", "Express", "MongoDB", "Solidity", "Hardhat"],
    screenshots: [{ file: "tunichain-invoices.webp", alt: "All invoices with their payment and TradeNet validation status" }],
    wideScreenshots: true,
  },
  {
    name: "Brain tumor classification",
    icon: ViewfinderCircleIcon,
    repo: "brain-tumor-classification-cnn-xai",
    year: "2025",
    category: "ai",
    tags: ["ai"],
    featured: true,
    description:
      "MRI tumor classification with VGG19 and ResNet50, explained with XAI so a clinician can see which regions drove each prediction.",
    highlight: "91.7% accuracy",
    tech: ["TensorFlow", "Keras", "XAI"],
    screenshots: [{ file: "brain-tumor-gradcam.webp", alt: "Grad-CAM on an MRI: the original image and the regions the model relied on" }],
    wideScreenshots: true,
  },
  {
    name: "Smart irrigation",
    icon: "smart-irrigation.svg",
    repo: "esp8266-smart-irrigation",
    year: "2025",
    category: "iot",
    tags: ["iot"],
    featured: true,
    description:
      "A WiFi irrigation controller on an ESP8266. Its phone-friendly web UI sets schedules, forces the valve on for a set time and follows your light or dark theme, like this site.",
    highlight: "Self-hosted web UI",
    tech: ["ESP8266", "C++", "Web UI"],
    screenshots: [
      { file: "irrigation-light.webp", alt: "Schedule mode in the light theme", theme: "light" },
      { file: "irrigation-dark.webp", alt: "Force on with time left, dark theme", theme: "dark" },
    ],
  },
  {
    name: "StaffMessenger",
    icon: "StaffMessenger.svg",
    repo: "StaffMessenger",
    category: "web",
    tags: ["web"],
    year: "2022",
    description:
      "Employee management with a built-in chat between colleagues over RabbitMQ. Built during a summer internship at Spark-IT.",
    highlight: "Internship project",
    tech: ["Spring Boot", "Angular", "RabbitMQ"],
    screenshots: [{ file: "staffmessenger-chat.webp", alt: "Chat between two employees" }],
    wideScreenshots: true,
  },
  {
    name: "Cross-Chain Impact Credits",
    icon: LinkIcon,
    repo: "cross-chain-impact-credits",
    category: "web3",
    tags: ["web3"],
    year: "2025",
    description:
      "Rewards open-source and community work with soulbound credits on Hedera and milestone NFTs on Cardano, linked by a three-node relayer with pBFT consensus. A group project for the DDIB course at the University of Zurich.",
    highlight: "UZH group project",
    tech: ["Hedera", "Cardano", "Plutus"],
  },
  {
    name: "Carreau",
    icon: "carreau.svg",
    repo: "carreau",
    year: "2026",
    demo: "https://ghorbel37.github.io/carreau/",
    category: "games",
    tags: ["games"],
    description:
      "A swipe puzzle that started as a notebook sketch: pieces sit in the board's corners, and every swipe reshapes them to fit the walls flying in. Three worlds, a daily challenge and achievements.",
    highlight: "Browser and Android",
    tech: ["JavaScript", "Capacitor", "Playwright"],
  },
  {
    name: "Neo Bloxorz",
    icon: "neo-bloxorz.svg",
    repo: "neo-bloxorz",
    year: "2026",
    demo: "https://ghorbel37.github.io/neo-bloxorz/",
    category: "games",
    tags: ["games"],
    description:
      "A block that changes shape every time it rolls. 36 hand-made puzzles, an endless roguelike mode and a new puzzle every day.",
    highlight: "Browser and Android",
    tech: ["JavaScript", "Capacitor"],
    screenshots: [
      { file: "neo-bloxorz-home.webp", alt: "Home screen of Neo Bloxorz" },
      { file: "neo-bloxorz-bump.webp", alt: "The block bumping into a wall to change shape" },
    ],
  },
  {
    name: "RAG vector chatbot",
    icon: "rag-vector-chatbot.svg",
    repo: "rag-vector-chatbot",
    year: "2025",
    category: "ai",
    tags: ["ai"],
    description:
      "Question answering over conversation transcripts: embeddings in PostgreSQL with pgvector, similarity search, then FLAN-T5 writes the answer.",
    tech: ["Python", "PostgreSQL", "pgvector"],
    highlight: "AI in digital health course",
  },
  {
    name: "Fog ATM fraud detection",
    icon: "fog-atm-fraud-detection.svg",
    repo: "fog-atm-fraud-detection",
    year: "2025",
    category: "ai",
    tags: ["ai", "iot"],
    description:
      "Fraud detection that runs on the ATM itself: the central server ships a Random Forest to each machine, which scores every transaction locally, emails an alert on fraud and streams its results over MQTT to a live dashboard. One Docker Compose command runs the demo.",
    tech: ["Python", "scikit-learn", "MQTT", "Streamlit", "Docker"],
    screenshots: [{ file: "fog-atm-dashboard.webp", alt: "Central dashboard listing each ATM's latest transactions, one flagged as fraud" }],
    wideScreenshots: true,
    highlight: "Fog and cloud computing course",
  },
  {
    name: "Smart greenhouse",
    icon: "smart-greenhouse-esp32.svg",
    repo: "smart-greenhouse-esp32",
    year: "2024",
    category: "iot",
    tags: ["iot"],
    description:
      "Monitors temperature and humidity with a DHT22, opens ventilation with a servo and streams telemetry to ThingsBoard.",
    tech: ["ESP32", "MQTT", "ThingsBoard"],
    highlight: "IoT course",
  },
  {
    name: "Hand gesture control",
    icon: "hand-gesture-control-suite.svg",
    repo: "hand-gesture-control-suite",
    year: "2024",
    category: "ai",
    tags: ["ai"],
    description: "Finger counting, mouse control and more, all hands-free through the webcam.",
    tech: ["MediaPipe", "OpenCV"],
    highlight: "Computer vision course",
  },
  {
    name: "Fake post detector",
    icon: "fake-social-media-posts-detector.svg",
    repo: "fake-social-media-posts-detector",
    year: "2024",
    category: "ai",
    tags: ["ai", "web"],
    description:
      "Flags misinformation in social media posts. Trained on scraped PolitiFact data balanced with back-translation.",
    tech: ["scikit-learn", "TF-IDF", "Flask"],
    highlight: "Data mining course",
  },
  {
    name: "Acoustic fire extinguisher",
    icon: SpeakerWaveIcon,
    repo: "acoustic-fire-extinguisher-ml",
    year: "2025",
    category: "ai",
    tags: ["ai"],
    description:
      "Can sound waves put out a fire? Nine models compared on 17,000 lab tests, XGBoost reaching 97.8% accuracy, plus a small desktop app to try it.",
    tech: ["scikit-learn", "XGBoost", "Tkinter"],
    highlight: "Machine learning course",
  },
  {
    name: "LLaVA vision demo",
    icon: "llava-vision-demo.svg",
    repo: "llava-vision-demo",
    year: "2025",
    category: "ai",
    tags: ["ai"],
    description: "Ask questions about any image with LLaVA 1.5-7B, loaded in 8-bit so it fits on a modest GPU.",
    tech: ["Transformers", "Gradio"],
    highlight: "Deep learning course",
  },
  {
    name: "AdventureWorks BI",
    icon: "adventureworks-bi-analytics.svg",
    repo: "adventureworks-bi-analytics",
    year: "2024",
    category: "ai",
    tags: ["ai"],
    description: "A full BI pipeline: ETL, OLAP cubes and Power BI dashboards for sales and inventory.",
    tech: ["SQL Server", "SSIS", "SSAS", "Power BI"],
    highlight: "Business intelligence course",
  },
  {
    name: "Phone web shop",
    icon: "react-ecommerce-storefront.svg",
    repo: "react-ecommerce-storefront",
    demo: "https://ghorbel37.github.io/react-ecommerce-storefront/",
    year: "2026",
    category: "web",
    tags: ["web"],
    description: "A phone shop with search, filters, a cart and recently viewed items. It runs entirely in the browser, with tests and a GitHub Pages deploy.",
    tech: ["React", "TypeScript", "Tailwind"],
    screenshots: [{ file: "storefront-home.webp", alt: "Home page of the phone shop" }],
    wideScreenshots: true,
  },
  {
    name: "Bledna",
    icon: "bledna.svg",
    repo: "bledna",
    year: "2026",
    category: "web",
    tags: ["web"],
    description:
      "Every school, hospital, post office and beach in Tunisia on one map, built from OpenStreetMap and official open data, so people can record the real state of each place.",
    tech: ["TypeScript", "Python", "OpenStreetMap"],
  },
  {
    name: "Dinari",
    icon: GiftIcon,
    repo: "dinari-store",
    year: "2026",
    category: "web",
    tags: ["web"],
    description:
      "Gaming cards and streaming subscriptions priced in dinars, in French, Arabic and English. Pay from a wallet or by card, and the code shows up the moment the order is paid.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    name: "Atelier 216",
    icon: ShoppingBagIcon,
    repo: "atelier216-store",
    year: "2026",
    category: "web",
    tags: ["web"],
    description:
      "A WooCommerce shop set up for Tunisia: prices in dinars, the 24 governorates, Tunisian phone numbers and cash on delivery, all running in Docker with demo data.",
    tech: ["WooCommerce", "WordPress", "Docker"],
  },
  {
    name: "Research Lab Manager",
    icon: "angular-dev-web-project.svg",
    repo: "angular-dev-web-project",
    year: "2025",
    category: "web",
    tags: ["web"],
    description: "Members, publications, events and tools of a research lab, with a charts dashboard.",
    tech: ["Angular", "Material", "Firebase"],
    highlight: "Web development course",
  },
  {
    name: "Nikon ML-3 IR remote",
    icon: "arduino-nikon-ml3-remote.svg",
    repo: "arduino-nikon-ml3-remote",
    year: "2025",
    category: "iot",
    tags: ["iot"],
    description: "Emulates Nikon's IR shutter remote from reverse-engineered timings. One button, one photo.",
    tech: ["Arduino", "IR"],
  },
  {
    name: "OpenCamRemote",
    icon: "OpenCamRemote.svg",
    repo: "OpenCamRemote",
    year: "2026",
    category: "iot",
    tags: ["iot"],
    description:
      "An IR camera remote and timelapse intervalometer on an ESP-01. Hold the button and your phone opens its settings page; between frames the chip sleeps, so a shoot can run for days.",
    tech: ["ESP8266", "C++", "Captive portal"],
  },
  {
    name: "CAN bus LED",
    icon: CpuChipIcon,
    repo: "arduino-can-bus-led",
    year: "2021",
    category: "iot",
    tags: ["iot"],
    description:
      "Two Arduino boards switching an LED over a CAN bus, the receiver confirming each command. Written while learning how car networks talk.",
    tech: ["Arduino", "C++", "MCP2515"],
  },
  {
    name: "Backlog Breaker",
    icon: "backlog-breaker.svg",
    repo: "backlog-breaker",
    year: "2025",
    category: "tools",
    tags: ["tools"],
    description: "Reads your game shortcuts and fetches HowLongToBeat times so you can pick what to play next.",
    tech: ["Python"],
  },
  {
    name: "LocalLeaf",
    icon: "LocalLeaf.png",
    repo: "LocalLeaf",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description:
      "Overleaf, but local, in VS Code. The PDF rebuilds on every save, a double-click jumps between the PDF and the source, and one command installs the LaTeX toolchain on Windows or Linux and creates a ready-to-fill report.",
    highlight: "Template repo",
    tech: ["LaTeX", "VS Code", "PowerShell", "Bash"],
    screenshots: [{ file: "localleaf-vscode.webp", alt: "The LaTeX source on the left and the PDF on the right, synced to the same chart" }],
    wideScreenshots: true,
  },
  {
    name: "Media Library Compressor",
    icon: "media-library-compressor.svg",
    repo: "media-library-compressor",
    demo: "https://ghorbel37.github.io/media-library-compressor/",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description: "One command, mlc, that shrinks a phone's photo and video library: GPU-encoded videos, recompressed JPEGs, EXIF data and file dates kept, originals never touched. With dry runs, tab completion and a portable build that bundles ffmpeg and exiftool.",
    tech: ["Python", "Typer", "ffmpeg", "exiftool"],
  },
  {
    name: "Site monitor tray",
    icon: "site-monitor-tray.png",
    repo: "site-monitor-tray",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description: "A Windows tray icon that watches your sites and notifies you when one goes down or comes back. Ships as a ready-to-run exe.",
    tech: ["Python"],
  },
  {
    name: "Wizzz",
    icon: "Wizzz.svg",
    repo: "Wizzz",
    year: "2024",
    category: "tools",
    tags: ["tools"],
    description:
      "Snapshots the file tree of every drive with WizTree, packs it into one archive and copies it to several places, every week on a schedule.",
    tech: ["PowerShell", "WizTree", "7-Zip"],
  },
  {
    name: "Terminal config",
    icon: "wsl-terminal-config.svg",
    repo: "wsl-terminal-config",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description: "My WSL and Windows Terminal setup with fastfetch and a Tokyo Night starship prompt. This site borrows its colors.",
    tech: ["Bash", "starship", "fastfetch"],
  },
  {
    name: "Prayer times scraper",
    icon:
      // The Prayer Times app logo from Google Play, as in the repo README
      "https://play-lh.googleusercontent.com/imB-yjAp8qNYa2-Efuk5zR2S7FEvc5vanzOzoXynWLR91DZ-piSjUzWW4nu13Cl3KVNrB-tnYmnGsMHbEndjmJw=w240-h480",
    repo: "tunisia-prayer-times-scraper",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description: "Prayer times for every Tunisian governorate, scraped from the meteorological institute and published as CSVs by a yearly workflow.",
    tech: ["Python"],
  },
  {
    name: "Telegram scraper",
    icon: "telegram-scraper.svg",
    repo: "telegram-scraper",
    year: "2025",
    category: "tools",
    tags: ["tools"],
    description: "Exports the messages of a Telegram channel to CSV through the Telegram API.",
    tech: ["Python", "Telethon"],
  },
];

// Set at build time from GitHub and from the repo's Actions variables (see the README)
declare const __PUBLIC_REPOS__: string[];
declare const __HIDDEN_PROJECTS__: string[];
declare const __HIDDEN_DEMOS__: string[];

export const projects: Project[] = allProjects
  .filter((project) => !__HIDDEN_PROJECTS__.includes(project.repo))
  .map((project) => ({
    ...project,
    codePublic: __PUBLIC_REPOS__.includes(project.repo),
    demo: __HIDDEN_DEMOS__.includes(project.repo) ? undefined : project.demo,
  }));
