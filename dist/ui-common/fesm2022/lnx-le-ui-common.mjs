import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, NgModule, HostListener } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$2 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i1$1 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

class HeaderComponent {
    toggleSidebar() {
        document.querySelector('.sidebar')?.classList.toggle('open');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.2", type: HeaderComponent, isStandalone: true, selector: "app-header", ngImport: i0, template: "<header class=\"header\">\n  <div class=\"logo\">The Logo Placement</div>\n  <button class=\"menu-toggle\" (click)=\"toggleSidebar()\">\u2630</button>\n  <nav class=\"nav\">\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/settings\">Settings</a>\n    <a routerLink=\"/profile\">Profile</a>\n  </nav>\n</header>\n", styles: [".header{display:flex;align-items:center;justify-content:space-between;background:#222;color:#fff;padding:10px 20px}.nav{display:flex;gap:15px}.nav a{color:#fff;text-decoration:none;padding:5px 10px;transition:.3s}.nav a:hover{background:#444;border-radius:5px}.menu-toggle{display:none;background:none;color:#fff;font-size:24px;border:none;cursor:pointer}@media (max-width: 768px){.nav{display:none}.menu-toggle{display:block}}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-header', standalone: true, imports: [RouterModule], template: "<header class=\"header\">\n  <div class=\"logo\">The Logo Placement</div>\n  <button class=\"menu-toggle\" (click)=\"toggleSidebar()\">\u2630</button>\n  <nav class=\"nav\">\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/settings\">Settings</a>\n    <a routerLink=\"/profile\">Profile</a>\n  </nav>\n</header>\n", styles: [".header{display:flex;align-items:center;justify-content:space-between;background:#222;color:#fff;padding:10px 20px}.nav{display:flex;gap:15px}.nav a{color:#fff;text-decoration:none;padding:5px 10px;transition:.3s}.nav a:hover{background:#444;border-radius:5px}.menu-toggle{display:none;background:none;color:#fff;font-size:24px;border:none;cursor:pointer}@media (max-width: 768px){.nav{display:none}.menu-toggle{display:block}}\n"] }]
        }] });

class FontAwesomeIconsModule {
    constructor(library) {
        library.addIconPacks(fas, far);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: FontAwesomeIconsModule, deps: [{ token: i1$1.FaIconLibrary }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: FontAwesomeIconsModule, imports: [CommonModule,
            FontAwesomeModule], exports: [FontAwesomeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: FontAwesomeIconsModule, imports: [CommonModule,
            FontAwesomeModule, FontAwesomeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: FontAwesomeIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                    ],
                    exports: [FontAwesomeModule],
                }]
        }], ctorParameters: () => [{ type: i1$1.FaIconLibrary }] });

