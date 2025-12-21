### Routing : 

### **1. Default Page and Error Handling** 🏠

- A new Next.js app automatically generates  **home page**.
- Next.js provides a built-in, customizable **"404 - This page could not be found" error page** for non-existent routes

---

### **2. File-System Based Routing** 📁

- **Home Page File:** The home page content is in `page.js` (or `.jsx`/`.tsx`) directly inside the **`app` folder**
- **Creating New Pages/Routes:**
    - To create a new route (e.g., `/about`), create a **new folder with the route's name** (e.g., `about`) inside the `app` directory.
    - Inside this new folder, create a **`page.js` file** (or `.jsx`/`.tsx`) .
    - This `page.js` file must **default export a React component** that represents the page's content.
- **File Naming Conventions:**
    - For JavaScript: `page.js` or `page.jsx` .
    - For TypeScript: **`page.tsx`** (not `page.ts`) .

---

### **3. Layouts (`layout.js`)** 📐

- The **`layout.js` file** defines a common structure (like a header, footer, or sidebar) that will be applied to **all pages** within its scope .
- Page-specific content is rendered where the `{children}` prop is placed within the `layout.js` component .

---

### **4. Navigation** ➡️

- **`<a>` tag (Avoid for internal navigation):** Using a standard HTML `<a>` tag for internal navigation causes a **full page reload**.
- **`Link` Component (Recommended):**
    - Imported from `next/link`.
    - Enables **client-side navigation** without a full page reload, providing a smoother user experience.
    - Uses the `href` attribute to specify the destination path.

---
---

### Dynamic Routing : 


### **1. Understanding `props` in Next.js Components** 📦

- Every component in Next.js receives a `props` object by default.
- The `props` object contains two important properties:
    - **`searchParams`**: Holds **query parameters** from the URL (e.g., `?name=Anurag&age=98`). You need to `await` its value as it's a promise.
    - **`params`**: Holds **dynamic route parameters**. For static routes, it's initially an empty object. You also need to `await` its value.

---

### **2. Dynamic Routes: Creation and Usage** 🔄

### **2.1. What are Dynamic Routes?**

- They are used for pages with **similar structures but varying content** based on a URL parameter (e.g., `/blogs/post-1`, `/blogs/post-2`).
- Instead of creating a separate file for each piece of content (e.g., `blog/1.js`, `blog/2.js`), you create a single dynamic route.

### **2.2. How to Create Dynamic Routes**

- Create a **folder with square brackets** in its name, e.g., `[slug]` or `[blogId]`, inside your parent route folder (e.g., `app/blogs/[blogId]`).
- Inside this bracketed folder, create a **`page.js` file** .
- The name inside the square brackets (e.g., `blogId`) becomes the **key** in the `params` object.
- **Convention:** Use a plural name for the parent folder (e.g., `blogs`) and a singular, descriptive name for the dynamic segment (e.g., `[blogId]`).

### **2.3. Accessing Dynamic Route Parameters**

- Inside the `page.js` component of the dynamic route, you can access the dynamic part of the URL from the `params` object.
- Make your component **`async`** and destructure `params` from `props` (e.g., `async function Page({ params }) { ... }`).
- **Example:** If your route is `blogs/[blogId]/page.js` and the URL is `/blogs/my-first-post`, then `params` will be `{ blogId: 'my-first-post' }`.
- The `params.blogId` value can then be used to **fetch specific data** for that page (e.g., from an API or database).
- **Server Restart:** If you change the name of the dynamic segment (e.g., from `[kuchbhi]` to `[blogId]`), you might need to **restart your Next.js development server** for changes to apply.

### **2.4. Limitations**

- Dynamic routes created this way are typically **single-level**; a route like `blogs/[id]/another-segment` won't work with a simple `[id]` structure for handling `another-segment` as a dynamic part.
