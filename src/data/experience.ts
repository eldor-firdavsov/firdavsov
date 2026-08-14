export type PathStep = {
  id: string;
  title: string;
  body: string;
};

export const pathSteps: PathStep[] = [
  {
    id: "frontend",
    title: "Frontend",
    body: "Building interfaces and products with React, TypeScript, and careful interaction design.",
  },
  {
    id: "products",
    title: "Real products",
    body: "Shipping work people actually use — queues, bookings, and operational surfaces that have to hold up.",
  },
  {
    id: "teaching",
    title: "Teaching",
    body: "Explaining JavaScript and frontend concepts as a support teacher at an IT learning center.",
  },
  {
    id: "data",
    title: "Data",
    body: "Learning NumPy, Pandas, and data workflows — the substrate under modern ML systems.",
  },
  {
    id: "ml",
    title: "Machine Learning",
    body: "Moving toward practical AI/ML engineering: models, evaluation, and product-shaped intelligence.",
  },
  {
    id: "future",
    title: "Future",
    body: "Building at the intersection of software and intelligence — products that feel inevitable.",
  },
];

export type Collaboration = {
  label: string;
  detail: string;
};

export const collaborations: Collaboration[] = [
  {
    label: "IT Learning Center",
    detail: "Support teacher — JavaScript & frontend",
  },
  {
    label: "NavbatGo",
    detail: "Realtime product for barbershops",
  },
  {
    label: "LocalUz",
    detail: "Travel partners & masterclasses",
  },
  {
    label: "Student tools",
    detail: "LevelTest, exams & classroom support",
  },
];
