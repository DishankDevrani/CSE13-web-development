# Learnly — Udemy Clone

A small online-course marketplace built with React, Vite, and React Router. Browse courses,
filter by category, search, view a course detail page, and add courses to a cart.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/    Navbar, CourseCard, Footer — reusable UI pieces
  context/       CartContext — cart state shared across the app
  data/          Mock course dataset (courses.js)
  pages/         Home, CourseList, CourseDetail, Cart, NotFound
  App.jsx        Route definitions
  main.jsx       App entry point
```

## What's implemented

- Home page with hero, category chips, and featured courses
- Course listing with search (via URL query param `q`), category filter, and sorting
- Course detail page with outcomes, stats, tags, and an "Add to cart" purchase card
- Cart page with remove/clear and a running total
- Responsive layout down to mobile, with a slide-down mobile nav

## Where to extend next

- **Real data**: swap `src/data/courses.js` for calls to a backend (Express/Node, Firebase,
  Supabase) or a CMS.
- **Auth**: add a login/signup flow (e.g. with Firebase Auth or your own JWT-based API) — gate
  "Add to cart" / checkout behind it.
- **Video playback**: a lesson player page (`/course/:id/learn`) with a video element and a
  sidebar of lecture sections.
- **Checkout**: wire the Cart page's "Checkout" button to Stripe Checkout or another payment
  provider.
- **Reviews & Q&A**: add tabs on the course detail page for reviews and a discussion board.
- **Persistence**: currently the cart resets on refresh (in-memory state only). Add
  `localStorage` or a backend cart table to persist it.
