# Common Header and Sidebar Components

This document provides an overview of the common **Header** and **Sidebar** components used in an Angular application. These components are designed to be **reusable** across multiple projects and are implemented as **standalone components**.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Sidebar Behavior](#sidebar-behavior)
4. [Manual Sidebar Toggle](#manual-sidebar-toggle)
5. [Customizing the Sidebar](#customizing-the-sidebar)

---

## Installation
These components are designed as **standalone components**, meaning they do not require a module to be imported. Simply include them in your Angular project.

---

## Usage
### Import and Use in `app.component.html`
To use the **Header** and **Sidebar** components in your application, add them to your `app.component.html` file:

```html
<app-header></app-header>
<app-sidebar></app-sidebar>

<main class="main-content">
  <router-outlet></router-outlet>
</main>
```

Ensure that the `app.component.scss` styles accommodate these components properly.

### Register Standalone Components in `app.component.ts`
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../lib/components/header/header.component';
import { SidebarComponent } from '../lib/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
```

---

## Sidebar Behavior
### How the Sidebar Listens for Window Resizing
The **sidebar** automatically hides on smaller screens and remains open on larger screens using the `@HostListener` decorator to listen for **window resize events**:

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = window.innerWidth > 768; // Sidebar is open by default on large screens

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isOpen = window.innerWidth > 768; // Hide sidebar on small screens
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
```

### Explanation:
- The `isOpen` state determines whether the sidebar is **visible or hidden**.
- The `@HostListener('window:resize')` listens for **window size changes** and automatically **closes the sidebar on small screens**.
- If the screen width is **greater than 768px**, the sidebar remains **visible**.
- If the screen width is **less than 768px**, the sidebar **closes automatically**.

---

## Manual Sidebar Toggle
You can manually **toggle** the sidebar by clicking the **hamburger menu** in the header. This is achieved using JavaScript in `header.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('open');
  }
}
```

In the `header.component.html`, add a button to trigger this function:
```html
<button class="menu-toggle" (click)="toggleSidebar()">☰</button>
```

This will **toggle the sidebar visibility** when the button is clicked.

---

## Customizing the Sidebar
### Updating the Sidebar Template
To customize the **sidebar layout** or **navigation items**, modify the `sidebar.component.html` file:

#### **Default Sidebar Template**
```html
<aside class="sidebar" [class.open]="isOpen">
  <ul>
    <li><a routerLink="/dashboard">Dashboard</a></li>
    <li><a routerLink="/reports">Reports</a></li>
    <li><a routerLink="/settings">Settings</a></li>
  </ul>
</aside>
```

#### **Customizing Sidebar Links**
To change the navigation links, simply update the `<ul>` list:
```html
<ul>
  <li><a routerLink="/home">Home</a></li>
  <li><a routerLink="/analytics">Analytics</a></li>
  <li><a routerLink="/users">Users</a></li>
</ul>
```

### Updating Sidebar Styles
Modify `sidebar.component.scss` to **change the appearance**:
```scss
.sidebar {
  background: #222; // Change background color
  width: 280px; // Adjust width
}
```

If you want to implement **collapsible menus**, you can add a dropdown inside the sidebar and modify the `.sidebar` styles accordingly.

---

## Summary
✅ **Standalone Components**: The header and sidebar are **standalone** and reusable across multiple Angular projects.
✅ **Responsive Behavior**: The sidebar **hides on small screens** and remains **open on large screens**.
✅ **Window Resizing Listener**: Automatically **closes on small screens** via `@HostListener('window:resize')`.
✅ **Manual Toggle**: The sidebar can be **toggled manually** using the hamburger menu button.
✅ **Easy Customization**: Developers can **update sidebar links and styles** to match their application needs.

🚀 **With this setup, the header and sidebar provide a seamless, responsive, and customizable experience across multiple Angular applications.**

