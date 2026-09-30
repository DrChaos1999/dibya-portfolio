# Dibya Joy Paul — AI Engineering & Robotics Portfolio

A responsive React + Vite personal website built from **two CVs**, spanning AI applications, robotics, research, skills, education, and professional experience.

## Prerequisites

- Node.js **20.19+** (Node.js 22 LTS works)
- npm (installed with Node.js)
- Git (for deployment)
- VS Code is optional

**A Python environment is not needed** for this React website.

## Run on Windows (PowerShell or VS Code terminal)

1. Download and extract the ZIP.
2. Open the extracted **`dibya-portfolio` folder** in VS Code, or use PowerShell:

```powershell
cd "C:\path\to\dibya-portfolio"
```

3. Install dependencies (first time only):

```powershell
npm install
```

4. Start the development server:

```powershell
npm run dev
```

5. Open **http://127.0.0.1:5173/**. If Vite prints a different port, use that address.
6. Stop with **Ctrl+C**.

You can also double-click `RUN-WINDOWS.bat` after Node.js has been installed. It installs missing dependencies and starts the server.

## Test the production build

```powershell
npm run build
npm run preview
```

The production website lives in `dist/` after `npm run build`.

## File layout

```text
.
├── .github/workflows/deploy.yml  GitHub Pages deployment action
├── public/
│   ├── icon.svg                 Favicon
│   └── resumes/
│       ├── ai-engineering.pdf   Your Sep 2026 AI CV
│       └── robotics.pdf         Your uploaded robotics résumé
├── src/
│   ├── App.jsx                  Site sections and interactive project dialog
│   ├── data.js                  EDIT YOUR DETAILS HERE
│   ├── main.jsx                 React entry point
│   └── styles.css               Responsive visual design
├── .gitignore
├── index.html
├── package.json
├── package-lock.json           Created later by npm install (not bundled)
├── vite.config.js
├── RUN-WINDOWS.bat
└── README.md
```

## Personalize the website

Edit `src/data.js`. It holds the `person`, `projects`, `research`, `education`, `experience` and `skills` arrays. Most changes do not require touching React components.

**Project links:** For project-specific URLs you can verify, set `repoUrl` to the actual address. Entries with `repoUrl: ''` deliberately show “Code link pending” instead of linking to a nonexistent repository.

**Both CVs are included** in `public/resumes/` and work through the AI and Robotics download buttons. Update either PDF by replacing it with another PDF of **the same filename**.

**Public contact/privacy note:** CV PDFs contain personal contact information; because GitHub Pages is public, anyone can download these PDFs. Replace them with redacted public versions if you prefer.

**Before job applications:** Confirm all dates, project descriptions, research status, and quantitative claims. In particular, check your thesis dates across both CVs and add actual hardware photos and test results as appropriate.

## Deploy for free — GitHub Pages

### 1. Create repository

Create a new empty, public repository named **`dibya-portfolio`** under `DrChaos1999` at https://github.com/new.

Do not initialize it with another README or license.

### 2. Push files

In PowerShell, from the `dibya-portfolio` folder:

```powershell
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/DrChaos1999/dibya-portfolio.git
git push -u origin main
```

These commands assume a new local repository with no existing `origin` remote. If a remote already exists, do not repeat `git remote add origin`; inspect it with `git remote -v`.

### 3. Enable Pages

1. Open repository **Settings > Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as Source.
3. Open **Actions** and check the “Deploy portfolio to GitHub Pages” workflow.
4. When it succeeds, visit:

**https://DrChaos1999.github.io/dibya-portfolio/**

The supplied workflow sets the Vite base URL correctly for a GitHub Project Page, installs dependencies with npm, builds the website, and uploads `dist/`. Running `npm install` on your PC generates `package-lock.json`; commit it for reproducibility, if available.

**Note:** GitHub Pages availability and feature restrictions are controlled by GitHub’s current plan/repository rules. Public repository Pages is the expected no-cost setup.

## Alternative deployment — Vercel

1. Push the repository to GitHub (as above).
2. Sign in at https://vercel.com/ and choose **Add New > Project**.
3. Import `dibya-portfolio`.
4. Use framework **Vite**, build command **`npm run build`**, and output directory **`dist`**.
5. Click Deploy.

`vite.config.js` defaults to root `/` for Vercel; no special env vars are needed for a basic static deployment.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `npm` is not recognized | Install Node.js, reopen the terminal, run `node --version`. |
| Cannot find `package.json` | You are in the wrong folder. `cd` into the folder containing it. |
| Port 5173 is taken | Use the alternate local port Vite prints. |
| CV download gives 404 | Confirm exact filenames in `public/resumes/`, then rebuild/deploy. |
| GitHub Pages shows a blank screen | Confirm Pages uses GitHub Actions and workflow has `GITHUB_PAGES=true`; examine the Actions logs. |
| `git remote add origin` fails | `origin` exists; inspect `git remote -v` and change it only if needed. |
| Fonts don't load offline | Site still works with system fonts; Google Fonts needs internet. |
| A project has no GitHub icon | Its exact `repoUrl` is intentionally unverified; add it in `src/data.js`. |

## License

This repository includes the author's personal information and CVs. No license to reuse that personal content is granted by default.
