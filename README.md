# Pragathi Korrapati · Professional Portfolio

A static React portfolio built with Vite, Tailwind CSS, Lucide icons, and locally bundled fonts. The case studies describe work outlined in Pragathi’s résumé, with outcomes attributed to the relevant client engagements.

## Preview locally

Install Node.js 22, then run these commands from the project directory.

```sh
npm ci
npm run dev
```

Open <http://localhost:5173/-my-portfolio/>. If Vite uses a different port, use the address it prints.

To lint and preview the production bundle:

```sh
npm run lint
npm run build
npm run preview
```

Open <http://localhost:4173/-my-portfolio/>. The deployment output is in `dist/`.

## Edit the portfolio

- `src/content.js` holds client engagements, case studies, technical skills, and contact links.
- `src/App.jsx` contains the page and reusable components.
- `src/style.css` contains the design tokens, layouts, and responsive styles.
- `index.html` contains SEO and social metadata. `public/favicon.svg` supplies the favicon.

## Publish to GitHub Pages after review

1. Mark the draft pull request ready and merge it into the default branch after approving the preview.
2. In [repository Pages settings](https://github.com/Pragathikorrapati/-my-portfolio/settings/pages), choose **GitHub Actions** as the source under **Build and deployment**. This step requires repository administration access.
3. In [Actions](https://github.com/Pragathikorrapati/-my-portfolio/actions), choose **Publish portfolio to GitHub Pages** and select **Run workflow** from the default branch. The workflow uses manual dispatch so merging the source does not initiate publication.
4. Approve the `github-pages` deployment if the environment has required reviewers. The workflow summary will show the deployment URL.
5. Open <https://pragathikorrapati.github.io/-my-portfolio/> and check that styles and fonts load and that navigation, case studies, and contact links work.

If the repository is renamed, update Vite’s `base` in `vite.config.js` and the canonical and Open Graph URLs in `index.html`.
