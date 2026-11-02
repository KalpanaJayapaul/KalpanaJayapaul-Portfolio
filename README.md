# Kalpana J — React Portfolio

## Start the correct project folder

1. Extract this ZIP.
2. Open the extracted `Kalpana_Premium_React_Portfolio` folder itself in VS Code.
3. Open a terminal in that folder. Confirm it contains `package.json`, `vite.config.js`, and `src/App.jsx`.
4. Run:

```bash
npm install
npm run dev
```

5. Open the exact `http://localhost:5173/` URL printed in the terminal.
6. Edit `src/App.jsx` or `src/styles.css` and press `Ctrl + S`. Vite should refresh the page automatically.

## If changes still do not appear

- Stop every running Vite terminal with `Ctrl + C`.
- In VS Code, use **File → Open Folder** and open this extracted project folder.
- Run `npm run dev` again from that folder.
- Hard-refresh the browser with `Ctrl + Shift + R`.
- If port 5173 is already occupied, Vite may print a different port. Open the exact URL it prints.

## Where to edit

- `src/App.jsx`: text, skills, projects, experience, education, contact links.
- `src/styles.css`: colors, typography, spacing, responsive layout.
- `public/profile.jpg`: profile photo.

The Vite configuration enables file polling to improve change detection and uses `/` as the local development base path. The GitHub Pages base path is retained for production builds.
