export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  accent: string;
  image: string;
  github?: string;
  live?: { label: string; href: string }[];
  screenshots?: { src: string; alt: string; caption: string; mobile?: boolean }[];
  problem?: string;
  approach?: string;
  result?: string;
  decisions?: string[];
};

export const projects: Project[] = [
  {
    slug: "uzhamyon",
    number: "01",
    title: "UzHamyon",
    category: "Product / AI / Telegram",
    description:
      "An AI expense tracker inside Telegram. Type or say “Taksiga 25 ming, tushlikka 40 ming berdim” — the bot finds the amounts, sorts them into categories, and saves them once you confirm.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Telegram Bot API",
      "Tailwind",
    ],
    featured: true,
    accent: "#1b5e20",
    image: "/projects/uzhamyon-styled.png",
    github: "https://github.com/eldor-firdavsov/UzHamyon",
    live: [
      { label: "Landing page", href: "https://uzhamyon-landing.vercel.app/" },
      { label: "Open the bot", href: "https://t.me/uz_hamyonbot" },
    ],
    screenshots: [
      { src: "/projects/uzhamyon-landing.png", alt: "UzHamyon landing page", caption: "Landing page" },
      { src: "/projects/uzhamyon-app.png", alt: "UzHamyon Mini App dashboard", caption: "Mini App dashboard" },
      { src: "/projects/uzhamyon-app-mobile.png", alt: "UzHamyon Mini App on mobile", caption: "Mini App · mobile", mobile: true },
      { src: "/projects/uzhamyon-landing-mobile.png", alt: "UzHamyon landing page on mobile", caption: "Landing · mobile", mobile: true },
    ],
    problem:
      "Expense apps ask for too much: open the app, pick a category, type the amount. Most people give up after a week.",
    approach:
      "Moved tracking into a chat people already use. Gemini AI reads plain Uzbek text or voice messages, extracts every amount, suggests categories, and asks for a one-tap confirmation. A Telegram Mini App shows the balance, cash-flow charts and insights.",
    result:
      "Logging an expense takes one message. No app to install, no forms — free in Telegram as @uz_hamyonbot.",
    decisions: [
      "Text and voice input — several expenses in one message",
      "Confirm-before-save so the AI never writes data on its own",
      "Telegram Mini App for balance, charts and history",
    ],
  },
  {
    slug: "hometask",
    number: "02",
    title: "HomeTask",
    category: "Education / AI / Platform",
    description:
      "A homework and IELTS platform for teachers and students — task library, assignments, reviews, and a computer-delivered IELTS Reading exam with AI band scoring.",
    technologies: ["React", "Vite", "Supabase", "Gemini AI", "Tailwind"],
    accent: "#1d4a35",
    image: "/projects/hometask-styled.png",
    github: "https://github.com/eldor-firdavsov/HomeTask",
    live: [{ label: "Live demo", href: "https://home-task-virid.vercel.app/" }],
    screenshots: [
      { src: "/projects/hometask-teacher-dashboard.png", alt: "HomeTask teacher dashboard", caption: "Teacher dashboard" },
      { src: "/projects/hometask-reading-exam.png", alt: "IELTS computer-delivered reading exam", caption: "IELTS CD reading exam with live timer" },
      { src: "/projects/hometask-student-dashboard.png", alt: "HomeTask student dashboard", caption: "Student dashboard" },
      { src: "/projects/hometask-reading-tests.png", alt: "IELTS reading tests and AI band scores", caption: "AI-graded IELTS reading tests" },
    ],
    problem:
      "Teachers juggle homework in chats and spreadsheets, and IELTS practice tests are graded by hand.",
    approach:
      "Built separate teacher and student portals on Supabase with realtime updates. Teachers paste a reading test, Gemini AI extracts the passages and 40 questions, and students sit a timed computer-delivered exam in strict mode.",
    result:
      "Assigning, submitting and reviewing happen in one place, and IELTS reading results come back instantly with an official band score.",
    decisions: [
      "Reusable task library with one-click assign",
      "Strict exam mode — fullscreen and tab-switch detection",
      "Automatic grading with the official IELTS band table",
    ],
  },
  {
    slug: "navbatgo",
    number: "03",
    title: "NavbatGo",
    category: "Product / Frontend / Realtime",
    description:
      "A real-time barber booking and queue-management product — discovery, live queues, working hours, and shop status in one modern dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Realtime",
      "PostgreSQL",
    ],
    featured: true,
    accent: "#111111",
    image: "/projects/navbatgo-styled.png",
    github: "https://github.com/eldor-firdavsov/BarberUp",
    problem:
      "Barbershops still run queues on paper or WhatsApp. Clients wait without visibility; shops struggle to coordinate chairs and hours.",
    approach:
      "Built a responsive booking product around live queue state: barber discovery, open/closed status, working hours, ratings, pricing, and realtime updates.",
    result:
      "A production-ready booking surface that treats queue management as a product — not a brochure site.",
    decisions: [
      "Realtime-first state for queue positions and shop status",
      "Mobile-first client flows for walk-in and booked guests",
      "Clear open/closed and hours model per location",
    ],
  },
  {
    slug: "ramadan-app",
    number: "04",
    title: "Ramadan App",
    category: "Product / Mobile / Telegram",
    description:
      "A Ramadan companion mini-app for duas, tasbeh, taqweem, and reminders for suhoor, maghrib, and daily prayers.",
    technologies: ["React", "TypeScript", "Telegram Mini App", "Tailwind"],
    accent: "#0f3d2e",
    image: "/projects/ramadan-styled.png",
    github: "https://github.com/eldor-firdavsov/Ramadan-App",
    problem:
      "During Ramadan, people need prayer times, duas, and gentle reminders in one calm place — not scattered notes and chats.",
    approach:
      "Designed a mobile-first Telegram mini-app with status, duas, tasbeh, taqweem, and suhoor / maghrib reminders.",
    result:
      "A focused companion for the month — readable Arabic, clear times, and daily progress.",
  },
  {
    slug: "react-33-days",
    number: "05",
    title: "33 Days of React",
    category: "Education / Learning",
    description:
      "A 33-day challenge built to learn React fully — daily exercises, components, hooks, and real UI practice.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    accent: "#1d4ed8",
    image: "/projects/react33-styled.png",
    github: "https://github.com/eldor-firdavsov/33-days-react-challenge",
    problem:
      "Scattered tutorials don't build muscle memory. React needs deliberate, daily practice.",
    approach:
      "Structured a day-by-day challenge covering foundations through hooks and composition — built to learn React fully.",
    result:
      "A personal curriculum and public repo that documents the path from first component to confident UI work.",
  },
  {
    slug: "localuz",
    number: "06",
    title: "LocalUz",
    category: "Product / Social / Travel",
    description:
      "A platform for tourists and locals to find travel partners and join masterclasses across Uzbekistan.",
    technologies: ["React", "TypeScript", "Tailwind"],
    accent: "#1f4d3a",
    image: "/projects/localuz-styled.png",
    github: "https://github.com/eldor-firdavsov/LocalUz",
    problem:
      "Travelers want real people and local experiences — not only hotels and tours.",
    approach:
      "Built discovery feeds for activities and masterclasses with filters, spots left, and join flows.",
    result:
      "A clean social surface for hiking, food, city walks, and learning with locals.",
  },
  {
    slug: "classroom-suite",
    number: "07",
    title: "Classroom Suite",
    category: "Education / Internal Tools",
    description:
      "Three private teaching tools in one suite: LevelTest for English placement, an online exam taker for IT students, and a support app for homework grades and attendance.",
    technologies: ["React", "TypeScript", "Tailwind"],
    accent: "#222222",
    image: "/projects/classroom-styled.png",
    problem:
      "Teaching needed lighter ops — placement, timed exams, and classroom records without heavy LMS overhead.",
    approach:
      "Shipped three focused internal apps: LevelTest, MD/ZIP exam flow with deadlines, and a support surface for grades and attendance.",
    result:
      "Less admin friction for teachers and clearer workflows for students — kept private because they power real classroom work.",
    decisions: [
      "LevelTest — English level assessment for students",
      "Exam taker — teachers send MD/ZIP materials with a timer; students submit ZIP back",
      "Support app — homework grades and attendance in one place",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
