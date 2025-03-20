import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnInit {
    private http;
    isOpen: boolean;
    menuItems: any[];
    constructor(http: HttpClient);
    ngOnInit(): void;
    private loadSidebarConfig;
    onResize(event: any): void;
    toggleSidebar(): void;
    toggleSubMenu(item: any, event: Event): void;
    handleItemClick(item: any): void;
    executeAction(action: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "app-sidebar", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=sidebar.component.d.ts.map