export const owner = {
    name: 'Vincent Kulankash',
    alias: 'Kulankash',
    prompt: 'kulankash@portfolio',
    title: 'Software Engineer · Backend Focus',
    email: 'vincentkulankash@gmail.com',
    github: 'https://github.com/VincentKulankash',
};

export const bio = {
    about: [
        "I'm a software engineering student based in Nairobi, Kenya — currently in my final year of a Bachelor of Business Information Technology (BBIT) at KCA University, and simultaneously training in backend development at Moringa School.",
        "During my industrial attachment at Kenyatta University I contributed to the Qafya health system, working on database references and data integrity tasks — my first exposure to production-grade software.",
        "Beyond coursework I have built and deployed a commercial inventory and POS system for a real retail client — handling auth, sales logic, product variants, and on-site deployment. I build backend systems and tools that solve real problems.",
    ],
};


export const skills = [
    { category: "Languages",   name: "HTML",        percent: 90 },
  { category: "Languages",   name: "CSS",         percent: 88 },
  { category: "Languages",   name: "JavaScript",  percent: 75 },
  { category: "Languages",   name: "Python",      percent: 70 },
  { category: "Frameworks",  name: "Node.js",     percent: 78 },
  { category: "Frameworks",  name: "Flask",       percent: 72 },
  { category: "Frameworks",  name: "React",       percent: 65 },
  { category: "Tools",       name: "Git",         percent: 80 },
  { category: "Tools",       name: "PostgreSQL",  percent: 68 },
];

export const skillsNote = 
    "These percentages reflect current working proficiency — I am actively improving across all of them.";

export const projects = [
    {
        id: 1,
        name: "Mbogo Inventory & POS System",
        type: "Freelance · Commercial",
        stack: ["Flask", "PostgreSQL", "Vanilla JS"],
        description:
            "A full inventory and point-of-sale system built for and deployed to a real retail client. Features include sales with per-item discounts, product variant management, a secured reports module with bcrypt auth and session management, and a daily error-email logging system. Maintained across two major versions without disrupting live client data.",
        github: "https://github.com/VincentKulankash/inventory_system",
        live: null,
    },

    {
        id: 2,
        name: "Wordly Dictionary",
        type: "Personal Project",
        stack: ["HTML", "CSS", "JavaScript"],
        description:
            "A web-based English dictionary that lets users search words to retrieve pronunciation, definitions, and part-of-speech data from an external API. Includes a save feature to bookmark words for later review.",
        github: "https://github.com/VincentKulankash/Wordly-dictionaty-website",
        live: null,
    },

    {
        id: 3,
        name: "Guild Manager CLI",
        type: "Python · Academic",
        stack: ["Python"],
        description:
            "A terminal-based RPG guild management system. Supports two roles — Admins and Adventurers — with separate permission sets. Admins manage the guild and members; Adventurers post quests and complete bounties. Runs entirely in the terminal.",
        github: "https://github.com/VincentKulankash/group11_summative_lab-",
        live: null,
    },

    {
        id: 4,
        name: "Electronics E-Commerce",
        type: "Group Project · Moringa School",
        stack: ["React", "React Router", "JSON Server"],
        description:
            "A React SPA for browsing and purchasing electronics, built as a team of four. I handled React Router navigation, client-side search filtering, and an edit form with validation.",
        github: "https://github.com/VincentKulankash/e-commerce-lab", // TO DO: confirm correct repo URL
        live: null,
    },
] ;

export const resumeFile = {
    label: 'Vincent_kulankash_CV',
    url: null // to do: paste direct download link here once cv is hosted in public/cv
};