class SidebarComponent {
    http;
    isOpen = true;
    menuItems = [];
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.loadSidebarConfig();
    }
    loadSidebarConfig() {
        console.log('ABOUT TO LOAD SIDEBAR.JSON');
        this.http.get('assets/sidebar.json').subscribe((data) => {
            this.menuItems = data.items;
        });
    }
    onResize(event) {
        this.isOpen = window.innerWidth > 768;
    }
    toggleSidebar() {
        this.isOpen = !this.isOpen;
    }
    toggleSubMenu(item, event) {
        event.stopPropagation();
        item.isOpen = !item.isOpen;
    }
    handleItemClick(item) {
        if (item.action) {
            this.executeAction(item.action);
        }
    }
    executeAction(action) {
        if (typeof action === 'string') {
            console.log(`Executing action: ${action}`);
        }
        else if (action.actionFn) {
            console.log(`Executing function: ${action.actionFn}`);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: SidebarComponent, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.2", type: SidebarComponent, isStandalone: true, selector: "app-sidebar", host: { listeners: { "window:resize": "onResize($event)" } }, ngImport: i0, template: "<aside class=\"sidebar\" [class.collapsed]=\"!isOpen\">\n  <div class=\"sidebar-header\">\n    <button (click)=\"toggleSidebar()\" class=\"toggle-btn\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n  </div>\n\n  <ul class=\"sidebar-menu\">\n    <li *ngFor=\"let item of menuItems\" [title]=\"item.label\">\n      <div class=\"menu-item\" (click)=\"handleItemClick(item)\">\n        <i class=\"fa\" [ngClass]=\"item.icon\"></i>\n        <span *ngIf=\"isOpen\">{{ item.label }}</span>\n        <i *ngIf=\"item.items\" class=\"fa fa-chevron-down submenu-toggle\" (click)=\"toggleSubMenu(item, $event)\"></i>\n      </div>\n\n      <ul *ngIf=\"item.isOpen && item.items\" class=\"submenu\">\n        <li *ngFor=\"let subItem of item.items\">\n          <a [routerLink]=\"subItem.url\" (click)=\"handleItemClick(subItem)\">\n            <i class=\"fa\" [ngClass]=\"subItem.icon\"></i>\n            <span>{{ subItem.label }}</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</aside>\n", styles: [".sidebar{width:260px;height:100vh;background:#1a1a1a;color:#fff;transition:width .3s;display:flex;flex-direction:column;overflow-x:hidden}.sidebar.collapsed{width:80px}.sidebar.collapsed .menu-item{justify-content:center}.sidebar.collapsed .menu-item span,.sidebar.collapsed .submenu{display:none}.sidebar .sidebar-header{display:flex;justify-content:flex-end;padding:15px}.sidebar .toggle-btn{background:none;border:none;color:#fff;font-size:24px;cursor:pointer}.sidebar .sidebar-menu{list-style:none;padding:0;margin:0;flex-grow:1}.sidebar .sidebar-menu li{display:flex;flex-direction:column}.sidebar .sidebar-menu li .menu-item{display:flex;align-items:center;justify-content:space-between;color:#fff;text-decoration:none;padding:10px 15px;transition:background .3s;cursor:pointer}.sidebar .sidebar-menu li .menu-item:hover{background:#333}.sidebar .sidebar-menu li .menu-item i{font-size:20px}.sidebar .sidebar-menu li .submenu{list-style:none;padding-left:15px}.sidebar .sidebar-menu li .submenu li a{display:flex;align-items:center;color:#bbb;text-decoration:none;padding:8px 10px;transition:background .3s}.sidebar .sidebar-menu li .submenu li a:hover{background:#444}.sidebar .sidebar-menu li .submenu li a i{font-size:16px}@media (max-width: 768px){.sidebar{width:80px}.sidebar.collapsed{width:0;overflow:hidden}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: HttpClientModule }, { kind: "ngmodule", type: FontAwesomeIconsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar', standalone: true, imports: [CommonModule, RouterModule, HttpClientModule, FontAwesomeIconsModule], template: "<aside class=\"sidebar\" [class.collapsed]=\"!isOpen\">\n  <div class=\"sidebar-header\">\n    <button (click)=\"toggleSidebar()\" class=\"toggle-btn\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n  </div>\n\n  <ul class=\"sidebar-menu\">\n    <li *ngFor=\"let item of menuItems\" [title]=\"item.label\">\n      <div class=\"menu-item\" (click)=\"handleItemClick(item)\">\n        <i class=\"fa\" [ngClass]=\"item.icon\"></i>\n        <span *ngIf=\"isOpen\">{{ item.label }}</span>\n        <i *ngIf=\"item.items\" class=\"fa fa-chevron-down submenu-toggle\" (click)=\"toggleSubMenu(item, $event)\"></i>\n      </div>\n\n      <ul *ngIf=\"item.isOpen && item.items\" class=\"submenu\">\n        <li *ngFor=\"let subItem of item.items\">\n          <a [routerLink]=\"subItem.url\" (click)=\"handleItemClick(subItem)\">\n            <i class=\"fa\" [ngClass]=\"subItem.icon\"></i>\n            <span>{{ subItem.label }}</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</aside>\n", styles: [".sidebar{width:260px;height:100vh;background:#1a1a1a;color:#fff;transition:width .3s;display:flex;flex-direction:column;overflow-x:hidden}.sidebar.collapsed{width:80px}.sidebar.collapsed .menu-item{justify-content:center}.sidebar.collapsed .menu-item span,.sidebar.collapsed .submenu{display:none}.sidebar .sidebar-header{display:flex;justify-content:flex-end;padding:15px}.sidebar .toggle-btn{background:none;border:none;color:#fff;font-size:24px;cursor:pointer}.sidebar .sidebar-menu{list-style:none;padding:0;margin:0;flex-grow:1}.sidebar .sidebar-menu li{display:flex;flex-direction:column}.sidebar .sidebar-menu li .menu-item{display:flex;align-items:center;justify-content:space-between;color:#fff;text-decoration:none;padding:10px 15px;transition:background .3s;cursor:pointer}.sidebar .sidebar-menu li .menu-item:hover{background:#333}.sidebar .sidebar-menu li .menu-item i{font-size:20px}.sidebar .sidebar-menu li .submenu{list-style:none;padding-left:15px}.sidebar .sidebar-menu li .submenu li a{display:flex;align-items:center;color:#bbb;text-decoration:none;padding:8px 10px;transition:background .3s}.sidebar .sidebar-menu li .submenu li a:hover{background:#444}.sidebar .sidebar-menu li .submenu li a i{font-size:16px}@media (max-width: 768px){.sidebar{width:80px}.sidebar.collapsed{width:0;overflow:hidden}}\n"] }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }], propDecorators: { onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

let UiCommonModule = class UiCommonModule {
};
UiCommonModule = __decorate([
    NgModule({
        declarations: [SidebarComponent],
        imports: [CommonModule, RouterModule, NgModule], // CommonModule is required for directives like *ngIf, *ngFor
        exports: [HeaderComponent, SidebarComponent], // Export components so they can be used elsewhere
    })
], UiCommonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, SidebarComponent, UiCommonModule };
//# sourceMappingURL=lnx-le-ui-common.mjs.map
