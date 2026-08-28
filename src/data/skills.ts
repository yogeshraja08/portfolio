export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile",
    skills: ["Flutter", "Dart", "Patrol (E2E testing)", "Play Store / App Store deployment"],
  },
  {
    label: "Backend & Data",
    skills: ["Laravel", "PHP", "Go", "MySQL"],
  },
  {
    label: "Deployment",
    skills: ["Server deployment (web & API)"],
  },
];
