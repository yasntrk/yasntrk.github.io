// Central place for site-wide content and configuration.
// Edit here to update the name, links, skills, and featured work everywhere.

export const SITE = {
  name: 'Yasin Türk',
  handle: 'yasntrk',
  role: 'Software Developer',
  location: 'İzmir, Türkiye',
  email: 'ysntrktr@gmail.com',
  url: 'https://yasntrk.github.io',
  // One-line meta description used for SEO / social cards.
  description:
    'Yasin Türk — Software Developer and MSc student at İzmir Institute of Technology. Full-stack web, React Native mobile, Node.js & Python backends, AWS, and application security.',
  tagline: 'From circuits to code.',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'about', href: '/' },
  { label: 'blog', href: '/blog' },
];

export type Social = {
  label: string;
  href: string;
  // Inline SVG path data (24x24 viewBox) for the icon.
  icon: string;
};

export const SOCIALS: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/yasntrk',
    icon: 'M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5.3 18 5.6 18 5.6c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z',
  },
  {
    label: 'Email',
    href: 'mailto:ysntrktr@gmail.com',
    icon: 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l10 6.3 10-6.3V6H2Zm20 2.7-9.5 6a1 1 0 0 1-1 0L2 8.7V18h20V8.7Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yasntrk',
    icon: 'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.3a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5ZM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19Z',
  },
];

// Grouped tech stack. Feature technologies and skills — never client work.
export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Astro'],
  },
  {
    group: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    group: 'Data & Cloud',
    items: ['AWS', 'DynamoDB', 'PostgreSQL', 'Docker'],
  },
  {
    group: 'Security',
    items: ['Web App Pentesting', 'Threat Modeling', 'Secure Code Review'],
  },
];

// What I work on — described by domain and technology, kept client-anonymous.
export const HIGHLIGHTS: { title: string; body: string; tags: string[] }[] = [
  {
    title: 'Full-stack web platforms',
    body: 'Design and ship end-to-end web apps — React frontends backed by Node.js/Express and Python services, with PostgreSQL and DynamoDB data layers on AWS.',
    tags: ['React', 'Node.js', 'AWS'],
  },
  {
    title: 'Cross-platform mobile',
    body: 'Build React Native / Expo apps, including device-native features like GPS-based workflows, push notifications, and offline-friendly sync.',
    tags: ['React Native', 'Expo'],
  },
  {
    title: 'Backend & data systems',
    body: 'Engineer high-throughput backend services and data pipelines — usage processing, caching strategies, and cost-aware cloud architecture.',
    tags: ['Python', 'DynamoDB', 'Docker'],
  },
  {
    title: 'Application security',
    body: 'Run white-box and black-box security assessments — threat modeling, penetration testing, and secure code review to harden production systems.',
    tags: ['Pentesting', 'Threat Modeling'],
  },
];

// Public, open-source projects (safe to name — no client work here).
export const PROJECTS: {
  name: string;
  description: string;
  href: string;
  tags: string[];
}[] = [
  {
    name: 'Flutter Translation App',
    description:
      'A cross-platform mobile translation app built with Flutter and Dart, exploring clean mobile UI and translation APIs.',
    href: 'https://github.com/yasntrk/Flutter_Translation_App',
    tags: ['Flutter', 'Dart', 'Mobile'],
  },
  {
    name: 'zipflaw',
    description:
      "A data-science notebook analyzing Zipf's law across text corpora — text processing and statistical visualization in Python.",
    href: 'https://github.com/yasntrk/zipflaw',
    tags: ['Python', 'Jupyter', 'NLP'],
  },
];
