# Nested Routing with App Router

### **1. Nested Routing Concept & Scenario** 📂

- **Definition:** Nested routing means creating routes that are sub-paths of other routes (e.g., `/services/web-dev` where `web-dev` is nested under `services`).
- **Example Scenario:** A "Technical Agency" website with a main `/services` page listing services like App Development, Web Development, SEO, and Design. Each service will then have its own dedicated nested page (e.g., `/services/web-dev`).

---

### **2. Implementing Nested Routes (Directory Structure)** ➡️

- To create a nested route, you create a **new folder inside the parent route's folder**.
    - **Example:** For `/services/web-dev`, you would create a `web-dev` folder inside the `services` folder.
- Inside this new nested folder (e.g., `web-dev`), you place a **`page.js` file** (or `.jsx`/`.tsx`).
- This `page.js` file will contain the React component that renders the content for that specific nested route.

---

### **3. Linking to Nested Routes** 🔗

- When using the **`Link` component from `next/link`**, you must provide the **full path** to the nested route.
    - **Example:** To link to the web development page from the services page, the `href` attribute would be `/services/web-dev`.
- **Important Distinction:** Unlike some other routing libraries (like `react-router-dom`) where relative paths (e.g., `./`) might work differently, Next.js requires the **explicit, full path** for nested links .
- **Case Sensitivity:** Route paths are **case-sensitive** (e.g., `/services/SEO` will not work if the folder is named `seo`). It's a best practice to use **lowercase for route paths** .
