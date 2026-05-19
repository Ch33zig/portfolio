export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  kind: string;
  preview: string;
  body?: string[];
  website?: string;
}

export interface Section {
  id: string;
  title: string;
  items: WorkItem[];
}

export const SECTIONS: Section[] = [
  {
    id: "work",
    title: "Experience",
    items: [
      {
        id: "factful",
        title: "Factful",
        subtitle: "Grammarly for Fact-Checking",
        year: "2023",
        role: "Full-Stack Developer",
        kind: "Product",
        website: "factful.io",
        preview:
          "Somewhere in 2023, members of my team were on a Zoom call with the Ontario Ministry of Education, pitching Factful as an institutional writing tool. I wasn't on that call. I was 13, in China, and probably asleep.",
        body: [
          "The idea wasn't mine. A friend had an idea of \"Grammarly for fact-checking\" and it clicked. I didn't have a deep conviction about misinformation or writing tools. I was 13, and I wanted to build a startup. That was enough.",
          "What kept me going wasn't the problem. It was the feeling of being the person who was actually building something. For the first time, I had a real codebase, real users, something that existed in the world because I made it exist. That was the whole motivation, and looking back, I don't think that's a bad reason to start.",
          "I was the one building it. Full-stack, mostly solo, figuring it out as I went.",
          "The hardest part was the fact-checking itself. I started with just prompting GPT to verify claims. It wasn't good enough, so I moved to fine-tuning. I iterated for months, going back and forth, convinced that was the lever I needed to pull. The problem was that this was genuinely new territory, not just for me but for everyone. AI was new. The resources barely existed. I was 13, trying to solve a problem that people with actual research backgrounds were still figuring out.",
          "I realized later I was optimizing for the wrong thing. Fine-tuning felt like the serious, rigorous solution. But the real breakthrough was RAG, building a pipeline that hit the web in real-time and pulled live sources to verify claims against. The harder problem inside that was relevance: the web gives you a flood of results, and most of them aren't credible. I had to build filtering on top of retrieval to surface only high-credibility evidence; otherwise the agent would just confidently cite junk. That was the biggest problem I had to face: having to objectively score sources to make sure all sources cited are 100% accurate.",
          "When that clicked, accurate claims verified against real sources, bad claims flagged with actual evidence, it felt like a real product for the first time. It was also the first time I learned that in a startup, the most advanced solution isn't always the right one. The right one is whatever actually brings you closer to users using the product.",
          "Factful ended for me the way a lot of early startups end. Not because the product failed, but because the team did.",
          "The person who came up with the original idea, \"Grammarly for fact-checking,\" wasn't doing much by the time we had a real product. But he wanted to be CEO, and his only reasoning was that the idea was his. Almost every other aspect of the company, the building, the operations, the conversations with the Ministry of Education, was being carried by someone else. When it became clear he wasn't willing to negotiate on structure or recognition, I left. A few others did too, and we went on to start something new together.",
          "There was also a quieter disagreement underneath that: I thought we should be selling to education institutions. We were students, we had a direct line to that world, and we already had real signal, and the Ontario Ministry of Education had gotten on a call with us. That's not nothing. Institutions cared about fact-checking as a mandate in a way individual users just didn't. The pivot toward B2C felt like walking away from the only traction we had.",
          "Looking back, I probably should have held it more loosely. I wasn't there for the money; none of us were paid. It was always about the experience. And honestly, it was a great one. I learned more in those months than I could have sitting in a classroom. I'd still make the same call to leave, but I'd carry less weight about it on the way out.",
          "The biggest thing Factful changed in me was how I think about building. Before this, I built things for myself. To see if I could, to learn, to tinker. Factful was the first time I had to ask harder questions: who actually has this problem, what do they need, and what's the fastest path to something they'd genuinely use. That shift from builder to product thinker is something I've carried into everything since.",
          "But honestly, the thing I value most isn't a lesson. It's the memory of what it felt like to be a group of kids with almost no experience and completely unrealistic expectations, genuinely convinced we were going to build the next Grammarly. We didn't know enough to know we couldn't. And so we just tried.",
          "That kind of ambition is harder to find as you get older and more calibrated. I'm glad I got to feel it before I knew better.",
        ],
      },
      {
        id: "kettle",
        title: "Kettle.fm",
        subtitle: "A podcast app that respects the unfinished",
        year: "2023",
        role: "Design Lead",
        kind: "Product",
        preview:
          "An iOS client that treats episodes as objects you collect rather than queues you grind through. Led the redesign of discovery, playback, and the social layer.",
        body: [
          "Kettle is a podcast app for people who have 400 unplayed episodes and feel bad about it. The redesign reframed the library as a shelf you curate, not an inbox you clear.",
          "Shipped a new playback surface with chapter scrubbing, a 'shelves' system for grouping episodes by mood, and a social layer that shows what people you trust are actually finishing — not just adding.",
        ],
      },
      {
        id: "northbank",
        title: "North Bank",
        subtitle: "Sixty-year-old bank, digital-first relaunch",
        year: "2022",
        role: "Contract, 4 months",
        kind: "Brand + Product",
        preview:
          "Rebrand and product overhaul of a community bank. Identity, mobile app, marketing site, branch signage — all set in a custom serif drawn by a friend.",
        body: [
          "The brief was simple: don't make us look like a fintech. We leaned hard into the opposite — typographic, warm, slightly old-fashioned. Restrained color. Paper-textured backgrounds in print.",
          "The mobile app went from 1.9 to 4.7 in the store after launch. The 60-page brand book is the work I'm most proud of from that year.",
        ],
      },
      {
        id: "ideo",
        title: "IDEO — Service Design",
        subtitle: "Three years across health, transit, public sector",
        year: "2019–2022",
        role: "Senior Designer",
        kind: "Consulting",
        preview:
          "Service design for clients including a regional transit authority, a children's hospital, and a state benefits agency. Wide problems, long timelines, tangible deliverables.",
        body: [
          "Most of what I learned about working at scale I learned here. The skill of writing a brief so a 40-person team can execute against it for nine months is the same skill as drawing a button.",
        ],
      },
    ],
  },
  {
    id: "writing",
    title: "Writing",
    items: [
      {
        id: "density",
        title: "On Density",
        subtitle: "Why most enterprise software is too spacious",
        year: "2024",
        role: "Essay",
        kind: "Essay",
        preview:
          "The default in B2B design is to pad everything. The default in consumer design is to compress everything. Both are downstream of who's paying attention to the screen — and for how long.",
        body: [
          "An essay about how density is a function of dwell time, not aesthetic preference, and what that means for the things we build.",
        ],
      },
      {
        id: "tools",
        title: "Tools as Opinions",
        subtitle: "Every tool argues for a worldview",
        year: "2024",
        role: "Essay",
        kind: "Essay",
        preview:
          "Figma argues that design is parallel. Linear argues that work is a sequence. Notion argues that everything is a page. The tool you reach for is a vote.",
        body: [
          "A short piece on the legibility of opinion in software, and the cost of using tools whose worldview you secretly disagree with.",
        ],
      },
      {
        id: "smallteams",
        title: "Small Teams",
        subtitle: "Three years under fifteen people",
        year: "2023",
        role: "Essay",
        kind: "Essay",
        preview:
          "The romance of the small team is mostly accurate. The part nobody talks about is how much of your day is spent being the only person who notices something.",
      },
    ],
  },
  {
    id: "play",
    title: "Play",
    items: [
      {
        id: "specimen",
        title: "Type Specimen",
        subtitle: "Interactive specimen for an in-progress serif",
        year: "2025",
        role: "Side project",
        kind: "Web",
        preview:
          "A drawing tool and live specimen for a contemporary serif I'm cutting with a friend. The page responds to cursor proximity to demonstrate the optical sizes.",
      },
      {
        id: "weather",
        title: "Weather Clock",
        subtitle: "A clock whose hands change weight",
        year: "2024",
        role: "Side project",
        kind: "Object",
        preview: "Heavier strokes when it's about to rain. It's a joke. It also works.",
      },
      {
        id: "loom",
        title: "Loom",
        subtitle: "Terminal-only tool for weaving notes",
        year: "2023",
        role: "Side project",
        kind: "Code",
        preview:
          "A two-hundred-line Go program for stitching together notes from disparate files. I use it every day.",
      },
    ],
  },
];

export const allItems = SECTIONS.flatMap((s) => s.items);

export function findItem(id: string): WorkItem | undefined {
  return allItems.find((it) => it.id === id);
}

export function getItemNumber(id: string): number {
  return allItems.findIndex((it) => it.id === id) + 1;
}
