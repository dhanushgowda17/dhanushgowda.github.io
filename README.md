<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/45d37f20-15d7-4306-b13c-089aa90daee9

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Pages deployment

This repository includes a GitHub Actions workflow that builds the Vite app and publishes the `dist` folder to the `gh-pages` branch on every push to `main`.

Notes:
- The workflow is at `.github/workflows/deploy.yml`.
- Vite's `base` is set to `./` in `vite.config.ts` so the built site will work when served from GitHub Pages.
- After the first successful run, enable Pages in the repository settings (if not already) to serve from the `gh-pages` branch.

If you'd rather deploy manually, run:

```bash
npm ci
npm run build
# then push the contents of `dist/` to your gh-pages branch (or use a deploy tool)
```
