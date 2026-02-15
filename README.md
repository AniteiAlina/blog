# Piwi.ai Blog

Static blog built with **Vite + React**, deployed to **GitHub Pages**.

Live at: [blog.piwi.ai](https://blog.piwi.ai)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
```

---

## Adding a New Blog Post

### 1. Write the markdown file

Create a new `.md` file in `public/posts/`:

```
public/posts/my-new-post-slug.md
```

Write your content using standard Markdown. GFM features (tables, strikethrough, etc.) are supported.

### 2. Register the post in `posts.json`

Add a new entry **at the top** of `src/data/posts.json`:

```json
[
    {
        "slug": "my-new-post-slug",
        "title": "My New Post Title",
        "date": "2026-03-01",
        "excerpt": "A short description that appears in the blog listing and SEO."
    },
    ...existing posts
]
```

> **Important:** The `slug` must match the markdown filename (without `.md`).

### 3. Add the prerender route (for SEO)

Open `vite.config.js` and add the new blog slug to the `routes` array:

```js
routes: [
    '/',
    '/blog',
    '/blog/my-new-post-slug',   // ← add this
    ...existing routes
],
```

### 4. Test locally

```bash
npm run dev
```

Open `http://localhost:5173/blog/my-new-post-slug` to preview.

### 5. Deploy

Push to `main` and GitHub Actions will automatically build and deploy.

---

## Project Structure

```
blog/
├── public/
│   ├── posts/              # Markdown blog post files
│   ├── 404.html            # SPA redirect for GitHub Pages
│   ├── CNAME               # Custom domain (blog.piwi.ai)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── posts.json      # Blog post metadata (add new posts here)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   └── BlogPost.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deploy workflow
├── index.html
├── package.json
└── vite.config.js
```

---

## Deployment

The site auto-deploys on every push to `main` via GitHub Actions.

**Setup required (one-time):**
1. Go to repo **Settings → Pages → Source** → select **GitHub Actions**
2. Point `blog.piwi.ai` DNS CNAME to `<org>.github.io`
