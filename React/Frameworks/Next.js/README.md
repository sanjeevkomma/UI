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
* <img width="742" height="436" alt="image" src="https://github.com/user-attachments/assets/42f046c1-bf19-4b85-95fa-c0313f1b7259" />
* <img width="723" height="272" alt="image" src="https://github.com/user-attachments/assets/782cb9fb-35cb-4f66-955b-abdd38ccf7e5" />

**4. Server Components vs Client Components**
* <img width="695" height="346" alt="image" src="https://github.com/user-attachments/assets/2920d964-6f05-41d0-9d2e-3d3fd7c75a4c" />
* <img width="735" height="487" alt="image" src="https://github.com/user-attachments/assets/0e204a90-faac-47b8-81c6-d0729b8ae8ba" />

**5. Layouts & Templates**
* <img width="747" height="516" alt="image" src="https://github.com/user-attachments/assets/96d71edc-6d7b-4192-bb09-282af02a2e81" />

**6. API Routes (Backend inside Next.js)**
* <img width="703" height="396" alt="image" src="https://github.com/user-attachments/assets/41c23b74-4490-4cd7-ba1c-4e16b507dcac" />

**7. Navigation**
* <img width="703" height="471" alt="image" src="https://github.com/user-attachments/assets/d98f0acb-a3de-4712-be81-d8213586d127" />

**8. Environment Variables**
* <img width="646" height="216" alt="image" src="https://github.com/user-attachments/assets/ecc1a354-5c14-49d6-9b5d-486861288991" />

**9. Styling Options**
* <img width="646" height="167" alt="image" src="https://github.com/user-attachments/assets/4e30cc87-7cac-4ddb-aa84-39c09f4c013d" />

**10. Build & Run**
```bash
npx create-next-app
npm run dev
npm run build
npm start
```

 
# Terminology

# Reference
* [NEXT.js Official](https://nextjs.org/)
