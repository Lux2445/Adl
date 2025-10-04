export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  description: string;
  accent: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  sectors: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: ProjectMetric[];
  services: string[];
  gallery: ProjectGalleryItem[];
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "orbit-logistics",
    title: "Orbit Logistics",
    tagline: "Цифровая платформа для синхронизации логистических цепочек.",
    category: "SaaS",
    sectors: ["Logistics", "Analytics"],
    summary:
      "Разработали модульную SaaS-платформу, которая объединяет планирование поставок, диспетчеризацию и аналитику KPI в реальном времени.",
    challenge:
      "Клиенту требовалось объединить разрозненные системы и убрать ручные процессы в цепочке поставок, сохранив масштабируемость.",
    solution:
      "Провели discovery-спринт, спроектировали цифровую платформу на базе микросервисной архитектуры, внедрили дашборды и автоматизацию отчётности.",
    outcomes: [
      "Сократили задержки поставок на 37%",
      "Ввели сценарии прогнозирования спроса",
      "Создали дизайн-систему для внутренних модулей",
    ],
    metrics: [
      { label: "Time-to-insight", value: "↓ 4x" },
      { label: "ROI", value: "x3" },
      { label: "Active users", value: "+12k" },
    ],
    services: ["UX Research", "Design System", "Frontend", "Backend", "Data"],
    gallery: [
      {
        id: "dashboard",
        title: "Панель аналитики",
        description: "Гибкая настройка KPI и визуализация цепочек поставок.",
        accent: "from-primary/30 via-primary/10 to-background",
      },
      {
        id: "workflow",
        title: "Рабочие процессы",
        description: "Конструктор процессов и автоматизация уведомлений.",
        accent: "from-secondary/25 via-background/40 to-background",
      },
      {
        id: "mobile",
        title: "Мобильный доступ",
        description: "Приложение для водителей с офлайн-функциями.",
        accent: "from-accent/30 via-background/30 to-background",
      },
    ],
    accent: "from-primary/25 via-primary/10 to-background",
  },
  {
    slug: "pulse-banking",
    title: "Pulse Banking",
    tagline: "Мобильный банк с AI-консультантом и модульной дизайн-системой.",
    category: "FinTech",
    sectors: ["Finance", "Mobile"],
    summary:
      "Запустили новый digital-банк для поколения Z: AI-консультант, управление финансами и персонализированные предложения.",
    challenge:
      "Нужно было создать банк с простым onboarding, безопасностью и гибкой системой персонализации.",
    solution:
      "Собрали исследовательскую панель, протестировали 3 прототипа, создали дизайн-систему и реализовали приложение на React Native и Node.js.",
    outcomes: [
      "NPS 72 через три месяца после релиза",
      "Сократили onboarding до 3 минут",
      "Встроили AI-помощника для финансовых советов",
    ],
    metrics: [
      { label: "MAU", value: "+180%" },
      { label: "Session time", value: "+2.4x" },
      { label: "Support tickets", value: "↓ 35%" },
    ],
    services: ["Product Strategy", "UI/UX", "Mobile", "Backend", "QA"],
    gallery: [
      {
        id: "concept",
        title: "Визуальная концепция",
        description:
          "Гибкая сетка и неоновые акценты для молодёжной аудитории.",
        accent: "from-secondary/30 via-secondary/10 to-background",
      },
      {
        id: "ai",
        title: "AI-консультант",
        description: "Персональные рекомендации и чат на базе GPT.",
        accent: "from-primary/25 via-background/40 to-background",
      },
      {
        id: "metrics",
        title: "Дашборды",
        description: "Финансовые обзоры и управление подписками.",
        accent: "from-accent/25 via-background/30 to-background",
      },
    ],
    accent: "from-secondary/25 via-secondary/10 to-background",
  },
  {
    slug: "flow-retail",
    title: "Flow Retail",
    tagline: "Омниканальная экосистема для e-commerce и офлайн-магазинов.",
    category: "Retail",
    sectors: ["Retail", "Data"],
    summary:
      "Создали платформу для управления ассортиментом, контентом и аналитикой продаж в одном окне.",
    challenge:
      "Бренду требовалось объединить CMS, CRM и маркетинговые инструменты, чтобы ускорить запуск кампаний.",
    solution:
      "Разработали headless-архитектуру, построили компонентную библиотеку и внедрили real-time аналитику.",
    outcomes: [
      "GMV вырос в 3 раза за полгода",
      "Автоматизировали процессы мерчандайзинга",
      "Построили витрины для 5 каналов продаж",
    ],
    metrics: [
      { label: "Launch speed", value: "↓ 45%" },
      { label: "Conversion", value: "+28%" },
      { label: "Stockouts", value: "↓ 32%" },
    ],
    services: ["Discovery", "UX/UI", "Frontend", "Backend", "Analytics"],
    gallery: [
      {
        id: "catalog",
        title: "Каталог",
        description: "Витрина с персональными рекомендациями.",
        accent: "from-accent/25 via-background/40 to-background",
      },
      {
        id: "cms",
        title: "Headless CMS",
        description: "Редактор блоков и автоматизация контента.",
        accent: "from-primary/25 via-background/20 to-background",
      },
      {
        id: "analytics",
        title: "Аналитика",
        description: "Отчёты по каналам продаж и RFM-сегментация.",
        accent: "from-secondary/25 via-background/30 to-background",
      },
    ],
    accent: "from-accent/25 via-accent/10 to-background",
  },
  {
    slug: "nova-health",
    title: "Nova Health",
    tagline:
      "Digital first-клиника с телемедициной и персонализированными планами.",
    category: "HealthTech",
    sectors: ["Healthcare", "AI"],
    summary:
      "Разработали платформу, которая объединяет запись на приём, электронные карты, AI-диагностику и сопровождение пациентов.",
    challenge:
      "Нужно было создать доверие пользователей и обеспечить соответствие нормативам здравоохранения.",
    solution:
      "Создали дизайн на основе принципов calm tech, внедрили шифрование данных и интеграцию со страховыми компаниями.",
    outcomes: [
      "CSAT 4.9/5",
      "Сократили время ожидания врача до 5 минут",
      "Увеличили удержание подписчиков на 42%",
    ],
    metrics: [
      { label: "Appointments", value: "+220%" },
      { label: "Churn", value: "↓ 18%" },
      { label: "Time-to-doctor", value: "5 min" },
    ],
    services: ["Service Design", "UI/UX", "Mobile", "Backend", "Security"],
    gallery: [
      {
        id: "journey",
        title: "Patient Journey",
        description: "Личный кабинет и план лечения.",
        accent: "from-primary/20 via-background/30 to-background",
      },
      {
        id: "telemedicine",
        title: "Телемедицина",
        description: "Видео-консультации и синхронизация записей.",
        accent: "from-secondary/30 via-background/40 to-background",
      },
      {
        id: "care",
        title: "Care Hub",
        description: "Коммуникации между врачами и пациентами.",
        accent: "from-accent/30 via-background/30 to-background",
      },
    ],
    accent: "from-primary/20 via-background/30 to-background",
  },
];

export const projectFilters = [
  "Все",
  "SaaS",
  "FinTech",
  "Retail",
  "HealthTech",
];

export const filterProjects = (filter: string) => {
  if (filter === "Все") {
    return projects;
  }
  return projects.filter((project) => project.category === filter);
};

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
