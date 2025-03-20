import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from '../../../ui-common/src/lib/components/sidebar/sidebar.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';

}

// bootstrapApplication(AppComponent).catch((err) => console.error(err));