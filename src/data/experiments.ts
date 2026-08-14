export type Experiment = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  size: "sm" | "md" | "lg";
};

export const experiments: Experiment[] = [
  {
    id: "ml-sketch",
    title: "Loss Landscapes",
    tag: "ML",
    blurb: "Tiny visualizations of training dynamics — how error curves teach intuition.",
    size: "lg",
  },
  {
    id: "cv-gestures",
    title: "Gesture Mesh",
    tag: "Computer Vision",
    blurb: "MediaPipe hand landmarks driving UI state without a mouse.",
    size: "md",
  },
  {
    id: "r3f-orbit",
    title: "Orbit Field",
    tag: "Three.js",
    blurb: "Sparse particles and slow orbits — motion as atmosphere, not spectacle.",
    size: "md",
  },
  {
    id: "ui-proto",
    title: "Broken Grid",
    tag: "UI",
    blurb: "Layouts that intentionally misbehave to find better composition.",
    size: "sm",
  },
  {
    id: "auto-scripts",
    title: "Quiet Automations",
    tag: "Automation",
    blurb: "Small scripts that remove friction from teaching and shipping.",
    size: "sm",
  },
  {
    id: "data-pulse",
    title: "Pulse Charts",
    tag: "Data Viz",
    blurb: "Editorial charts for messy real-world numbers.",
    size: "lg",
  },
  {
    id: "ai-sandbox",
    title: "Prompt Objects",
    tag: "AI",
    blurb: "Experiments where language becomes a control surface.",
    size: "md",
  },
  {
    id: "unfinished",
    title: "Unfinished Ideas",
    tag: "Lab",
    blurb: "Half-built prototypes kept on purpose — signal over polish.",
    size: "sm",
  },
];
