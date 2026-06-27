// ─── Types ────────────────────────────────────────────────────────────────────

export type NodeId =
  | "START"
  | "NODE_WEB"
  | "NODE_WEB_CONSUMER"
  | "NODE_WEB_INTERNAL"
  | "NODE_BACKEND"
  | "NODE_FULLSTACK"
  | "NODE_LURKER"
  | "NODE_CONTACT";

export type SpecialAction = "SCROLL_PROJECTS" | "SCROLL_PROJECTS_HIGHLIGHT";
export type NextTarget = NodeId | SpecialAction;

export interface QuestChoice {
  label: string;
  next: NextTarget;
}

export interface QuestNode {
  id: NodeId;
  npc: string;
  choices: QuestChoice[];
  isOutcome?: boolean;
}

// ─── Quest Tree ───────────────────────────────────────────────────────────────

export const questData: Record<NodeId, QuestNode> = {
  START: {
    id: "START",
    npc: "You've found the engineer's lair. What do you seek?",
    choices: [
      { label: "A web application", next: "NODE_WEB" },
      { label: "A backend system or API", next: "NODE_BACKEND" },
      { label: "A full product, start to finish", next: "NODE_FULLSTACK" },
      { label: "Just looking around", next: "NODE_LURKER" },
    ],
  },

  NODE_WEB: {
    id: "NODE_WEB",
    npc: "Interesting. Is this consumer-facing or internal tooling?",
    choices: [
      { label: "Consumer product", next: "NODE_WEB_CONSUMER" },
      { label: "Internal dashboard / tool", next: "NODE_WEB_INTERNAL" },
    ],
  },

  NODE_WEB_CONSUMER: {
    id: "NODE_WEB_CONSUMER",
    npc: "I build fast, accessible, animated interfaces. React, TypeScript, performance-obsessed.",
    choices: [
      { label: "Show me proof", next: "SCROLL_PROJECTS_HIGHLIGHT" },
      { label: "I'm ready to talk", next: "NODE_CONTACT" },
    ],
  },

  NODE_WEB_INTERNAL: {
    id: "NODE_WEB_INTERNAL",
    npc: "Dashboards, data-heavy UIs, internal tooling. I thrive in complexity and constraint.",
    choices: [
      { label: "Let's scope it out", next: "NODE_CONTACT" },
      { label: "Show me past work", next: "SCROLL_PROJECTS_HIGHLIGHT" },
    ],
  },

  NODE_BACKEND: {
    id: "NODE_BACKEND",
    npc: "APIs, architecture, databases. What scale are we talking?",
    choices: [
      { label: "Early-stage startup, move fast", next: "NODE_CONTACT" },
      { label: "Scale-up, needs to survive traffic", next: "NODE_CONTACT" },
    ],
  },

  NODE_FULLSTACK: {
    id: "NODE_FULLSTACK",
    npc: "Full ownership. From zero to shipped. That's where I do my best work.",
    choices: [
      { label: "Tell me more", next: "NODE_WEB_CONSUMER" },
      { label: "Let's talk scope", next: "NODE_CONTACT" },
    ],
  },

  NODE_LURKER: {
    id: "NODE_LURKER",
    npc: "Fair. The work speaks louder anyway. Take your time.",
    choices: [
      { label: "Actually, I do need something built", next: "START" },
      { label: "Show me the projects", next: "SCROLL_PROJECTS" },
    ],
  },

  NODE_CONTACT: {
    id: "NODE_CONTACT",
    npc: "Good. Drop your details and I'll reach out within 24 hours.",
    choices: [],
    isOutcome: true,
  },
};

// ─── Breadcrumb labels ────────────────────────────────────────────────────────

export const breadcrumbLabel: Record<NodeId, string> = {
  START: "START",
  NODE_WEB: "WEB",
  NODE_WEB_CONSUMER: "CONSUMER",
  NODE_WEB_INTERNAL: "INTERNAL",
  NODE_BACKEND: "BACKEND",
  NODE_FULLSTACK: "FULLSTACK",
  NODE_LURKER: "LURKER",
  NODE_CONTACT: "CONTACT",
};
