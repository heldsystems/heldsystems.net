# Joe Held – Portfolio Website (Static HTML Version)

This is the static HTML version of my personal portfolio site, designed as the foundation for a future conversion into a dynamic, modern web application.

---

## 🧱 Purpose

This site showcases:
- My professional resumes (AV Engineer, Systems Engineer, CAD Designer, Technical Writer)
- A unified landing page for navigation
- Planned expansion into a full portfolio with blog, services, project documentation, and case studies

The static version is intentionally designed to demonstrate:
- Clear semantic HTML
- Responsive design without frameworks
- Best practices in URL structure and page organization
- A future-facing layout that can be cleanly migrated into a modern stack

---

## 🗂️ File/Folder Structure

```
/html/
├── about/              → About/Bio page (coming soon)
/│   └── index.html
├── blog/               → Blog hub (planned)
/│   └── index.html
├── contact/            → Contact form/info (planned)
/│   └── index.html
├── projects/           → Projects or case studies (planned)
/│   └── index.html
├── resumes/            → Index page linking to each resume variant (planned)
/│   └── index.html
├── av-engineer/        → HTML version of AV-focused resume
/│   └── index.html
├── systems-engineer/   → HTML version of Systems Engineering resume
/│   └── index.html
├── cad-designer/       → HTML version of CAD resume
/│   └── index.html
├── technical-writer/   → HTML version of Tech Writing resume
/│   └── index.html
└── portfolio.html      → Main landing page with nav + links to resume pages
```

---

## 💡 Design Philosophy

- **Semantic HTML**: All pages are built with accessibility and structure in mind
- **Clean URLs**: Folder-based routing ensures future compatibility with SSGs and SPAs
- **Minimal CSS/JS**: Custom styling using vanilla CSS to avoid premature tooling
- **Mobile-First Layouts**: Fully responsive without relying on frameworks

---

## 🚀 Future Plan: Static → Dynamic

Once the static build is fully documented and published, I plan to convert the site into a dynamic single-page or multi-page webapp using:

- **Framework**: Next.js or Astro (TBD)
- **Styling**: TailwindCSS or CSS Modules
- **Content**: Markdown-based blog and CMS-backed portfolio pages
- **Hosting**: Netlify or Vercel with CI/CD pipeline

This README will track that process as it evolves into a case study for my portfolio.

---

## 🛠️ Todo

- [ ] Flesh out `/about/`, `/projects/`, and `/contact/`
- [ ] Finalize a blog post format and structure
- [ ] Implement light/dark mode toggle
- [ ] Document static → dynamic conversion process

---

## 📌 Notes to Self

- Keep header/footer structure modular for easy migration
- Maintain semantic tags (`<article>`, `<section>`, `<nav>`, etc.)
- Track internal links and anchor behavior for conversion compatibility
- Use consistent naming conventions across folders and classes

---

*Last updated: May 2025*
