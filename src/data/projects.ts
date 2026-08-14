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
  problem?: string;
  approach?: string;
  result?: string;
  decisions?: string[];
};

export const projects: Project[] = [
  {
    slug: "navbatgo",
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
