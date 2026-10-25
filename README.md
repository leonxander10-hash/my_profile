# 🎮 My Gamer Profile

> *Gamer by day. Top student always.*

My personal website! I'm a 10-year-old gamer and student. Here you can see my game screenshots, my blog, my school projects, and how I show that **you can love games AND do great in school.**

🌐 **Visit it:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
*(replace with your real link after publishing)*

---

## ✨ Cool Stuff on This Site

- **Parallax hero:** my photo, name, and glowing orbs move at different speeds when you scroll or move the mouse, so it looks 3D.
- **Full-screen sections** that gently snap into place as you scroll.
- **Side dot menu** that lights up for the section you're in.
- **Glass panels** with glowing edges, and a glow that follows the mouse.
- **Sparkles** floating up the whole page.
- **Favorite Games** cards that drift by themselves and speed up when you scroll.
- **Gallery** with filter buttons and a big picture viewer (use the arrow keys!).
- **Achievements** with a level bar, where locked goals turn on when you unlock them.
- **Blog**, **school stats**, and **projects**.

---

## 📁 My Files

```
my-profile/
├── index.html   ← the look and animations
├── data.js      ← ALL my words, grades, and pictures. Edit this one!
├── README.md    ← this file
└── images/      ← my photos and screenshots go here
```

**Rule of thumb:** to change *what the site says*, edit `data.js`. To change *how it looks or moves*, edit `index.html`.

---

## 🗺️ Where Do I Change Things? (data.js)

Open `data.js` in Notepad or any text editor. Keep the `"quotes"` and `,` commas exactly where they are.

| I want to change... | Look for this in `data.js` |
|---------------------|----------------------------|
| My name | `name:` inside `PROFILE` |
| My tagline (under my name) | `tagline:` |
| My school, grade, age | `school:`, `grade:`, `age:` |
| The "About Me" text | `about:` |
| My list of games (also makes the moving cards and gallery buttons) | `games:` |
| Achievements | `ACHIEVEMENTS` |
| Game screenshots | `GALLERY` |
| Blog posts | `POSTS` |
| Grades and power bars | `SUBJECTS` |
| School projects | `PROJECTS` |
| How games help school, and my rules | `BALANCE` |

> 💡 **Tip:** Press `Ctrl + F` (or `Cmd + F` on Mac) and type the word in the table to jump straight to it.

---

## 🖼️ Make My Profile Photo Look Right

Your photo lives in `images/me.jpg`. If it looks cut off, you can move and zoom it **without editing the picture**. In `data.js`, find these lines:

```js
avatar: "images/me.jpg",
avatarPos: "50% 50%",   // moves the photo inside the circle
avatarZoom: 1,          // zooms the photo
```

- **`avatarPos`** is `"left% top%"`.
  - Show more of the top: `"50% 20%"`
  - Show more of the bottom: `"50% 80%"`
  - Show more of the left: `"20% 50%"`
  - Show more of the right: `"80% 50%"`
- **`avatarZoom`**: `1` is normal, `1.2` is a little closer, `1.5` is very close. Don't go below `1`, or gaps can show.
- **New photo?** Save it in `images/` and change the name in `avatar:`.
- **No photo?** Set `avatar: ""` and a 🎮 icon shows instead.

After each change, save and refresh your browser to see it.

---

## 🏆 Quick Recipes

### Add a game screenshot
1. Save the picture in `images/` (example: `minecraft3.png`).
2. Copy one line inside `GALLERY` and change it:
```js
{ game: "Minecraft", title: "My New Build", image: "images/minecraft3.png", note: "Tell the story!" },
```
The `game` name must match a name in `PROFILE.games` so the filter buttons work.

> 🌟 The **first** picture in `GALLERY` also becomes the dark background of the top of the page. Pick your best one first!

### Write a blog post
Copy a post inside `POSTS` and paste it at the **top** (newest first):
```js
{ date: "2026-11-01", tag: "Roblox", title: "My post title",
  text: "First paragraph.\n\nSecond paragraph." },
```
`\n\n` starts a new paragraph.

### Unlock an achievement
Change `unlocked: false` to `unlocked: true`. Your level goes up!

### Add a school project picture
In `PROJECTS`, set `image: "images/volcano.jpg"` after saving the picture in `images/`.

---

## 🎨 Change the Look and Motion (index.html)

Open `index.html` and use `Ctrl + F` to find these:

| I want to... | Search for | What to do |
|--------------|-----------|------------|
| Change the main colors | `--c:` and `--g:` | Replace the color codes. `--c` is the glowing blue, `--g` is the gold. Try a color picker website to get codes like `#ff5ea8`. |
| Change the dark background | `--bg:` | Pick another dark color. |
| Make the game cards move faster or slower | `drift+=` | `.5` is normal. Try `1` for fast or `.2` for slow. |
| Make cards react more to scrolling | `sy*.7` | Bigger number means faster. |
| Make the hero parallax stronger or weaker | `mx*d*60` | Change `60` to `100` for stronger or `20` for gentle. |
| Change how many sparkles | `length:75` | Try `150` for more or `30` for fewer. |
| Stop sections from snapping | `scroll-snap-type` | Change `y proximity` to `none`. |
| Change the fonts | `family=Cinzel` | Pick fonts at fonts.google.com and swap the names. |

> ⚠️ Change **one thing at a time** and test it. If something breaks, undo the last change.

---

## 🚀 Put It Online (GitHub Pages)

1. Ask a parent to help you make a free account at [github.com](https://github.com).
2. Click **New repository**, name it `my-profile`, and make it **Public**.
3. Click **Add file → Upload files** and drag in `index.html`, `data.js`, `README.md`, and your `images` folder.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Branch*, pick `main` and click **Save**.
6. Wait 1 to 2 minutes. Your link will appear at the top of that page! 🎉

**To update later:** open `data.js` on GitHub, click the ✏️ pencil, make your change, and click **Commit changes**.

---

## 🛠️ Something Not Working?

| Problem | Fix |
|---------|-----|
| The page is blank or plain | You probably deleted a quote `"` or a comma `,` in `data.js`. Undo your last change. |
| My picture doesn't show | Check the file name and spelling. `Me.jpg` and `me.jpg` are different on GitHub! |
| A gallery button is missing | The `game` name in `GALLERY` must match one in `PROFILE.games`. |
| My changes don't show online | Wait 2 minutes, then refresh with `Ctrl + Shift + R`. |

---

## 🛡️ Stay Safe Online

- Use a **gamer name** instead of your full name if you can.
- Don't post your address, phone number, or other private info.
- Ask a parent before you put face photos online, and let them check screenshots too. Some games are for older players.
- Never share passwords. Ever. 🔐

---

## 🧰 Built With

- **HTML**, **CSS**, and **JavaScript** (no frameworks)
- Fonts: *Cinzel* and *Outfit* from Google Fonts
- Hosted free on **GitHub Pages**

---

**GAME ON, STUDY ON.** 🕹️📚