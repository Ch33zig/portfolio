export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  preview: string;
  body?: (string | { text: string; links: Record<string, string> })[];
  website?: string;
  websiteLabel?: string;
  comingSoon?: boolean;
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
          {
            text: "The person who came up with the original idea, \"Grammarly for fact-checking,\" wasn't doing much by the time we had a real product. But he wanted to be CEO, and his only reasoning was that the idea was his. Almost every other aspect of the company, the building, the operations, the conversations with the Ministry of Education, was being carried by someone else. When it became clear he wasn't willing to negotiate on structure or recognition, I left. A few others did too, and we went on to start something new together. [Scripty]",
            links: { Scripty: "/entry/scripty" },
          },
          "There was also a quieter disagreement underneath that: I thought we should be selling to education institutions. We were students, we had a direct line to that world, and we already had real signal, and the Ontario Ministry of Education had gotten on a call with us. That's not nothing. Institutions cared about fact-checking as a mandate in a way individual users just didn't. The pivot toward B2C felt like walking away from the only traction we had.",
          "Looking back, I probably should have held it more loosely. I wasn't there for the money; none of us were paid. It was always about the experience. And honestly, it was a great one. I learned more in those months than I could have sitting in a classroom. I'd still make the same call to leave, but I'd carry less weight about it on the way out.",
          "The biggest thing Factful changed in me was how I think about building. Before this, I built things for myself. To see if I could, to learn, to tinker. Factful was the first time I had to ask harder questions: who actually has this problem, what do they need, and what's the fastest path to something they'd genuinely use. That shift from builder to product thinker is something I've carried into everything since.",
          "But honestly, the thing I value most isn't a lesson. It's the memory of what it felt like to be a group of kids with almost no experience and completely unrealistic expectations, genuinely convinced we were going to build the next Grammarly. We didn't know enough to know we couldn't. And so we just tried.",
          "That kind of ambition is harder to find as you get older and more calibrated. I'm glad I got to feel it before I knew better.",
        ],
      },
      {
        id: "scripty",
        title: "Scripty",
        subtitle:
          "AI Agents that connect to external scripts (tools) to interact with the real world",
        year: "2024",
        role: "Co-founder & CTO",
        website: "web.archive.org/web/20250205010047/https://scripty.me/",
        websiteLabel: "scripty.me",
        preview:
          "In November 2024, Anthropic announced the Model Context Protocol. The tech press covered it like a new idea. I had been building the same idea for a year.",
        body: [
          "In November 2024, Anthropic announced the Model Context Protocol, a standard for connecting AI agents to external tools so they could actually interact with the world. The tech press covered it like a new idea.",
          "I had been building it for a whole year at 14 with a few of my high school friends.",
          "Not a similar thing. Not inspired by the same problem. The same core abstraction: a central orchestrator, a library of external tools, and an agent that selects and executes the right tool at runtime based on the user's needs. We called the tools \"scripts.\" We called the product Scripty. We had enterprise clients, a community marketplace, millions of views on Instagram, and a broken post-signup funnel we didn't know was broken.",
          "I'm not saying this to claim credit. I say it because independently arriving at the same abstraction as one of the leading AI labs before they shipped it is the most clarifying thing that's ever happened to me as a builder. It meant the idea was right.",
          {
            text: "Scripty started the way a lot of things do after a falling out, with the same people, a new idea, and unfinished energy looking for somewhere to go. A few of us had left [Factful] together, and we weren't done building. The question was what to build next.",
            links: { Factful: "/entry/factful" },
          },
          'The frustration was simple: AI at the time was good at producing text and not much else. You could ask it to draft an email, and it would. You could ask it to write a script, and it would. But it couldn\'t send the email. It couldn\'t run the script. Every output was a suggestion that still required a human to do the actual thing. That gap between "AI says what to do" and "AI does the thing" felt like the most obvious problem in the space, and nobody had really closed it yet.',
          "The idea was to close it. Build a system where an AI agent doesn't just reason about a task but also reaches out to execute it, connecting to external scripts that interact with the real world. Manage your files. Post to social media. Automate your outreach. The agent would figure out which tool to use, call it, and handle the result. We'd build the tools. Eventually, the community would too.",
          "The core of Scripty was a sequential multi-agent pipeline, where each agent had a single, clearly scoped job and handed off to the next.",
          "The first was the interface agent, the one the user actually talked to. It understood what you were asking for, broke it down into something actionable, and passed it forward. The second was the execution agent, which received that instruction, surveyed the available tool library, selected the right script, and ran it. The third was the safety agent, which sat between selection and execution and reviewed every call before anything actually happened. If it flagged something, the script was blocked entirely, no retry, no degraded execution, just a hard stop. That sequencing was intentional. Some scripts ran system-level commands, managing files, interacting with the OS, executing processes on the user's machine. The moment your AI can affect the real world, the failure modes stop being embarrassing and start being dangerous. The safety agent was how I tried to take that seriously.",
          "The way the execution agent selected tools was straightforward but important to get right. Each script exposed a structured JSON manifest: a name, a description, and a typed parameter schema, and the full set of these manifests got passed as context to the execution agent on every call. The agent reasoned over that list to decide what to invoke. No embeddings, no retrieval layer, just the model reading a well-structured interface contract and making a decision. That meant the quality of each manifest mattered enormously. Vague descriptions produced wrong selections. Ambiguous parameter names produced malformed calls. Writing good manifests was its own discipline, and iterating on them was a significant part of how the system got more reliable over time.",
          "The scripts themselves were more than wrappers. Looking at something like the resume optimizer, one of the more complex tools in the default library, you can see the full pattern: a public_description for the agent to reason over, an object manifest defining the typed interface, and an async function entry point that did the actual work. But what made the architecture interesting was that scripts could themselves make LLM calls via an internal call_ai() function. The resume optimizer, for instance, ran multiple AI calls in sequence, one to parse the raw resume into structured data using tool calling, then separate calls to optimize each section individually against the job description, accumulating context from previous sections as it went. So the top-level agent was orchestrating scripts, and some of those scripts were themselves running their own AI pipelines. The execution agent didn't need to know any of that. It just called the function and got back structured JSON.",
          "Chaining was supported; the output of one script could inform the decision to call another, but it had guardrails. I prompted the execution agent explicitly to avoid unnecessary chaining, and I put a hard cap on depth to prevent loops. Both were necessary. Left unconstrained, agents chain more than they need to. Users don't want to watch a machine reason in circles; they want something to happen.",
          "Scripts returned structured JSON with a second_response field that fed directly back into the conversation, so from the user's side the experience was a clean chat interface. They'd ask for something, and a nicely formatted result would appear. The pipeline behind it, the safety check, the manifest lookup, the LLM call, the script execution, sometimes multiple AI calls within the script itself, was invisible. That was intentional. The complexity was mine to manage, not theirs to understand.",
          "The runtime layer went through its own evolution. My first approach was to install a Miniconda environment on the user's machine to run the Python scripts, which worked but was heavy; users had to set up an entire Python environment manually before they could do anything. I eventually replaced it with a Tauri sidecar: a bundled binary that could execute Python directly without requiring Miniconda at all. That meant touching Rust, which I wasn't familiar with, but it was the right tradeoff. The switch also came with a broader migration from Electron to Tauri, which I made after benchmarking both. Tauri was meaningfully faster and significantly lighter on memory. Electron's model of bundling a full Chromium instance made it easy to get started but expensive to run. For a desktop app that was already managing Python subprocesses and LLM calls, the overhead mattered.",
          "The default library shipped with dozens of scripts covering the most common automation tasks. On top of that sat a community layer: users could download scripts others had built, publish their own, and sell them through a marketplace. Every script followed the same interface contract: public_description, typed JSON manifest, async entry point, structured JSON output. That standardization was what made the ecosystem composable. Any script built by anyone, if it followed the interface, would work with the orchestrator. The agent didn't need to know who wrote it or how it worked internally. It just needed the manifest.",
          "What I was building, though I didn't have the vocabulary for it yet, was a protocol.",
          "We didn't have a marketing budget. We had Reddit and Instagram and a product we genuinely believed in, and for a while that was enough.",
          "The B2C push started on Reddit. I posted in r/csmajors and a few adjacent communities, and the response was immediate. Hundreds of people joined the waitlist. The thread got traction not because we were selling hard but because the idea resonated: students and developers who were already thinking about AI automation, who understood exactly what we were describing and wanted to try it. That early signal was real, and it felt like validation.",
          "Instagram was bigger but stranger. We built up a following posting content around AI and automation, and one reel hit 5.7 million views. The audience was there. The problem was that we hadn't made it easy enough to go from watching the video to actually downloading the product. The link wasn't prominent. The path wasn't clear. Millions of people saw Scripty's name and did nothing with it, not because they weren't interested, but because we didn't make the next step obvious. That was a mistake I think about a lot.",
          "The B2B side started at startup conferences. My cofounder and I went to a few, not with a polished enterprise pitch, just with a real product and something concrete to show. That was enough. We met the founder of EXEED Digitals, a LinkedIn-focused digital marketing agency, and agreed to build something together: an automation agent that could handle personalized LinkedIn outreach at scale.",
          "The technical problem was harder than it sounds. LinkedIn is aggressive about detecting and blocking automated activity, and the consequences weren't just a failed request. They were getting client accounts flagged or banned. After researching the options, I landed on Camoufox, a stealth browser built on Firefox rather than Chromium. The key difference is that it operates at the engine level, spoofing browser fingerprints more deeply than tools like undetected-chromedriver, which layer detection evasion on top of Chromium after the fact.",
          "Firefox also helped because it's less scrutinized than Chromium-based browsers by the platforms trying to detect bots. It wasn't a perfect solution; LinkedIn pushed updates that broke things unpredictably, but it was the most robust approach I found.",
          "While testing the LinkedIn connector, I had the targeting filter set to investors. It worked well enough that one of them actually replied. That reply turned into a weekly meeting, and those meetings turned into something genuinely valuable: a consistent external perspective from someone who had seen a lot of companies at our stage and could tell us what we were missing.",
          "What surprised us most was how the B2B side grew without us chasing it. Our brand name in the AI automation space had gotten out enough that founders and companies started reaching out to us directly. Another founder wanted personal automation tools to manage his community. Others came with workflow problems they'd already tried to solve and couldn't. We weren't cold calling anyone. They were finding us because Scripty had become, in a small but real way, the thing people thought of when they thought about AI agents that actually did things. That kind of inbound is hard to manufacture. We hadn't planned for it. It just happened because the product was real and the timing was right.",
          "The analytics gap was the quietest failure and probably the most costly one.",
          "We had hundreds of waitlist signups. We had viral content. We had inbound from businesses. By every surface metric, things were working. What we didn't know was that a significant portion of users who signed up and downloaded the app were hitting a wall somewhere in the onboarding flow and never getting past it. They weren't converting into active users. They were just disappearing, and because we hadn't set up proper analytics, we had no visibility into where or why. We saw the interest drop off and assumed it was natural. It wasn't. The funnel was broken, and we were blind to it.",
          "By the time we understood what was happening, MCP had launched.",
          "In November 2024, Anthropic announced the Model Context Protocol to significant coverage. I read the documentation and felt something I didn't quite have a word for at the time. It wasn't exactly pride, because we hadn't shipped what they shipped. It wasn't exactly defeat either. It was closer to clarity. Every core abstraction we had built around, a central orchestrator, a library of modular external tools, a typed interface contract between the agent and the tools, an ecosystem where anyone could contribute, was sitting right there in their spec. We had arrived at the same abstraction independently, at 14, a year before one of the leading AI labs made it a standard.",
          "The timing was brutal in a practical sense. MCP had Anthropic's name behind it, a massive developer ecosystem adopting it immediately, and resources we couldn't compete with. But it also meant something important: the idea was right. We hadn't been building in the wrong direction. We had been building in exactly the right direction, just without the runway to see it through.",
          "The honest version of what went wrong is that several things compounded at once. We didn't have analytics when we needed them most. We had a viral moment we weren't set up to capture. And then the tailwind we were riding became a wave that was too big for us. Any one of those might have been recoverable. Together, they weren't.",
          "The technical things I carry are specific. Instrumentation is not optional. You cannot fix a funnel you cannot see, and by the time you notice users aren't activating, you've already lost most of them. I also think differently now about agentic systems and what it actually takes to make them safe. When your software can execute things in the real world, the design question isn't just \"does it work\" but \"what happens when it doesn't.\" The safety agent, the chaining caps, the hard stops were not features. They were the product being responsible about what it was.",
          "The strategic thing I carry is simpler: inbound is a signal worth paying attention to. When businesses started finding us without us looking for them, that was the market telling us something. We were spread across B2C content, B2B services, and platform development all at once, and we didn't have the focus or the team size to do all three well. If I were doing it again, I'd have followed the inbound harder and earlier.",
          "But the thing that stays with me most isn't a lesson. It's the fact that a few teenagers independently designed the same architecture as a well-resourced AI lab, shipped it as a real product with real users and real enterprise clients, and did it before anyone had a name for what it was. We didn't know enough about the industry to know how unlikely that was. So we just built it.",
          "I've thought about whether knowing more would have helped. Better analytics, obviously. More focus, probably. But the core thing, the willingness to look at a problem that felt too big and just start, that came partly from not knowing what we were up against. MCP is now used everywhere. We built it first. I don't think that's nothing, and I'm glad we didn't wait until we were ready, because I'm not sure we ever would have been.",
        ],
      },
      {
        id: "heydena",
        title: "HeyDena",
        subtitle: "Real-time conversational startup advisor",
        year: "2025",
        role: "AI Engineer",
        preview:
          "Most AI assistants feel like AI assistants. You ask something, you wait, text appears. Heydena was supposed to feel like a person. A real-time voice on the other end that knew your startup, remembered your last conversation, and reached out when you'd gone quiet too long. That was the goal. Getting there was a different problem entirely.",
        body: [
          {
            text: "The two cofounders I met through [Scripty] had spent years advising early stage startups. They had a startup course, hours of recorded content, a library of PMF/GTM frameworks, and a methodology that had worked for many founders. They were actively finding the next step to scale their advisory. Although there were only two of them, their students needed guidance at all hours, at the exact moment a question came up.",
            links: { Scripty: "/entry/scripty" },
          },
          "Dena was a real-time, proactive startup advisor. It's an AI that initiated conversations, ran exercises, pushed founders through the material, and remembered everything about their specific startup from one session to the next. The voice behind it was modelled directly on one of the cofounders, and it was like having that specific advisor available at any moment.",
          "The architecture had three distinct layers that had to work together. The first was retrieval. The course content was chunked, embedded, and stored in Pinecone, and every conversation pulled relevant material at query time. The second was memory. Each user had a structured profile that tracked their problem statement, ICP, and value proposition, alongside persistent conversation history. Dena wasn't starting from scratch each time. It knew where you were in the course, what you were working on, and what you'd said before. The third was proactivity. Dena didn't wait to be spoken to. It reached out after a user finished a video, checked in after a day away, and re-engaged after longer periods of inactivity.",
          "Getting the real-time feel right was its own engineering problem. The LLM streamed its output directly to ElevenLabs, and ElevenLabs streamed the audio back over WebSockets, minimising the gap between response generation and what the user heard. Latency was the enemy. Any noticeable pause broke the illusion that you were talking to a person. Every decision in that pipeline was made to close that gap.",
          "The model itself was Qwen, chosen for cost. At the scale we were planning, API costs mattered, and Qwen made the economics work. The tradeoff was that it occasionally felt underpowered for nuanced advisory conversations, and we explored switching to GPT at points where the quality gap was visible. The tension between cost and capability is one that doesn't go away cleanly, and we sat with it throughout.",
          "The hardest part of the project wasn't the infrastructure. It was the voice. We had gathered a large set of transcripts, recordings, and written material from the cofounder we were modelling, and used them to fine-tune Qwen on his tone. But tone is harder to pin down than it sounds. Some versions of Dena came out too cautious, hedging on advice that should have been direct. Others were too loose, glossing over things that needed more rigour. Sometimes the model just didn't follow the instructions at all.",
          "The only real solution was iteration with actual users. We worked closely with early founders going through the course, collecting feedback on whether the conversation felt right and provided accurate answers. Was it pushing too hard? Not hard enough? Did it feel like an advisor or a search engine? That feedback loop shaped the system prompt more than anything else. Fine-tuning the personality in a conversational AI is really a process of writing, testing, watching real users react, and rewriting. You can't get it right in a vacuum. You only get it right by watching someone use it and noticing the exact moment it stops feeling human.",
          "What I came away understanding is that the technical layer, the retrieval, the memory, the streaming, is the foundation, but what users actually experience is whether the conversation feels like someone is actually there. Building that feeling at scale, reliably, across different users and different moods and different questions, is the real problem. And it is genuinely hard.",
        ],
      },
      {
        id: "synapse",
        title: "Synapse",
        subtitle: "Coming soon",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
      {
        id: "kiri",
        title: "Kiri",
        subtitle: "Coming soon",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
    ],
  },
  {
    id: "writing",
    title: "Writing",
    items: [
      {
        id: "analytics-churn",
        title: "Use Analytics to Beat Churn",
        subtitle: "Coming soon",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
      {
        id: "writing-soon-1",
        title: "Coming soon",
        subtitle: "",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
      {
        id: "writing-soon-2",
        title: "Coming soon",
        subtitle: "",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
    ],
  },
  {
    id: "other",
    title: "Other",
    items: [
      {
        id: "piano",
        title: "Piano and Music",
        subtitle: "Coming soon",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
      },
      {
        id: "other-soon-1",
        title: "Coming soon",
        subtitle: "",
        year: "",
        role: "",
        preview: "Coming soon",
        comingSoon: true,
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
