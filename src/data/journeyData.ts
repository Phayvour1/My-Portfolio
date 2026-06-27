export type JourneyChapter = {
  id: string
  year: string
  season: string
  era: string
  title: string
  body: string
  detail: string        // second paragraph — more depth
  techUnlocked: string[]
  milestone: string     // single bold callout line
  mood: string          // subtle background accent per chapter
}

export const journeyData: JourneyChapter[] = [
  {
    id: 'ch1',
    year: '2020',
    season: 'Lockdown',
    era: 'Zero',
    title: 'The world stopped. I started.',
    body: 'COVID shut everything down. I had nothing but time and a laptop. I found a YouTube tutorial, opened a blank HTML file, and wrote my first line of code.',
    detail: 'I didn\'t know what I was doing. But something about making text appear on a screen felt like power. I watched tutorials for hours. Then I started breaking them on purpose — just to see what would happen.',
    techUnlocked: ['HTML', 'CSS', 'JavaScript'],
    milestone: 'First line of code written.',
    mood: '#1a1a2e',
  },
  {
    id: 'ch2',
    year: '2021',
    season: 'Early',
    era: 'Structure',
    title: 'YouTube wasn\'t enough. I needed more.',
    body: 'Self-teaching got me started but I hit a ceiling fast. I enrolled in a coding bootcamp to get structure, accountability, and real feedback on my work.',
    detail: 'The bootcamp was where tutorials became real skills. I built projects under deadlines. I got code reviewed for the first time. I learned that writing code and writing good code are two different things.',
    techUnlocked: ['JavaScript', 'Git', 'Responsive Design', 'DOM APIs'],
    milestone: 'Enrolled in first coding bootcamp.',
    mood: '#0d1b2a',
  },
  {
    id: 'ch3',
    year: '2022',
    season: 'Intensive',
    era: 'ALX',
    title: 'ALX Software Engineering. The real thing.',
    body: 'I enrolled in the ALX Software Engineering programme — one of the most rigorous engineering courses in Africa. This was not a bootcamp. This was engineering.',
    detail: 'Low-level systems, algorithms, full-stack development, and real-world engineering culture. ALX broke me down and rebuilt me as an engineer. Deadlines were brutal. The community was exceptional. I came out the other side knowing what I was capable of.',
    techUnlocked: ['Python', 'C', 'Algorithms', 'System Design', 'Linux', 'SQL'],
    milestone: 'Completed ALX Software Engineering programme.',
    mood: '#0a1628',
  },
  {
    id: 'ch4',
    year: '2023',
    season: 'Spring',
    era: 'First Rep',
    title: 'My first professional role. Internship.',
    body: 'From student to professional. I landed my first internship and wrote code that went into a real product used by real people for the first time.',
    detail: 'The internship taught me things no course can — how to read someone else\'s codebase, how to ask the right questions, how to ship without breaking things. I absorbed everything and pushed for more responsibility every week.',
    techUnlocked: ['React', 'TypeScript', 'REST APIs', 'Code Review', 'Agile'],
    milestone: 'First professional engineering role.',
    mood: '#0f1923',
  },
  {
    id: 'ch5',
    year: '2023',
    season: 'Late',
    era: 'Junior',
    title: 'Junior Frontend Engineer.',
    body: 'Converted from intern to Junior Frontend Engineer. My own tickets. My own features. My name on production code.',
    detail: 'I stopped being the person asking how things work and started being the person explaining how things work. I owned features end to end. I built UI components that thousands of users interacted with. The feedback loop from production taught me more than anything else had.',
    techUnlocked: ['React', 'Next.js', 'Tailwind CSS', 'Testing', 'Performance'],
    milestone: 'Promoted to Junior Frontend Engineer.',
    mood: '#111827',
  },
  {
    id: 'ch6',
    year: '2024',
    season: 'Now',
    era: 'Mid-Level',
    title: 'Mid-Level. Still accelerating.',
    body: 'Almost a year in, I was promoted to Mid-Level Frontend Engineer. Not because of time served — because of output, ownership, and impact.',
    detail: 'I lead features now. I review code. I make architecture decisions on the frontend. I\'ve touched the backend enough to have a full-stack perspective. The title changed but the hunger didn\'t — I\'m still pushing, still shipping, still learning faster than the people around me expect.',
    techUnlocked: ['System Architecture', 'Node.js', 'PostgreSQL', 'CI/CD', 'Team Leadership'],
    milestone: 'Promoted to Mid-Level Frontend Engineer.',
    mood: '#0a0a0a',
  },
]
