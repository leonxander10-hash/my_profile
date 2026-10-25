// ============================================================
//  EDIT THIS FILE to change your website! (Ask a parent to help.)
//  Keep the commas and quote marks "like this" exactly as they are.
//  Put your pictures inside the "images" folder, then write the
//  file name here, for example: image: "images/my-minecraft-house.png"
// ============================================================

const PROFILE = {
  name: "PLAYER ONE",              // <-- change to your gamer name!
  tagline: "Gamer by day. Top student always.",
  school: "Treasures in Heaven School, Antipolo",
  grade: "Grade 4",                // <-- change to your grade
  age: 10,
  avatar: "",                      // e.g. "images/me.png" (empty = 🎮 icon)
  about: "Hi! I love playing games and I also love learning new things. " +
         "On this page you can see my game screenshots, my blog, " +
         "my school stuff, and how I keep my grades strong while gaming.",
  games: ["Minecraft", "Roblox", "Fortnite", "Doom", "God of War Ragnarök",
          "Team Fortress 2", "Mortal Kombat 11", "One Piece Pirate Warriors 4",
          "Retro (N64, PS1, PS2)", "GameHub"]
};

// ---------- ACHIEVEMENTS ----------
// type: "game" or "school".  unlocked: true = earned, false = still a goal!
const ACHIEVEMENTS = [
  { icon: "⛏️", type: "game",   unlocked: true,  title: "First Big Build",   desc: "Built my first huge house in Minecraft." },
  { icon: "👹", type: "game",   unlocked: true,  title: "Boss Slayer",       desc: "Beat a really hard boss fight." },
  { icon: "🕹️", type: "game",   unlocked: true,  title: "Retro Explorer",    desc: "Finished a classic N64 or PS1 game." },
  { icon: "📚", type: "school", unlocked: true,  title: "Homework Hero",     desc: "Finished homework before game time for a whole week." },
  { icon: "🔬", type: "school", unlocked: true,  title: "Science Fair Star", desc: "Made a science project I am proud of." },
  { icon: "🏅", type: "school", unlocked: false, title: "Honor Roll",        desc: "Goal: get honors this school year!" },
  { icon: "🏆", type: "game",   unlocked: false, title: "Tournament Winner", desc: "Goal: win a game tournament with friends." },
  { icon: "🌟", type: "school", unlocked: false, title: "Perfect Quiz",      desc: "Goal: get 100% on a quiz." }
];

// ---------- GAME GALLERY ----------
// game: must be one of the names in PROFILE.games above (it makes the filter buttons)
const GALLERY = [
  { game: "Minecraft", title: "My Mountain Base", image: "images/minecraft1.png", note: "I dug this base inside a mountain. It has a secret door!" },
  { game: "Minecraft", title: "Castle Project",   image: "images/minecraft2.png", note: "Took me three days to build." },
  { game: "Roblox",    title: "Obby Complete",    image: "images/roblox1.png",    note: "I finally beat the hardest obstacle course." },
  { game: "Fortnite",  title: "Victory Royale",   image: "images/fortnite1.png",  note: "A win with my squad!" },
  { game: "God of War Ragnarök", title: "Epic Fight", image: "images/gow1.png",   note: "Favorite scene in the whole game." },
  { game: "Retro (N64, PS1, PS2)", title: "Old School Fun", image: "images/retro1.png", note: "Classic games are still awesome." }
];

// ---------- BLOG ----------
// Newest post goes FIRST. Use \n\n to start a new paragraph.
const POSTS = [
  { date: "2026-10-25", tag: "School + Games", title: "How I play games AND get good grades",
    text: "Here is my secret: I treat school like a game too.\n\nHomework is my daily quest. Quizzes are mini bosses. Report cards are my final level score. When I finish my quests first, I get to play with a happy mind and no worries.\n\nGames also taught me things: patience, teamwork, and never giving up after losing many times." },
  { date: "2026-10-20", tag: "Minecraft", title: "My best Minecraft build so far",
    text: "I built a castle with towers and a bridge. The hardest part was the roof!\n\nI learned that planning first, like drawing on paper, makes building so much easier. Same thing works for school projects." }
];

// ---------- SCHOOL ----------
// score is 0 to 100 (it fills the power bar). Change the numbers and subjects.
const SUBJECTS = [
  { icon: "➗", name: "Math",    score: 90 },
  { icon: "🔬", name: "Science", score: 95 },
  { icon: "📖", name: "English", score: 88 },
  { icon: "🎨", name: "Art",     score: 92 }
];

const PROJECTS = [
  { icon: "🌋", subject: "Science", title: "Volcano Experiment", image: "", text: "I made a volcano erupt using baking soda and vinegar, then explained why it happens." },
  { icon: "🖍️", subject: "Art",     title: "Pixel Art Poster",   image: "", text: "I drew my favorite game hero as pixel art on graph paper." }
];

// ---------- BALANCE: how games help school ----------
const BALANCE = {
  skills: [
    { game: "Strategy and planning", school: "Math and problem solving" },
    { game: "Reading quest text",    school: "English and understanding stories" },
    { game: "Teamwork in squads",    school: "Group projects" },
    { game: "Retrying a hard boss",  school: "Studying for tough tests" }
  ],
  rules: [
    "Homework first, then game time.",
    "Study 30 minutes before every quiz.",
    "Sleep on time. Tired heroes lose battles.",
    "Say yes to family time and chores."
  ]
};