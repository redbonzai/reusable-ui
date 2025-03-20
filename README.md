# **USGOV UI COMMON**

This project is a **library of reusable Angular components** designed for consistent UI across multiple applications. It provides a **common header and sidebar** along with other shared UI elements to ensure a unified experience across government applications.

---

## **📖 Table of Contents**
1. [Development Setup](#development-setup)
2. [Code Scaffolding](#code-scaffolding)
3. [Building the Project](#building-the-project)
4. [Running Tests](#running-tests)
5. [Publishing to JFrog Registry](#publishing-to-jfrog-registry)
6. [Sidebar and Header Documentation](#sidebar-and-header-documentation)
7. [Additional Resources](#additional-resources)

---

## **🚀 Development Setup**
To set up the development environment and run the application locally, follow these steps:

### **1️⃣ Clone the Repository**
```bash
git clone <repository-url>
cd usgov-ui-common
```

### **2️⃣ Install Dependencies**
Make sure you have **Node.js (>=22.x, preferably LTS 20.x)** and **Angular CLI (>=19.1.4)** installed. Then, run:
```bash
npm install
```

### **3️⃣ Start the Development Server**
To launch the application, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## **📌 Code Scaffolding**
To generate a new component, use:
```bash
ng generate component component-name
```
For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
```bash
ng generate --help
```

---

## **🏗️ Building the Project**
To build the project, run:
```bash
ng build
```
This compiles the project and stores the build artifacts in the `dist/` directory. By default, the production build optimizes for performance and speed.

If you are building the **UI library** instead of the full application, run:
```bash
ng build ui-common
```
This will generate the **library package** inside `dist/ui-common/`, ready for publishing.

---

## **🧪 Running Tests**
### **Unit Tests**
To execute unit tests using [Karma](https://karma-runner.github.io), run:
```bash
ng test
```

### **End-to-End Tests**
For end-to-end (e2e) testing, run:
```bash
ng e2e
```

---

## **📦 Publishing to JFrog Registry**
When you make updates to the `ui-common` package, you need to **build and publish the new version to JFrog**.

### **1️⃣ Set Up JFrog Credentials**
Before publishing, you must authenticate with the JFrog registry. If you haven't already, configure NPM to use JFrog:

```bash
npm config set registry <JFROG_REGISTRY_URL>
npm login
```
- Replace `<JFROG_REGISTRY_URL>` with the URL of your JFrog registry.
- Enter your **username** and **password/API token** when prompted.

---

### **2️⃣ Bump the Version**
Each update requires a new version number. Update the **version** in `projects/ui-common/package.json`:

```json
{
  "name": "@lnx-le/ui-common",
  "version": "0.0.2",  // Increment this version
  "description": "A library of reusable Angular components for USGOV applications"
}
```
🚀 **Use `npm version` to automatically bump versions:**
```bash
npm version patch   # For small fixes
npm version minor   # For backward-compatible feature additions
npm version major   # For breaking changes
```


```
### If Changing Tokens
---

### **3️⃣ Build the Package**
Run the following to generate the `dist/ui-common/` directory:
```bash
ng build ui-common
```

---

### **4️⃣ Publish to JFrog**
💡 We are using **Scoped Packages (`@lnx-le/ui-common`)**, you may need to **set the scope manually**:
```bash
npm config set @lnx-le:registry https://useast.jfrog.lexisnexisrisk.com/artifactory/api/npm/govweb-npm-dev-us
```
Login to the Registry: 
```bash
  npm login --registry=https://useast.jfrog.lexisnexisrisk.com/artifactory/api/npm/govweb-npm-dev-us/
```
  
Navigate into the **built package** directory:
```bash
cd dist/ui-common
```
Then publish the package to JFrog:
```bash
npm publish --registry=<REGISTRY_URL>
```
**Example:**
```bash
npm publish --registry=https://useast.jfrog.lexisnexisrisk.com/artifactory/api/npm/govweb-npm-dev-us/
```


---

### **5️⃣ Verify the Published Package**
After publishing, check the JFrog registry to confirm the package was uploaded successfully.

---

### **6️⃣ Install the Updated Package**
Once the package is published, developers can install the latest version:
```bash
npm install @lnx-le/ui-common@latest
```

---

## **📖 Sidebar and Header Documentation**
This project includes a **common header and sidebar** for consistent UI navigation. To learn more about their usage, customization, and integration, refer to the [Sidebar and Header Guide](src/lib/components/SidebarHeader.md).

---

## **📚 Additional Resources**
For more information on using Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---

### **✅ Summary of JFrog Publishing**
| **Step** | **Command** |
|----------|------------|
| **Set up JFrog credentials** | `npm login` |
| **Update package version** | `npm version patch` |
| **Build the library** | `ng build ui-common` |
| **Navigate to built package** | `cd dist/ui-common` |
| **Publish to JFrog** | `npm publish --registry=<JFROG_REGISTRY_URL>` |
| **Verify package on JFrog** | Manually check in the UI |
| **Install latest package** | `npm install @lnx-le/ui-common@latest` |

🚀 **Now, every time you make updates to `ui-common`, just follow these steps to publish the latest version to JFrog!** 🚀
