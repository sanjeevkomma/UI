# ToRead

# What is Next.js?
* Next.js is a React framework used to build fast, SEO-friendly web applications
* React + Routing + Server Rendering + API support + Performance optimizations
* It’s built and maintained by **Vercel**

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

# Why Next.js (Why not plain React)?
| Feature      | React (CRA/Vite)      | Next.js                   |
| ------------ | --------------------- | ------------------------- |
| Routing      | Manual (React Router) | **File-based (built-in)** |
| SEO          | Poor (CSR only)       | **Excellent (SSR/SSG)**   |
| Performance  | Needs tuning          | **Optimized by default**  |
| Backend APIs | Separate backend      | **Built-in API routes**   |
| Rendering    | Client-Side           | **CSR + SSR + SSG + ISR** |

# Key Features
**1. File-based Routing**
* No need for React Router.
* <img width="994" height="683" alt="image" src="https://github.com/user-attachments/assets/e4151d04-b5f9-404d-baf8-c32854330518" />

**2. App Router (Modern Next.js)**
* Next.js 13+ uses App Router (recommended).
  * app/ instead of pages/
  * Uses React Server Components
  * Better performance & streaming

**3. Rendering Types**
| Type    | Meaning                         | Use case        |
| ------- | ------------------------------- | --------------- |
| **SSR** | Server-Side Rendering           | Dynamic content |
| **SSG** | Static Site Generation          | Blogs, docs     |
| **ISR** | Incremental Static Regeneration | Content updates |
| **CSR** | Client-Side Rendering           | Dashboards      |

* <img width="745" height="402" alt="image" src="https://github.com/user-attachments/assets/af51699e-8005-42af-90eb-a0cbc54b63c0" />
* <img width="914" height="436" alt="image" src="https://github.com/user-attachments/assets/46959c10-9416-4fd2-bee1-487af98e18e3" />



 
# Terminology

# Reference
* [NEXT.js Official](https://nextjs.org/)
