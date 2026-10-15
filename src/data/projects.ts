import type { ComponentType, SVGProps } from "react";
import {
  ChatBubbleLeftRightIcon,
  LinkIcon,
  QrCodeIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

export type Category = "web" | "ai" | "iot" | "web3" | "tools";

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
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI & data" },
  { id: "iot", label: "IoT" },
  { id: "web3", label: "Blockchain" },
  { id: "tools", label: "Tools" },
];

export const categoryLabel: Record<Category, string> = {
  web: "Web",
  ai: "AI & data",
  iot: "IoT",
  web3: "Blockchain",
  tools: "Tools",
};

export const projects: Project[] = [
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
    name: "RestoQR",
    icon: QrCodeIcon,
    repo: "RestoQR",
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
      "Real-time fraud detection on the ATM itself: each machine scores its transactions with a Random Forest and streams the results over MQTT to a central dashboard. One Docker Compose command runs the whole demo.",
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
    name: "Media library optimizer",
    icon: "media-library-optimizer.svg",
    repo: "media-library-optimizer",
    year: "2026",
    category: "tools",
    tags: ["tools"],
    description: "Downscales videos and recompresses photos while keeping EXIF metadata and file timestamps.",
    tech: ["Python", "ffmpeg", "exiftool"],
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
