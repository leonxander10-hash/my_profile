# 🎮 PLAYER ONE: My Gamer Profile

```
 ____  _____ ____ ____  _____ ____ ____  _____
|  _ \| ____/ ___/ ___||_   _|  _ \_   _|| ____|
| |_) |  _| \___ \___ \  | | | |_) || |  |  _|
|  __/| |___ ___) |__) | | | |  _ < | |  | |___
|_|   |_____|____/____/  |_| |_| \_\|_|  |_____|

          >>> PRESS START TO EXPLORE <<<
```

Welcome to my personal website! I'm a 10-year-old gamer and student. This is where I share my game screenshots, my blog, my school projects, and proof that **you can love games AND do great in school.**

🌐 **Play it here:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
*(replace with your real link after publishing)*

---

## 🕹️ What's Inside

| Level | What you'll find |
|-------|------------------|
| 🧑 **About Me** | Who I am and the games I play |
| 🏆 **Achievements** | Unlocked badges and locked goals, with a level bar that fills up |
| 🖼️ **Game Gallery** | Screenshots with filter buttons and a big picture viewer |
| 📝 **Blog** | My posts about games, school, and life |
| 📚 **School Stats** | Power bars for my favorite subjects, plus fun projects |
| 🤝 **Gamer + Top Student** | How gaming skills help me at school, and my Player Rules |

---

## 📁 Files

```
my-profile/
├── index.html    ← the look of the site (you don't need to touch this)
├── data.js       ← ALL my content lives here. Edit this one!
├── README.md     ← this file
└── images/       ← my screenshots, avatar, and project photos go here
```

---

## ✏️ How to Change My Site

Everything you see is controlled by **`data.js`**. Open it in any text editor (Notepad works!) and change the words between the quote marks.

> ⚠️ Keep the **quotes** `" "` and **commas** `,` exactly where they are. A missing comma can break the page.

### Change my name, grade, and school
Edit the `PROFILE` section at the top.

### Add a game screenshot
1. Save the picture into the `images` folder (example: `minecraft3.png`).
2. In `data.js`, copy one line inside `GALLERY` and change it:

```js
{ game: "Minecraft", title: "My New Build", image: "images/minecraft3.png", note: "Tell the story here!" },
```

> The `game` name must match a name in `PROFILE.games` so the filter buttons work.

### Write a new blog post
Copy a post inside `POSTS` and paste it at the **top** (newest first):

```js
{ date: "2026-11-01", tag: "Roblox", title: "My post title",
  text: "First paragraph.\n\nSecond paragraph." },
```

### Unlock an achievement 🏅
Find the achievement and change `unlocked: false` to `unlocked: true`. Your level goes up!

### Update my grades
Change the numbers (0 to 100) in `SUBJECTS`. The power bars update on their own.

---

## 🚀 Put It Online (GitHub Pages)

1. Ask a parent to help you make a free account at [github.com](https://github.com).
2. Click **New repository**, name it something like `my-profile`, and make it **Public**.
3. Click **Add file → Upload files** and drag in `index.html`, `data.js`, `README.md`, and your `images` folder.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Branch*, choose `main` and click **Save**.
6. Wait 1 to 2 minutes. Your website link will appear at the top of that page! 🎉

**To update later:** open `data.js` on GitHub, click the ✏️ pencil, make your change, and click **Commit changes**. The site updates in a minute or two.

---

## 🧪 Test It on Your Computer

Just double-click `index.html`. It opens in your browser, so you can check your changes before uploading.

---

## 🛡️ Stay Safe Online

- Use a **gamer name** instead of your full name if you can.
- Don't post your address, phone number, or face photos without your parents saying yes.
- Let a parent check screenshots before they go online. Some games are for older players.
- Never share passwords. Ever. 🔐

---

## 🧰 Built With

- **HTML**, **CSS**, and **JavaScript** (no frameworks, just the basics)
- Pixel fonts: *Press Start 2P* and *VT323* from Google Fonts
- Hosted free on **GitHub Pages**

---

## 🎯 My Player Rules

- ✅ Homework first, then game time
- ✅ Study 30 minutes before every quiz
- ✅ Sleep on time. Tired heroes lose battles
- ✅ Family time and chores always count

---

**GAME ON, STUDY ON.** 🕹️📚