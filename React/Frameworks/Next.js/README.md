# ToRead

# What is Next.js?
* Next.js is a React framework used to build fast, SEO-friendly web applications
* React + routing + performance + backend features out of the box
* It’s built and maintained by Vercel

# Why do we use Next.js?
* Problems with plain React (SPA)
  * Slow first page load
  * Poor SEO (content rendered only in browser)
  * Manual setup for routing, performance, and API calls

# What Next.js solves
* Faster load times
* Better SEO
* File-based routing
* Backend APIs inside frontend app
* Easy deployment

# Key Features
1. File-based Routing

# Next.js Basics

## 1. What is Next.js?

**Next.js** is a **React framework** used to build **fast, scalable, and
SEO-friendly web applications**.

It provides everything needed to build production-ready React apps, such
as routing, rendering strategies, backend APIs, and performance
optimizations.

Maintained by **Vercel**.

------------------------------------------------------------------------

## 2. Why use Next.js?

### Problems with plain React (SPA)

-   Slow initial page load
-   Poor SEO (content rendered only in browser)
-   Manual setup for routing and performance
-   No built-in backend support

### What Next.js solves

-   Faster page loads
-   SEO-friendly rendering
-   File-based routing
-   Backend APIs within the same project
-   Easy deployment

------------------------------------------------------------------------

## 3. Core Features

### 3.1 File-based Routing

Routes are created automatically using folders.

    app/page.js          → /
    app/about/page.js    → /about

------------------------------------------------------------------------

### 3.2 Rendering Types

  Type   Description                       Use Case
  ------ --------------------------------- ------------------
  SSR    Server-Side Rendering             Dynamic pages
  SSG    Static Site Generation            Blogs, docs
  ISR    Incremental Static Regeneration   Periodic updates
  CSR    Client-Side Rendering             Dashboards

------------------------------------------------------------------------

### 3.3 App Router (Next.js 13+)

Modern routing system with better performance.

    app/
     ├── layout.js
     ├── page.js
     ├── loading.js
     ├── error.js

------------------------------------------------------------------------

### 3.4 Server Components

-   Run on the server
-   Reduce JavaScript sent to browser
-   More secure

------------------------------------------------------------------------

### 3.5 API Routes

Create backend APIs inside Next.js.

------------------------------------------------------------------------

## 4. How Next.js is Used

### Create an app

``` bash
npx create-next-app@latest my-app
```

------------------------------------------------------------------------

## Summary

Next.js helps build fast, scalable, and SEO-friendly web applications.


 
# Terminology

# Reference
* [NEXT.js Official](https://nextjs.org/)
