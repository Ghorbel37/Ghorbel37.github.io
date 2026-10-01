export type Category = "web" | "ai" | "iot" | "web3" | "tools";

export type Screenshot = {
  file: string;
  alt: string;
  // Only show this screenshot in one theme
  theme?: "light" | "dark";
};

export type Project = {
  name: string;
  repo: string;
  category: Category;
  tags: Category[];
  description: string;
  tech: string[];
  year?: string;
  highlight?: string;
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
    name: "Smart irrigation",
    repo: "esp8266-smart-irrigation",
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
    repo: "StaffMessenger",
    category: "web",
    tags: ["web"],
    year: "2022",
    featured: true,
    description:
      "Employee management with a built-in chat between colleagues over RabbitMQ. Built during a summer internship at Spark-It.",
    highlight: "Internship project",
    tech: ["Spring Boot", "Angular", "RabbitMQ"],
    screenshots: [{ file: "staffmessenger-chat.webp", alt: "Chat between two employees" }],
    wideScreenshots: true,
  },
  {
    name: "Brain tumor classification",
    repo: "brain-tumor-classification-cnn-xai",
    category: "ai",
    tags: ["ai"],
    description:
      "MRI tumor classification with VGG19 and ResNet50, explained with XAI so a clinician can see which regions drove each prediction.",
    highlight: "91.7% accuracy",
    tech: ["TensorFlow", "Keras", "XAI"],
  },
  {
    name: "Tunichain",
    repo: "Tunichain",
    category: "web3",
    tags: ["web3"],
    description:
      "A blockchain network connecting sellers, banks and tax authorities through smart contracts, with Sign-In with Ethereum for every party.",
    highlight: "SIWE wallet login",
    tech: ["Solidity", "Hardhat", "JavaScript"],
  },
  {
    name: "RAG vector chatbot",
    repo: "rag-vector-chatbot",
    category: "ai",
    tags: ["ai"],
    description:
      "Question answering over conversation transcripts: embeddings in PostgreSQL with pgvector, similarity search, then FLAN-T5 writes the answer.",
    tech: ["Python", "PostgreSQL", "pgvector"],
  },
  {
    name: "Fog ATM fraud detection",
    repo: "fog-atm-fraud-detection",
    category: "ai",
    tags: ["ai", "iot"],
    description:
      "Real-time card fraud detection on fog nodes at the edge, with models shipped over FTP and central monitoring over MQTT.",
    tech: ["Python", "MQTT", "Streamlit"],
  },
  {
    name: "Smart greenhouse",
    repo: "smart-greenhouse-esp32",
    category: "iot",
    tags: ["iot"],
    description:
      "Monitors temperature and humidity with a DHT22, opens ventilation with a servo and streams telemetry to ThingsBoard.",
    tech: ["ESP32", "MQTT", "ThingsBoard"],
  },
  {
    name: "Hand gesture control",
    repo: "hand-gesture-control-suite",
    category: "ai",
    tags: ["ai"],
    description: "Finger counting, mouse control and more, all hands-free through the webcam.",
    tech: ["MediaPipe", "OpenCV"],
  },
  {
    name: "Fake post detector",
    repo: "fake-social-media-posts-detector",
    category: "ai",
    tags: ["ai", "web"],
    description:
      "Flags misinformation in social media posts. Trained on scraped PolitiFact data balanced with back-translation.",
    tech: ["scikit-learn", "TF-IDF", "Flask"],
  },
  {
    name: "LLaVA vision demo",
    repo: "llava-vision-demo",
    category: "ai",
    tags: ["ai"],
    description: "Ask questions about any image with LLaVA 1.5-7B, loaded in 8-bit so it fits on a modest GPU.",
    tech: ["Transformers", "Gradio"],
  },
  {
    name: "AdventureWorks BI",
    repo: "adventureworks-bi-analytics",
    category: "ai",
    tags: ["ai"],
    description: "A full BI pipeline: ETL, OLAP cubes and Power BI dashboards for sales and inventory.",
    tech: ["SQL Server", "SSIS", "SSAS", "Power BI"],
  },
  {
    name: "Phone web shop",
    repo: "react-ecommerce-storefront",
    category: "web",
    tags: ["web"],
    description: "A storefront with search, filters, a cart and recently viewed items, against a mock API.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    name: "Research Lab Manager",
    repo: "angular-dev-web-project",
    category: "web",
    tags: ["web"],
    description: "Members, publications, events and tools of a research lab, with a charts dashboard.",
    tech: ["Angular", "Material", "Firebase"],
  },
  {
    name: "Nikon ML-3 IR remote",
    repo: "arduino-nikon-ml3-remote",
    category: "iot",
    tags: ["iot"],
    description: "Emulates Nikon's IR shutter remote from reverse-engineered timings. One button, one photo.",
    tech: ["Arduino", "IR"],
  },
  {
    name: "Backlog Breaker",
    repo: "backlog-breaker",
    category: "tools",
    tags: ["tools"],
    description: "Reads your game shortcuts and fetches HowLongToBeat times so you can pick what to play next.",
    tech: ["Python"],
  },
  {
    name: "Media library optimizer",
    repo: "media-library-optimizer",
    category: "tools",
    tags: ["tools"],
    description: "Downscales videos and recompresses photos while keeping EXIF metadata and file timestamps.",
    tech: ["Python", "ffmpeg", "exiftool"],
  },
  {
    name: "Site monitor tray",
    repo: "site-monitor-tray",
    category: "tools",
    tags: ["tools"],
    description: "A Windows tray icon that turns red and notifies you when a site goes down.",
    tech: ["Python"],
  },
  {
    name: "Terminal config",
    repo: "wsl-terminal-config",
    category: "tools",
    tags: ["tools"],
    description: "My WSL and Windows Terminal setup with fastfetch and a Tokyo Night starship prompt. This site borrows its colors.",
    tech: ["Bash", "starship", "fastfetch"],
  },
  {
    name: "Prayer times scraper",
    repo: "tunisia-prayer-times-scraper",
    category: "tools",
    tags: ["tools"],
    description: "A full year of prayer times from Tunisia's meteorological institute, exported to CSV.",
    tech: ["Python"],
  },
  {
    name: "Telegram scraper",
    repo: "telegram-scraper",
    category: "tools",
    tags: ["tools"],
    description: "Exports the messages of a Telegram channel to CSV through the Telegram API.",
    tech: ["Python", "Telethon"],
  },
];
