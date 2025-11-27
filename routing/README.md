### **1. Default Page and Error Handling** 🏠

- A new Next.js app automatically generates a **home page**.
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