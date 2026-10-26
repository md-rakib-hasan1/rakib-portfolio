export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
  learned: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: ProjectChallenge[];
  futureImprovements: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    number: "01",
    title: "Bazar Dor",
    category: "Grocery Market Intelligence",
    tagline: "Bengali Daily Essential Grocery & Real-Time Price Platform",
    description:
      "A Bengali-focused grocery platform for exploring products, tracking daily market fluctuations, and comparing current and previous prices through a responsive interface.",
    longDescription:
      "Bazar Dor is an intuitive, bilingual market intelligence platform built specifically for consumers in Bangladesh. It tracks everyday commodities—from staple grains like Miniket and Nazir rice to fresh vegetables, fish, meat, dairy, and spices. The application empowers buyers with price transparency, dynamic percentage shifts, and categorized wet-market analytics.",
    problemStatement:
      "In wet markets (bazar) across Bangladesh, retail prices of daily essentials fluctuate rapidly due to seasonal shifts, transportation bottlenecks, and regional supply chain variations. Everyday buyers lack a reliable, centralized digital platform to check fair daily prices before visiting the market, often leading to overspending and arbitrary pricing.",
    image: "/assets/bazar-dor.png",
    gallery: ["/assets/bazar-dor.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "Lucide React"],
    features: [
      "Real-Time Price Ticker: Dynamic marquee banner highlighting today's market gainers and decliners with animated directional percentages.",
      "Essential Commodity Categorization: Fast navigation across 8 core food categories (Chal, Dal, Tel, Sobji, Mach, Mangsho, Dim-Dudh, Mosla) with Bengali typography.",
      "Price Difference Tracking: Clear comparison between today's rates and previous benchmarks per standard unit (kg, litre, dozen).",
      "User Authentication: Integrated with Better Auth for secure user registration and personalized price tracking.",
      "Mobile-First Design: Tailored for on-the-go browsing on smartphones in local market conditions.",
    ],
    liveUrl: "https://bazar-dor-phi-ebon.vercel.app/",
    githubUrl: "https://github.com/md-rakib-hasan1/Bazar-Dor",
    challenges: [
      {
        title: "Dynamic Bengali Numerals & Percentage Trend Calculations",
        description:
          "Formatting numbers with localized Bengali digits while calculating floating-point percentage increases and decreases accurately across hundreds of items.",
        solution:
          "Engineered clean formatting helpers that normalize mathematical differences into rounded percentages and convert them into Bengali number glyphs with positive/negative color tags.",
        learned:
          "Gained hands-on experience with internationalization (i18n), number formatting pipelines, and handling edge cases in client-side data parsing.",
      },
      {
        title: "Marquee Performance & Low-End Device Optimization",
        description:
          "A continuous animated ticker can quickly consume mobile GPU/CPU resources if implemented with heavy JavaScript loops.",
        solution:
          "Used hardware-accelerated CSS animations (transform: translate3d) and will-change: transform to keep animations smooth and 60fps even on entry-level Android devices.",
        learned:
          "Learned the value of CSS-first animation strategies over JavaScript interval-driven animations for high-frequency UI updates.",
      },
    ],
    futureImprovements: [
      "Crowdsourced price verification per wet market (e.g., Karwan Bazar vs Mirpur-1) with community trust ratings.",
      "Interactive 30-day historical price fluctuation graphs using lightweight canvas charting.",
      "Offline Progressive Web App (PWA) support with background sync for low-connectivity market visits.",
      "Personalized shopping list generator calculating total estimated basket cost based on current prices.",
    ],
    featured: true,
  },
  {
    slug: "fitlog",
    number: "02",
    title: "FitLog",
    category: "Workout Library & Routine Planner",
    tagline: "Dark, High-Performance Workout Companion & Routine Builder",
    description:
      "A workout library and fitness routine organizer designed to help athletes explore exercises, inspect muscle targets, and structure daily training plans.",
    longDescription:
      "FitLog is a dark-themed, gym-focused web application built to eliminate friction in workout planning. With a clean, athletic aesthetic and high-contrast typography, FitLog features 12+ foundational compound and isolation lifts spanning all major muscle groups, providing detailed timing, estimated calorie burn, and an interactive 'My Plan' builder.",
    problemStatement:
      "Gym-goers frequently experience lack of direction during training sessions, forgetting exercise variations, targeted muscle groups, or estimated set durations. Most workout apps are cluttered with aggressive paywalls, complicated social feeds, and excessive setup. FitLog solves this with an instant, distraction-free companion that lets users pick lifts, plan their session, and get to work.",
    image: "/assets/fitlog.png",
    gallery: ["/assets/fitlog.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Workout REST API", "Lucide React"],
    features: [
      "Targeted Exercise Library: Curated collection of 12+ foundational exercises spanning Chest, Back, Legs, Shoulders, Arms, and Core.",
      "Comprehensive Workout Metrics: Clear visibility into estimated duration (minutes), expected calorie burn (kcal), and rating scores.",
      "Interactive Plan Builder: Add exercises directly to your custom 'My Plan' with dynamic counter indicators in the navigation bar.",
      "Equipment & Muscle Badges: Immediate tags for required equipment (Barbell, Dumbbells, Pull-up Bar, Bodyweight) and primary/secondary muscle targets.",
      "High-Contrast Athletic Theme: Optimized dark theme with vivid neon lime highlights for easy viewing in harsh gym lighting.",
    ],
    liveUrl: "https://fit-log-delta-snowy.vercel.app/",
    githubUrl: "https://github.com/md-rakib-hasan1/fit-log",
    challenges: [
      {
        title: "Client State Synchronization Across Multiple Views",
        description:
          "Keeping the active workout plan count and saved state synchronized between individual workout cards, the header counter, and the dedicated 'My Plan' drawer.",
        solution:
          "Implemented React Context and state persistence patterns to centralize plan items and notify subscribed components whenever items are added or removed.",
        learned:
          "Mastered global state architecture in React and the nuances of avoiding unnecessary parent re-renders.",
      },
      {
        title: "Responsive Media & Layout Stability",
        description:
          "Displaying rich photography across varying card sizes without causing Cumulative Layout Shift (CLS) or visual distortion.",
        solution:
          "Applied Next.js Image optimization with defined aspect ratios and object-fit covers, backed by graceful loading skeleton placeholders.",
        learned:
          "Deepened practical understanding of Core Web Vitals, image preloading, and skeleton loading patterns.",
      },
    ],
    futureImprovements: [
      "Live set and repetition counter with built-in rest interval stopwatch and auditory cues.",
      "Weekly volume calculator analyzing sets per muscle group to prevent training imbalances.",
      "Custom exercise creation with personal notes, form tips, and personal record (PR) tracking.",
      "One-click routine export and sharing via URL parameters or PDF summary.",
    ],
    featured: false,
  },
  {
    slug: "dev-stack-builder",
    number: "03",
    title: "Dev Stack Builder",
    category: "Technology Stack Builder",
    tagline: "Interactive Developer Technology Stack Configurator & Visual Sandbox",
    description:
      "A React and TypeScript application that allows developers to explore software technologies, assemble custom tech stacks, and evaluate ecosystem compatibility.",
    longDescription:
      "Dev Stack Builder is an interactive developer tool designed to streamline technology evaluation. Whether kickstarting a personal side project or planning an enterprise architecture, developers can browse modern frontend frameworks, backend runtimes, databases, styling engines, and cloud platforms, adding and removing tools into a consolidated stack preview.",
    problemStatement:
      "Choosing the right technology stack for a new project is often tedious and fraught with compatibility doubts. Developers spend hours cross-referencing documentation, libraries, and boilerplates to determine which tools harmonize. Dev Stack Builder simplifies this exploratory phase with an interactive sandbox.",
    image: "/assets/dev-stack-builder.png",
    gallery: ["/assets/dev-stack-builder.png"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI", "Lucide React"],
    features: [
      "Categorized Technology Catalog: Explore frameworks, libraries, databases, and DevOps tools with concise role descriptions.",
      "Interactive Add/Remove Interface: Instant toggle mechanics to assemble and reorder your customized development stack.",
      "Category Counters & Summary: Live tally of selected frontend, backend, database, and styling technologies.",
      "Clean UI Ergonomics: Built with Tailwind CSS and DaisyUI components for crisp layout and accessible interactions.",
      "Lightning-Fast Execution: Powered by Vite with zero build-time friction and instant client interactivity.",
    ],
    liveUrl: "https://dev-stack-builder-rose.vercel.app/",
    githubUrl: "https://github.com/md-rakib-hasan1/dev-stack-builder",
    challenges: [
      {
        title: "State Tree Management for Multi-Category Selections",
        description:
          "Handling multi-selection states across distinct technology categories while supporting filtering, addition, removal, and duplicate prevention.",
        solution:
          "Designed a normalized state structure with TypeScript union types that encapsulates card selection states and supports clean immutable updates.",
        learned:
          "Enhanced proficiency in strict TypeScript data models, immutability best practices, and defensive coding.",
      },
      {
        title: "Tailwind and DaisyUI Component Composition",
        description:
          "Preventing CSS class conflicts between custom utility classes and DaisyUI pre-styled component abstractions.",
        solution:
          "Scoped theme definitions carefully and utilized precise Tailwind modifier classes to maintain consistent radii, focus states, and color hierarchy.",
        learned:
          "Learned effective techniques for harmonizing component libraries with tailored custom design systems.",
      },
    ],
    futureImprovements: [
      "Stack export to starter repository templates or npx terminal commands.",
      "Curated stack presets (e.g. Modern Full-Stack Next.js, MERN Stack, High-Throughput Microservices).",
      "Estimated setup complexity, learning curve index, and bundle size calculations for chosen stacks.",
      "Browser LocalStorage caching to save multiple named stacks across sessions.",
    ],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
