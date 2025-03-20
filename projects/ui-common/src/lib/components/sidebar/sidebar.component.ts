import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeIconsModule } from '../font-awesome-icons.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FontAwesomeIconsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;
  menuItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSidebarConfig();
  }

  private loadSidebarConfig() {
    console.log('ABOUT TO LOAD SIDEBAR.JSON')
    this.http.get('assets/sidebar.json').subscribe((data: any) => {
      this.menuItems = data.items;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isOpen = window.innerWidth > 768;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSubMenu(item: any, event: Event) {
    event.stopPropagation();
    item.isOpen = !item.isOpen;
  }

  handleItemClick(item: any) {
    if (item.action) {
      this.executeAction(item.action);
    }
  }

  executeAction(action: any) {
    if (typeof action === 'string') {
      console.log(`Executing action: ${action}`);
    } else if (action.actionFn) {
      console.log(`Executing function: ${action.actionFn}`);
    }
  }
}
