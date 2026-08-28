export type Project = {
  slug: string;
  title: string;
  tagline: string;
  type: "Professional" | "Academic";
  period?: string;
  role?: string;
  description: string;
  highlights?: string[];
  /**
   * NOTE: stacks on the featured academic projects (everything below RentAsst)
   * are best-guess tags inferred from the project description, since the source
   * material didn't list a tech stack for them. Worth double-checking these.
   */
  stack: string[];
  status: "Private / client project" | "Academic project";
  featured: true;
};

export type ProjectSummary = {
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "rentasst",
    title: "RentAsst",
    tagline: "ERP platform for rental businesses",
    type: "Professional",
    period: "Sep 2024 — Present",
    role: "Key Full-Stack Developer",
    description:
      "An inventory and rental management system for rental business owners — covering invoicing, rental tracking, and order management from one dashboard.",
    highlights: [
      "Engineered a seamless Google OAuth login flow",
      "Integrated multi-language support across the entire application",
      "Built an end-to-end expense module to streamline financial tracking",
      "Redesigned the app's UI, contributing to a 30% increase in sales",
      "Wrote automation tests for the mobile app using the Patrol framework",
    ],
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "Patrol"],
    status: "Private / client project",
    featured: true,
  },
  {
    slug: "iot-emg-patient-alerts",
    title: "IoT-Enabled EMG Signal Management for Patient Alerts",
    tagline: "Wearable sensor alerts for patient safety",
    type: "Academic",
    description:
      "A sensor-driven monitoring system that reads EMG (muscle signal) data from a wearable sensor and instantly alerts a patient's guardian if it detects abnormal readings.",
    highlights: [
      "Captured and processed live EMG sensor readings",
      "Detected abnormal signal patterns in real time",
      "Triggered instant alerts to the patient's guardian via IoT connectivity",
    ],
    stack: ["IoT", "Embedded Systems", "Sensors", "Mobile Alerts"],
    status: "Academic project",
    featured: true,
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    tagline: "Real-time driver safety monitoring",
    type: "Academic",
    description:
      "A road-safety system that watches for signs of driver drowsiness and immediately signals an alert to the concerned transport company, aiming to prevent fatigue-related accidents.",
    highlights: [
      "Detected driver drowsiness in real time",
      "Sent instant alert signals to the concerned company",
      "Focused on a practical road-safety use case",
    ],
    stack: ["Python", "OpenCV", "Computer Vision"],
    status: "Academic project",
    featured: true,
  },
  {
    slug: "sign-language-recognition",
    title: "Sign Language Recognition",
    tagline: "Bridging communication for deaf and hearing communities",
    type: "Academic",
    description:
      "A recognition system that interprets sign language gestures, using computer vision to help bridge communication between deaf and hearing communities.",
    highlights: [
      "Recognized sign language gestures using computer vision",
      "Aimed at improving communication inclusivity",
    ],
    stack: ["Python", "OpenCV", "Machine Learning"],
    status: "Academic project",
    featured: true,
  },
];

/** Smaller projects, shown as a compact list rather than full case studies. */
export const moreProjects: ProjectSummary[] = [
  {
    title: "Smart Street Light Automation System",
    description:
      "Engineered an intelligent system to automate street lights, improving energy efficiency and urban living.",
    stack: ["IoT", "Sensors", "Automation"],
  },
  {
    title: "Automatic Medical Dispenser with Portable ECG",
    description:
      "Automatically dispenses medicine on schedule, reminds the patient to take it, and reports medicine status to their guardian.",
    stack: ["IoT", "Embedded Systems", "Healthcare Tech"],
  },
  {
    title: "Notify Me",
    description:
      "An agro-based e-commerce platform bridging farmers and consumers for a seamless exchange of agricultural products.",
    stack: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Duplicate Signature Detection",
    description:
      "Enhances document security by detecting duplicate or forged signatures through precise analysis of ink strokes.",
    stack: ["Python", "Image Processing", "Machine Learning"],
  },
  {
    title: "Exam Cell Automation",
    description:
      "Streamlines academic administration by automating exam management and student records.",
    stack: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Simon Game",
    description:
      "A web-based version of the classic Simon memory game, featuring a randomly generated pattern for players to match.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
